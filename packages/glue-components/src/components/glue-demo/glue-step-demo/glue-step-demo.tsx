import { Component, State, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-step-demo',
  styleUrl: 'glue-step-demo.less',
  shadow: false,
})
export class GlueStepDemo {
  @State() basicUsage: string = '基础用法';
  @State() nextStepTitle: string = '下一步';
  @State() step1: string = '买家下单';
  @State() step2: string = '商家接单';
  @State() step3: string = '买家提货';
  @State() step4: string = '交易完成';
  @State() title2: string = '描述信息';
  @State() title3: string = '竖向步骤条';
  @State() status1: string = '【城市】物流状态1';
  @State() status2: string = '【城市】物流状态2';
  @State() status3: string = '【快件已发货';
  @State() customStyle: string = '自定义样式';
  @State() active: number = 1;
  render() {
    return (
      <div class={classNames('cunstom')}>
        <glue-doc-section>
          <glue-doc-block gtitle={this.basicUsage}>
            <glue-steps active={this.active}>
              <glue-step>{this.step1}</glue-step>
              <glue-step>{this.step2}</glue-step>
              <glue-step>{this.step3}</glue-step>
              <glue-step>{this.step4}</glue-step>
            </glue-steps>
          </glue-doc-block>
          <glue-doc-block gtitle={this.basicUsage}>1</glue-doc-block>
        </glue-doc-section>
      </div>
    );
  }
}
