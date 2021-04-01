import { Component, Prop, h, State } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-demo',
  styleUrl: 'glue-demo.less',
  shadow: false,
})
export class GlueDemo {
  @Prop() first: string;
  @State() showShare = false;
  @State() list = [1, 1, 1, 1, 1, 1, 11, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, ,];
  handleClick = e => {
    console.log(e);
  };
  render() {
    return (
      <div>
        <glue-row groups="10">
          <glue-col span="8" class="col">
            <div class="text">span: 8</div>
          </glue-col>
          <glue-col span="8" class="col">
            <div class="text">span: 8</div>
          </glue-col>
          <glue-col span="8" class="col">
            <div class="text">span: 8</div>
          </glue-col>
        </glue-row>
        <glue-row justify="center">
          <glue-col span="6">
            <div class="text">span: 8</div>
          </glue-col>
          <glue-col span="6">
            <div class="text">span: 8</div>
          </glue-col>
          <glue-col span="6">
            <div class="text">span: 8</div>
          </glue-col>
        </glue-row>
      </div>
    );
  }
}
