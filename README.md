# vue-micro-frontend

基于蚂蚁金服 qiankun 的微前端 vue demo

## 参考

[qiankun文档](https://qiankun.umijs.org/zh)

[Single-spa](https://zh-hans.single-spa.js.org/docs/getting-started-overview)

[基于qiankun落地部署微前端爬”坑“记](https://juejin.im/post/6854573214564089864)

[vue + qiankun 快速实现前端微服务](https://segmentfault.com/a/1190000021872481)

## 项目目录

```
|-- main 主应用
|-- app_1 子应用1
|-- app_2 子应用2
```

实际项目开发中应用应该是独立仓库，解耦各应用的关联

## 介绍

> 微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。

### 微前端的核心思想

1. 技术栈自由

app可以由不同技术栈组成，比如微应用1是vue，微应用2是react，每个应用可以自由选择其技术栈，由独立的团队维护，技术栈不与其他应用强关联。

2. 代码隔离

应用的代码仓库应该独立，避免应用之间的状态耦合，全局变量共享。

3. 状态隔离

每个微应用的运用状态隔离，不受影响。

## qiankun

qiankun 是一个基于 single-spa 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。

qiankun 孵化自蚂蚁金融科技基于微前端架构的云产品统一接入平台，在经过一批线上应用的充分检验及打磨后，我们将其微前端内核抽取出来并开源，希望能同时帮助社区有类似需求的系统更方便的构建自己的微前端系统，同时也希望通过社区的帮助将 qiankun 打磨的更加成熟完善。

目前 qiankun 已在蚂蚁内部服务了超过 200+ 线上应用，在易用性及完备性上，绝对是值得信赖的。

## Single-spa

Single-spa 是一个将**多个单页**面应用聚合为**一个整体应用**的 JavaScript 微前端框架。

### 优势

- 在同一页面上使用多个前端框架 而不用刷新页面 (React, AngularJS, Angular, Ember, 你正在使用的框架)
- 独立部署每一个单页面应用
- 新功能使用新框架，旧的单页应用不用重写可以共存
- 改善初始加载时间，迟加载代码

[了解更多Single-spa相关技术，请阅读](https://zh-hans.single-spa.js.org/docs/getting-started-overview)

