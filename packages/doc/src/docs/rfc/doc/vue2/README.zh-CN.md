# RFC

### 介绍

RFC" (request for comments)就是一个提案，大家可以尽情讨论，稳定下来的再去实现

#### 关于Toast组件的实现

无法使用 const element = document.createElement('glue-toast')去创建组件,只创建了一个标签,没有创建完整的dom节点

#### 关于slot传参数的问题

web components目前没有slot传参的api
