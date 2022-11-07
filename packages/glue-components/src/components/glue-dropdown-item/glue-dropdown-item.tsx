import { Component, Prop, h, Host, State } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-dropdown-item');
@Component({
  tag: 'glue-dropdown-item',
  styleUrl: 'glue-dropdown-item.less',
  shadow: false,
})
export class GlueDropdownItem {
  @Prop() first: string;
  @Prop() gtitle: string;
  @Prop() disabled: boolean;
  @Prop() teleport: any;
  @Prop() modelValue = null;
  @Prop() titleClass = null;
  @Prop() options = [];
  @Prop() lazyRender = true;
  @State() showPopup: false;
  @State() transition: true;
  @State() showWrapper: false;

  // createEmitter = eventName => () => emit(eventName);
  // onOpen = createEmitter('open');
  // onClose = createEmitter('close');
  // onOpened = createEmitter('opened');

  onClosed = () => {
    this.showWrapper = false;
    // emit('closed');
  };

  onClickWrapper = (event) => {
    // prevent being identified as clicking outside and closed when using teleport
    if (this.teleport) {
      event.stopPropagation();
    }
  };

  toggle = (show = !this.showPopup, options = {}) => {
    console.log(options);
    if (show === this.showPopup) {
      return;
    }

    // this.showPopup = show;
    // this.transition = !options.immediate;

    if (show) {
      // this.showWrapper = true;
    }
  };

  renderTitle = () => {
    // if (slots.gtitle) {
    //   return slots.gtitle();
    // }

    if (this.gtitle) {
      return this.gtitle;
    }

    const match = this.options.filter(
      (option) => option.value === this.modelValue
    );

    return match.length ? match[0].text : '';
  };

  renderOption = (option) => {
    // const { activeColor } = parent.this;
    const active = option.value === this.modelValue;

    const onClick = () => {
      this.showPopup = false;

      if (option.value !== this.modelValue) {
        // emit('update:modelValue', option.value);
        // emit('change', option.value);
      }
    };

    return (
      <glue-cell
        clickable
        key={option.value}
        icon={option.icon}
        gtitle={option.text}
        class={classNames('glue-dropdown-item__option', bem([active]))}
        // style={{ color: active ? activeColor : '' }}
        onClick={onClick}
      >
        {/* {active && <glue-icon class={bem('icon')} color={activeColor} name="success" />} */}
      </glue-cell>
    );
  };

  renderContent = () => {
    // // const { offset } = parent;
    // const { zIndex, overlay, duration, direction, closeOnClickOverlay } = parent.this;
    // const style = { zIndex, top: '', bottom: '' };
    // if (direction === 'down') {
    //   // style.top = `${offset.value}px`;
    // } else {
    //   // style.bottom = `${offset.value}px`;
    // }
    // return (
    //   <div v-show={this.showWrapper} style={style} class={classNames(bem([direction]))} onClick={this.onClickWrapper}>
    //     <glue-popup
    //       class="glue-dropdown-item__content"
    //       overlay={overlay}
    //       position={direction === 'down' ? 'top' : 'bottom'}
    //       duration={this.transition ? duration : 0}
    //       lazyRender={this.lazyRender}
    //       overlayStyle={{ position: 'absolute' }}
    //       closeOnClickOverlay={closeOnClickOverlay}
    //       // onOpen={this.onOpen}
    //       // onClose={this.onClose}
    //       // onOpened={this.onOpened}
    //       // onClosed={this.onClosed}
    //     >
    //       {this.options.map(this.renderOption)}
    //       <slot></slot>
    //     </glue-popup>
    //   </div>
    // );
  };
  render() {
    // if (this.teleport) {
    //   return <Teleport to={this.teleport}>{renderContent()}</Teleport>;
    // }

    return <Host>{this.renderContent()}</Host>;
  }
}
