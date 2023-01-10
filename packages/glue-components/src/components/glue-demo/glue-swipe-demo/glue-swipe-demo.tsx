import { Component, State, h, Host } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-swipe-demo',
  styleUrl: 'glue-swipe-demo.less',
  shadow: false,
})
export class GlueSwipeDemo {
  @State() basicUsage: string = '基础用法';
  @State() title2: string = '图片懒加载';
  @State() title3: string = '监听 change 事件';
  @State() title4: string = '纵向滚动';
  @State() title5: string = '自定义滑块大小';
  @State() title6: string = '自定义指示器';
  @State() message: string = '当前 Swipe 索引：';
  @State() current: number = 0;
  @State() images: string[] = [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
    'https://img.yzcdn.cn/vant/apple-3.jpg',
    'https://img.yzcdn.cn/vant/apple-4.jpg',
  ];
  glueChange(e) {
    console.log(e, 'glueChange');
  }
  render() {
    return (
      <Host>
        <glue-doc-section>
          <glue-doc-block gtitle={this.basicUsage}>
            <glue-swipe autoplay={3000} indicatorColor="white">
              <glue-swipe-item>1</glue-swipe-item>
              <glue-swipe-item>2</glue-swipe-item>
              <glue-swipe-item>3</glue-swipe-item>
              <glue-swipe-item>4</glue-swipe-item>
            </glue-swipe>
          </glue-doc-block>
          <glue-doc-block gtitle={this.title2}>
            <glue-swipe autoplay={3000}>
              {this.images.map((item, index) => {
                return (
                  <glue-swipe-item key={index}>
                    <img src={item} />
                  </glue-swipe-item>
                );
              })}
            </glue-swipe>
          </glue-doc-block>
          <glue-doc-block gtitle={this.title3}>
            <glue-swipe
              autoplay={3000}
              indicatorColor="white"
              onGlueChange={(e) => {
                this.glueChange(e);
              }}
            >
              <glue-swipe-item>1</glue-swipe-item>
              <glue-swipe-item>2</glue-swipe-item>
              <glue-swipe-item>3</glue-swipe-item>
              <glue-swipe-item>4</glue-swipe-item>
            </glue-swipe>
          </glue-doc-block>
          <glue-doc-block gtitle={this.title4}>
            <glue-swipe
              vertical
              autoplay={3000}
              indicatorColor="white"
              style={{
                height: '200px',
              }}
              class="demo-swipe--vertical"
              onGlueChange={(e) => {
                this.glueChange(e);
              }}
            >
              <glue-swipe-item>1</glue-swipe-item>
              <glue-swipe-item>2</glue-swipe-item>
              <glue-swipe-item>3</glue-swipe-item>
              <glue-swipe-item>4</glue-swipe-item>
            </glue-swipe>
          </glue-doc-block>
          <glue-doc-block gtitle={this.title5}>
            <glue-swipe width={300} indicatorColor="white" loop={false}>
              <glue-swipe-item>1</glue-swipe-item>
              <glue-swipe-item>2</glue-swipe-item>
              <glue-swipe-item>3</glue-swipe-item>
              <glue-swipe-item>4</glue-swipe-item>
            </glue-swipe>
          </glue-doc-block>
          {/* <glue-doc-block gtitle={this.title6}>
            <glue-swipe
              width={300}
              indicatorColor="white"
              loop={false}
              onGlueChange={(e) => {
                this.glueChange(e);
              }}
            >
              <glue-swipe-item>1</glue-swipe-item>
              <glue-swipe-item>2</glue-swipe-item>
              <glue-swipe-item>3</glue-swipe-item>
              <glue-swipe-item>4</glue-swipe-item>
            </glue-swipe>
          </glue-doc-block> */}
        </glue-doc-section>
      </Host>
    );
  }
}
