import { isObject, inBrowser } from '../../utils/base';
import { EASING } from '../../global/constant/constant';
import { toLine } from '../../utils/format/string';
const defaultOptions: any = {
  show: true,
  icon: '',
  type: 'text',
  message: '',
  className: '',
  overlay: false,
  onClose: null,
  onOpened: null,
  duration: 2000,
  teleport: 'body',
  iconPrefix: undefined,
  position: 'middle',
  easing: EASING,
  forbidClick: false,
  loadingType: undefined,
  overlayClass: '',
  overlayStyle: null,
  closeOnClick: false,
  closeOnClickOverlay: false,
};
let defaultOptionsMap = {};
let queue = [];
//allowMultiple是否为单例模式,默认为单例模式false
let allowMultiple = false;
//全局设置
let currentOptions = {
  ...defaultOptions,
};
function renderTeleport(el) {
  if (currentOptions.teleport) {
    //如果是字符串选择器,如果不是选择器就是dom
    if (typeof currentOptions.teleport == 'string') {
      console.log(document.querySelector(currentOptions.teleport), currentOptions.teleport, 'teleport');
      document.querySelector(currentOptions.teleport).appendChild(el);
    } else {
      currentOptions.teleport.appendChild(this.el);
    }
  }
}
function createInstance() {
  const element = document.createElement('glue-toast');
  Object.assign(element, currentOptions);
  // for (let key in currentOptions) {
  //   console.log(key, toLine(key), 'key');
  //   element.setAttribute(toLine(key), currentOptions[key]);
  // }
  renderTeleport(element);
  console.log(element, 'element');
  return [];
}
function getInstance() {
  //队列
  /* istanbul ignore if */
  if (!inBrowser) {
    return {};
  }

  if (!queue.length || allowMultiple) {
    const instance = createInstance();
    queue.push(instance);
  }

  return queue[queue.length - 1];
}
function parseOptions(message) {
  if (isObject(message)) {
    return message;
  }
  return { message };
}
function Toast(options: any = {}) {
  const toast = getInstance();

  // options = parseOptions(options);
  // options = {
  //   ...currentOptions,
  //   ...defaultOptionsMap[options.type || currentOptions.type],
  //   ...options,
  // };

  // toast.open(options);

  // return toast;
}
const createMethod = type => options => {
  Toast({
    type,
    ...parseOptions(options),
  });
};
//全局设置是否单例模式
Toast.allowMultiple = (value = true) => {
  allowMultiple = value;
};
Toast.resetDefaultOptions = type => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = null;
  } else {
    currentOptions = { ...defaultOptions };
    defaultOptionsMap = {};
  }
};
//立即执行
['loading', 'success', 'fail'].forEach(method => {
  Toast[method] = createMethod(method);
});
export default Toast;
