declare interface Window {
  syncPath: any;
  vueRouter: any;
  replacePath: any;
}
// declare module "vue-router" {
//   interface RouteMeta {
//     // 是可选的
//     meta?: any;
//   }
// }
declare module "*.vue" {
  import type { ComponentOptions } from "vue";
  const Component: ComponentOptions;
  export default Component;
}
declare module "*.md" {
  import type { ComponentOptions } from "vue";
  const Component: ComponentOptions;
  export default Component;
}
