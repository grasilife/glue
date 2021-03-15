import { Component, Prop, h, State, EventEmitter, Event, Host } from '@stencil/core';
import classNames from 'classnames';
import { isDef } from '../../utils/base';
import { addUnit } from '../../utils/format/unit';
export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
@Component({
  tag: 'glue-image',
  styleUrl: 'glue-image.less',
  shadow: false,
})
export class GlueImage {
  private imageRef: HTMLElement;
  @Prop() src: string;

  @Prop() alt: string;

  @Prop() fit: ImageFit;

  @Prop() round: boolean;
  @Prop() width: string | number;
  @Prop() height: string | number;
  @Prop() radius: string | number;
  @Prop() lazyLoad: boolean;
  @Prop() iconPrefix: string;
  @Prop() showError = true;
  @Prop() showLoading = true;
  @Prop() errorIcon = 'photo-fail';
  @Prop() loadingIcon = 'photo';
  @State() loading = true;
  @State() error = false;
  // @Event()
  onLoad: EventEmitter;

  @Event() onError: EventEmitter;
  style = () => {
    const style = {
      width: '',
      height: '',
      overflow: '',
      borderRadius: '',
    };

    if (isDef(this.width)) {
      style.width = addUnit(this.width);
    }

    if (isDef(this.height)) {
      style.height = addUnit(this.height);
    }

    if (isDef(this.radius)) {
      style.overflow = 'hidden';
      style.borderRadius = addUnit(this.radius);
    }

    return style;
  };

  imageOnLoad = (event?: Event) => {
    console.log(event);
    this.loading = false;
    // this.onLoad.emit('load', event);
  };
  imageOnError = (event?: Event) => {
    console.log(event);
    this.error = true;
    this.loading = false;
    // this.onError.emit('error', event);
  };

  renderLoadingIcon = () => {
    return (
      <glue-icon
        name={this.loadingIcon}
        class={classNames({
          'glue-image__loading-icon': true,
        })}
        classPrefix={this.iconPrefix}
      />
    );
  };

  renderErrorIcon = () => {
    return (
      <glue-icon
        name={this.errorIcon}
        class={classNames({
          'glue-image__error-icon': true,
        })}
        classPrefix={this.iconPrefix}
      />
    );
  };

  renderPlaceholder = () => {
    if (this.loading && this.showLoading) {
      return (
        <div
          class={classNames({
            'glue-image__loading': true,
          })}
        >
          {this.renderLoadingIcon()}
        </div>
      );
    }
    if (this.error && this.showError) {
      return (
        <div
          class={classNames({
            'glue-image__error': true,
          })}
        >
          {this.renderErrorIcon()}
        </div>
      );
    }
  };

  renderImage = () => {
    if (this.error || !this.src) {
      return;
    }

    const attrs = {
      alt: this.alt,
      class: classNames({
        'glue-image__img': true,
      }),
      style: {
        objectFit: this.fit,
      },
    };

    if (this.lazyLoad) {
      return <img ref={dom => (this.imageRef = dom)} {...attrs} />;
    }

    return <img ref={dom => (this.imageRef = dom)} src={this.src} onLoad={() => this.imageOnLoad()} onError={() => this.imageOnError()} {...attrs} />;
  };

  onLazyLoaded = ({ el }: { el: HTMLElement }) => {
    if (el === this.imageRef && this.loading) {
      this.imageOnLoad();
    }
  };

  onLazyLoadError = ({ el }: { el: HTMLElement }) => {
    if (el === this.imageRef && !this.error) {
      this.imageOnError();
    }
  };
  render() {
    return (
      <Host
        class={classNames('glue-image', {
          'glue-image--round': this.round,
        })}
        style={this.style()}
      >
        {this.renderImage()}
        {this.renderPlaceholder()}
        <slot></slot>
      </Host>
    );
  }
}
