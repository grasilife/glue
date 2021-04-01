import { Component, Prop, h, State, EventEmitter, Event, Host, Watch } from '@stencil/core';
import classNames from 'classnames';
import { isDef } from '../../utils/base';
import { addUnit } from '../../utils/format/unit';
export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
import('intersection-observer');
@Component({
  tag: 'glue-image',
  styleUrl: 'glue-image.less',
  shadow: false,
})
export class GlueImage {
  private imageRef: HTMLImageElement;
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
  @State() loadingState = true;
  @State() errorState: boolean = false;
  @Event() glueLoad: EventEmitter;
  @Event() glueError: EventEmitter;
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
    this.loadingState = false;
    console.log(this.loadingState, 'this.loadingState');
    this.glueLoad.emit(event);
  };
  imageOnError = (event?: Event) => {
    this.errorState = true;
    this.loadingState = false;
    this.glueError.emit(event);
  };

  renderLoadingIcon = () => {
    if (this.loadingIcon == '#slot') {
      return <slot name="loadingIcon"></slot>;
    }
    return (
      <glue-icon
        name={this.loadingIcon}
        class={classNames({
          'glue-image__loading-icon': true,
        })}
        classPrefix={this.iconPrefix}
      ></glue-icon>
    );
  };

  renderErrorIcon = () => {
    if (this.errorIcon == '#slot') {
      console.log(32323232);
      return <slot name="errorIcon"></slot>;
    }
    return (
      <glue-icon
        name={this.errorIcon}
        class={classNames({
          'glue-image__error-icon': true,
        })}
        classPrefix={this.iconPrefix}
      ></glue-icon>
    );
  };

  renderPlaceholder = () => {
    console.log(this.loadingState, this.showLoading, this.errorState, this.showError, 'this.loadingState');
    console.log(this.errorState, 'this.errorState');
    if (this.errorState && this.showError) {
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
    if (this.loadingState && this.showLoading) {
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
  };

  renderImage = () => {
    if (this.errorState || !this.src) {
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
      console.log('ahuhauhauhuahu1');
      //懒加载走这里
      return <img ref={dom => (this.imageRef = dom)} {...attrs} onLoad={() => this.imageOnLoad()} onError={() => this.imageOnError()} />;
    }
    //非懒加载走这里
    console.log('ahuhauhauhuahu');
    return <img ref={dom => (this.imageRef = dom)} src={this.src} onLoad={() => this.imageOnLoad()} onError={() => this.imageOnError()} {...attrs} />;
  };

  // onLazyLoaded = ({ el }: { el: HTMLElement }) => {
  //   if (el === this.imageRef && this.loadingState) {
  //     this.imageOnLoad();
  //   }
  // };

  // onLazyLoadError = ({ el }: { el: HTMLElement }) => {
  //   if (el === this.imageRef && !this.errorState) {
  //     this.imageOnError();
  //   }
  // };
  @Watch('src')
  watchHandler() {
    // this.errorState = false;
    // this.loadingState = true;
  }
  componentDidLoad() {
    if (!this.lazyLoad) {
      return;
    }
    const lazyImg = new IntersectionObserver(
      //imgage必须有宽和高才会生效,要不然isIntersecting全部为true
      entries => {
        console.log(entries, 'entries');
        // 异步 api 关系
        //isIntersecting 目标元素当前是否可见 Boolean值 可见为true
        entries.forEach(item => {
          console.log(item.isIntersecting, 'item.isIntersecting');
          if (item.isIntersecting) {
            // 停止观察当前元素 避免不可见时候再次调用callback函数
            this.imageRef.src = this.src;
            console.log(this.imageRef.src, 'this.imageRef.src');
            lazyImg.unobserve(this.imageRef);
          }
        });
        if (entries[entries.length - 1].isIntersecting) {
        }
      },
      {
        // rootMargin:用来扩大或者缩小视窗的的大小，使用css的定义方法，10px 10px 30px 20px表示top、right、bottom 和 left的值
        rootMargin: '300px 0px',
      },
    );
    //observe接受一个DOM元素
    if (this.imageRef) {
      lazyImg.observe(this.imageRef);
    }
  }
  render() {
    return (
      <Host
        class={classNames('glue-image', {
          'glue-image--round': this.round,
        })}
        style={this.style()}
      >
        {this.renderImage()}
        {/* {this.renderPlaceholder()} */}
        <div
          class={classNames({
            'glue-image__hidden': !(this.errorState && this.showError),
            'glue-image__error': true,
          })}
          hidden={!(this.errorState && this.showError)}
        >
          {this.renderErrorIcon()}
        </div>
        <div
          class={classNames({
            'glue-image__hidden': !(this.loadingState && this.showLoading),
            'glue-image__loading': true,
          })}
          hidden={!(this.loadingState && this.showLoading)}
        >
          {this.renderLoadingIcon()}
        </div>
      </Host>
    );
  }
}
