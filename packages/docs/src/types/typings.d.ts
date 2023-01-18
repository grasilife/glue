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
  import type { DefineComponent } from "vue";

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}
