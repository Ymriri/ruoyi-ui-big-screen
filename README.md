## 说明
本项目是从若依前后端分离出来的[Vue](https://gitee.com/y_project/RuoYi-Vue) 版本基础上整合大屏显示[VueDataV](https://github.com/jackchen0120/vueDataV)

本项目需要配合后端项目使用，后端项目地址：[RuoYi](http://www.ruoyi.vip/)

大屏路径：http://127.0.0.1:80/bigScreen，暂时无权限控制，自己在若依基础上根据需求设置下就行。

显示效果综合若依的前端和VueDataV
## 开发

本机npm版本：`6.14.16`

```bash
# 克隆项目
git clone https://github.com/Ymriri/ruoyi-ui-big-screen.git

# 进入项目目录
cd ruoyi-ui

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npmmirror.com

# 启动服务
npm run dev
```

浏览器访问 http://localhost:80
大屏页面访问 http://127.0.0.1/bigScreen

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```
