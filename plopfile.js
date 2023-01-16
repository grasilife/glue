// Plop 入口文件，需要导入一个函数
// 此函数接受一个plop对象，用户创建生成器任务

module.exports = plop => {
  plop.setGenerator("component", {
    // component pnpm plop命令后面带来指令名称
    description: "create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name",
        default: "MyComponent"
      }
    ],
    actions: [
      {
        type: "add", // 代表添加文件
        path:
          "packages/glue-components/src/components/{{ name }}/{{ name }}.tsx", // 要生成的文件路径
        templateFile: "plop-templates/stencil/component.hbs" // 文件模板
      },
      {
        type: "add", // 代表添加文件
        path:
          "packages/glue-components/src/components/{{ name }}/{{ name }}.less", // 要生成的文件路径
        templateFile: "plop-templates/stencil/style.hbs"
      }
    ]
  });
};
