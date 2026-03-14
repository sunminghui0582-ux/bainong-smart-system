# 百农智慧农业项目组网站

这是一个展示项目组研究成果、团队成员和智慧农业项目的网站。

## 功能

- 首页：项目组简介和最新动态
- 关于我们：项目组详情
- 团队成员：成员列表（从后端API获取）
- 科研成果：论文、专利等
- 项目案例：智慧农业项目展示
- 新闻动态：最新消息
- 招生信息：招生详情
- 联系我们：联系方式

## 技术栈

- 前端：Vue.js 3 + Vue Router + Axios + Bootstrap
- 后端：Node.js + Express + MongoDB + Mongoose

## 运行

1. 安装依赖：
   - 前端：`cd frontend && npm install`
   - 后端：`cd backend && npm install`

2. 启动MongoDB（本地安装）

3. 启动后端：`cd backend && npm start`

4. 启动前端：`cd frontend && npm run serve`

5. 访问 http://localhost:8080

## 部署

部署到云服务器，如阿里云，使用Nginx反向代理。