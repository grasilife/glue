import { Component, h, State } from '@stencil/core';
// import Toast from '../glue-toast/index';
// import classNames from 'classnames';
@Component({
  tag: 'glue-demo',
  styleUrl: 'glue-demo.less',
  shadow: false,
})
export class GlueDemo {
  timeRef;
  container;
  @State() actions = [
    { name: '选项一', color: '#ee0a24' },
    { name: '选项二', disabled: true },
    { name: '选项三', subname: '描述信息', loading: true },
  ];
  @State() options = [
    { name: '微信', icon: 'wechat' },
    { name: '微博', icon: 'weibo' },
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
  ];
  @State() open: boolean = false;
  @State() show: boolean = false;
  @State() gradientColor = {
    '0%': '#3fecff',
    '100%': '#6149f6',
  };
  @State() columns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华'];
  @State() columns2 = [
    // 第一列
    {
      values: ['周一', '周二', '周三', '周四', '周五'],
      defaultIndex: 2,
    },
    // 第二列
    {
      values: ['上午', '下午', '晚上'],
      defaultIndex: 1,
    },
  ];
  @State() columns3 = [
    {
      text: '浙江',
      disabled: true,
      children: [
        {
          text: '杭州',
          children: [{ text: '西湖区' }, { text: '余杭区' }],
        },
        {
          text: '温州',
          children: [{ text: '鹿城区' }, { text: '瓯海区' }],
        },
      ],
    },
    {
      text: '福建',
      children: [
        {
          text: '福州',
          children: [{ text: '鼓楼区' }, { text: '台江区' }],
        },
        {
          text: '厦门',
          children: [{ text: '思明区' }, { text: '海沧区' }],
        },
      ],
    },
  ];
  @State() columns4 = [
    {
      cityName: '浙江',
      cities: [
        {
          cityName: '杭州',
          cities: [{ cityName: '西湖区' }, { cityName: '余杭区' }],
        },
        {
          cityName: '温州',
          cities: [{ cityName: '鹿城区' }, { cityName: '瓯海区' }],
        },
      ],
    },
    {
      cityName: '福建',
      cities: [
        {
          cityName: '福州',
          cities: [{ cityName: '鼓楼区' }, { cityName: '台江区' }],
        },
        {
          cityName: '厦门',
          cities: [{ cityName: '思明区' }, { cityName: '海沧区' }],
        },
      ],
    },
  ];
  @State() customFieldName = {
    text: 'cityName',
    children: 'cities',
  };
  @State()
  fileList = [
    {
      url: 'https://img01.yzcdn.cn/vant/leaf.jpg',
      status: 'uploading',
      message: '上传中...',
    },
    {
      url: 'https://img01.yzcdn.cn/vant/tree.jpg',
      status: 'failed',
      message: '上传失败',
    },
  ];
  @State() fileList2 = [];
  @State() currentRate = 10;
  @State() currentTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  @State() currentDate = new Date();
  @State() minDate = new Date(2020, 0, 1);
  @State() maxDate = new Date(2025, 10, 1);
  handleClick = () => {
    this.currentRate = this.currentRate + 10;
  };
  closedHandle = () => {
    this.show = false;
  };
  // onGlueChange = e => {
  //   console.log(e, 'hauhaihiuahihu');
  //   this.currentTime = { ...e.detail.currentTime };
  // };
  start = () => {
    this.timeRef.start();
  };
  pause = () => {
    this.timeRef.pause();
  };
  reset = () => {
    this.timeRef.reset();
  };
  beforeChange = value => {
    console.log(value, 'ahfuahu');
    return new Promise(resolve => {
      setTimeout(() => {
        // 在 resolve 函数中返回 true 或 false
        resolve(true);
      }, 500);
    });
  };
  @State() list = [1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1];
  @State() loading = true;
  @State() finished = false;
  onLoad = () => {};
  componentDidLoad() {}
  click = () => {
    this.show = true;
  };
  afterRead = file => {
    file.status = 'uploading';
    file.message = '上传中...';

    setTimeout(() => {
      file.status = 'failed';
      file.message = '上传失败';
    }, 1000);
  };
  onOversize = file => {
    console.log(file, 'onOversize');
  };
  beforeRead = file => {
    if (file.type !== 'image/jpeg') {
      console.log('请上传 jpg 格式图片');
      return false;
    }
    return true;
  };
  formatter = value => {
    return value.replace(/\d/g, '');
  };
  onGlueConfirm = event => {
    console.log(event, 'event1');
  };
  onGlueCancel = event => {
    console.log(event, 'event2');
  };
  onGlueChange = event => {
    console.log(event, 'event3');
  };
  render() {
    return (
      <div class="container">
        {/* <div onClick={this.handleClick}>1111</div> */}
        {/* <glue-collapse model-value={[]}>
          <glue-collapse-item title="标题1" name="1" is-link>
            代码是写出来给人看的，附带能在机器上运行
          </glue-collapse-item>
          <glue-collapse-item title="标题2" name="2" is-link>
            代码是写出来给人看的，附带能在机器上运行
          </glue-collapse-item>
        </glue-collapse> */}
        {/* <glue-count-down
          autoStart
          time={3000}
          millisecond
          format="HH:mm:ss:SS"
          onGlueChange={this.onGlueChange}
          custom
          ref={dom => {
            this.timeRef = dom;
          }}
        >
          <span class="block">{this.currentTime.hours}</span>
          <span class="colon">:</span>
          <span class="block"> {this.currentTime.minutes}</span>
          <span class="colon">:</span>
          <span class="block">{this.currentTime.seconds} </span>
        </glue-count-down>
        <button onClick={this.start}>开始</button>
        <button onClick={this.pause}>暂停</button>
        <button onClick={this.reset}>重置</button>
        <glue-divider /> */}
        {/* <glue-list loading={this.loading} finished={this.finished} finished-text="没有更多了" onLoad={this.onLoad} loading-text="#slot">
          <div slot="loading-text">自定义加载中</div>
          {this.list.map(item => {
            return <glue-cell title={item.toString()}></glue-cell>;
          })}
        </glue-list> */}

        {/* <glue-progress percentage={50} stroke-width={8} inactive /> */}
        {/* <glue-skeleton title-state row={3} avatar avatar-shape="round" round avatar-size={80} loading={false}>
          <div>实际内容</div>
        </glue-skeleton> */}
        {/* <div
          class="sticky"
          ref={dom => {
            this.container = dom;
          }}
        >
          <glue-sticky offset-bottom-value={50} position="top">
            <glue-button type="primary">基础用法</glue-button>
          </glue-sticky>
        </div> */}
        {/* <glue-tag closeable type="primary">
          标签
        </glue-tag> */}
        {/* <glue-cell is-link title="基础用法" onClick={this.click} /> */}
        {/* <glue-action-sheet show={this.show} onGlueClosed={this.closedHandle} actions={this.actions} cancel-text="取消" description="这是一段描述信息" overlay /> */}
        {/* <glue-share-sheet show={this.show} title="立即分享给好友" options={this.options} overlay onGlueClosed={this.closedHandle} /> */}
        {/* <glue-swipe-cell left="#slot" right="#slot">
          <div slot="left">
            <glue-button square type="primary">
              选择
            </glue-button>
          </div>
          <glue-cell border={false} title="单元格" value="内容" />
          <div slot="right">
            <glue-button square type="danger">
              删除
            </glue-button>
            <glue-button square type="primary">
              收藏
            </glue-button>
          </div>
        </glue-swipe-cell> */}
        {/* <glue-action-bar>
          <glue-action-bar-icon icon="chat-o">客服</glue-action-bar-icon>
          <glue-action-bar-icon icon="cart-o">购物车</glue-action-bar-icon>
          <glue-action-bar-icon icon="shop-o">店铺</glue-action-bar-icon>
          <glue-action-bar-button type="warning" left-round={true}>
            加入购物车
          </glue-action-bar-button>
          <glue-action-bar-button type="danger" right-round={true}>
            立即购买
          </glue-action-bar-button>
        </glue-action-bar> */}
        {/* <glue-grid column-num="4" center direction="horizontal">
          <glue-grid-item icon="photo-o" text="文字" custom="#slot">
            <glue-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          </glue-grid-item>
          <glue-grid-item icon="home-o" text="文字" dot />
          <glue-grid-item icon="search" text="文字" badge="99+" />
          <glue-grid-item icon="photo-o" text="文字" />
          <glue-grid-item icon="photo-o" text="文字" />
          <glue-grid-item icon="photo-o" text="文字" />
          <glue-grid-item icon="photo-o" text="文字" />
          <glue-grid-item icon="photo-o" text="文字" />
        </glue-grid> */}
        {/* <glue-index-bar>
          <glue-index-anchor index="A" />
          <glue-cell title="文本" />
          <glue-cell title="文本" />
          <glue-cell title="文本" />
          <glue-index-anchor index="B" />
          <glue-cell title="文本" />
          <glue-cell title="文本" />
          <glue-cell title="文本" />
        </glue-index-bar> */}
        {/* <glue-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow fixed placeholder border /> */}
        {/* <glue-pagination value={1} total-items="24" items-per-page="5" />
        <glue-pagination value={1} page-count="12" mode="simple" />
        <glue-pagination value={1} total-items="125" show-page-size="3" force-ellipses={true} /> */}
        {/* <glue-rate vlaue={1} touchable count={10} color="#ffd21e" void-color="#eee" allow-half />
        <div class="silder">
          <glue-slider value={10} min="-50" max="50" step="10" bar-height="4px" active-color="#ee0a24" vertical={true} />
        </div> */}
        {/* <glue-stepper model-value={1} step={2} min={5} max={8} decimal-length="1" input-width="40px" button-size="32px" theme="round" before-change={this.beforeChange} /> */}
        {/* <glue-switch value={true} loading size="24px" active-color="#ee0a24" inactive-color="#dcdee0" />
        <glue-loading /> */}
        {/* <glue-uploader value={[]} show-upload /> */}
        {/* <glue-uploader
          show-upload
          value={this.fileList}
          multiple
          preview-image
          deletable
          after-read={this.afterRead}
          before-read={this.beforeRead}
          max-count="4"
          max-size={50000000}
          onGlueOversize={this.onOversize}
          disabled
        ></glue-uploader> */}
        {/* <glue-calendar show={true} show-title show-subtitle show-confirm={true} show-mark title="选择单个日期" type="range" color="#1989fa" max-range="3" first-day-of-week="1" /> */}
        {/* <glue-picker title="标题" columns={this.columns} onGlueConfirm={this.onGlueConfirm} onGlueCancel={this.onGlueCancel} onGlueChange={this.onGlueChange} default-index="2" /> */}
        {/* <glue-picker title="标题" columns={this.columns2} onGlueConfirm={this.onGlueConfirm} onGlueCancel={this.onGlueCancel} onGlueChange={this.onGlueChange} default-index="2" /> */}
        {/* <glue-picker title="标题" columns={this.columns3} onGlueConfirm={this.onGlueConfirm} onGlueCancel={this.onGlueCancel} onGlueChange={this.onGlueChange} loading={false} /> */}
        {/* <glue-picker
          title="#slot"
          columns={this.columns4}
          onGlueConfirm={this.onGlueConfirm}
          onGlueCancel={this.onGlueCancel}
          onGlueChange={this.onGlueChange}
          loading={false}
          text-key="cityName"
          children-key="cities"
          toolbar-position="top"
          show-toolbar={true}
          item-height={80}
          visible-item-count={6}
          swipe-duration={1000}
        >
          <span slot="title">确认1</span>
        </glue-picker> */}
        {/* <div class="sswipeClass">
          <glue-swipe class="my-swipe" autoplay={3000} indicator-color="white" show-indicators={true} loop={true} touchable={true} vertical={false} width={200}>
            <glue-swipe-item>1</glue-swipe-item>
            <glue-swipe-item>2</glue-swipe-item>
            <glue-swipe-item>3</glue-swipe-item>
          </glue-swipe>
        </div> */}
        {/* <glue-datetime-picker model-value={this.currentDate} type="date" title="选择年月日" min-date={this.minDate} max-date={this.maxDate}></glue-datetime-picker> */}
        {/* <glue-number-keyboard show={true} /> */}
        {/* <glue-number-keyboard show={true} close-button-text="完成" extra-key="." theme="custom" /> */}
        {/* <glue-number-keyboard show={true} close-button-text="完成" extra-key="X" theme="custom" /> */}
        {/* <glue-number-keyboard show={true} close-button-text="完成" extra-key="." title="键盘标题" theme="default" /> */}
        {/* <glue-number-keyboard show={true} close-button-text="完成" title="键盘标题" theme="custom" extra-key={['00', '.']} /> */}

        {/* <glue-password-input value="123" focused /> */}
        {/* <glue-number-keyboard show={true} random-key-order theme="default" /> */}
        {/* <glue-cell-group>
          <glue-field model-value="" label="文本" placeholder="请输入用户名" />
        </glue-cell-group> */}

        {/* <glue-field model-value="11" label="文本" placeholder="请输入文本" readonly />
        <glue-field model-value="" type="tel" label="手机号" placeholder="请输入手机号" disabled />
        <glue-field model-value="" type="digit" label="整数" placeholder="请输入整数" />
        <glue-field model-value="" type="number" label="数字" placeholder="请输入数字(支持小数)" />
        <glue-field model-value="" type="password" label="密码" placeholder="请输入密码" />
        <glue-field model-value="11" label="显示图标" placeholder="请输入文本" left-icon="smile-o" right-icon="warning-o" />
        <glue-field model-value="11" label="显示图标" placeholder="请输入文本" left-icon="smile-o" clearable />
        <glue-field model-value="" label="文本" placeholder="请输入文本" error required error-message="手机号格式错误" />
        <glue-field model-value="sms" center clearable label="短信验证码" placeholder="请输入短信验证码" button="#slot">
          <div slot="button">
            <glue-button size="small" type="primary">
              发送验证码
            </glue-button>
          </div>
        </glue-field>
        <glue-field model-value="11" label="文本" placeholder="请输入文本" formatter={this.formatter} autosize type="textarea" rows={2} show-word-limit maxlength={50} />
        <glue-field model-value="11" label="文本" placeholder="请输入文本" input-align="right" /> */}
        <glue-sidebar model-value={'1'}>
          <glue-sidebar-item title="标签名称" value="1" />
          <glue-sidebar-item title="标签名称" value="2" />
          <glue-sidebar-item title="标签名称" value="3" />
        </glue-sidebar>
      </div>
    );
  }
}
