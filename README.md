# Fuck Algorithm 官方网站

这是[Fuck Algorithm](https://github.com/fuck-algorithm)组织的官方网站项目，基于React和TypeScript构建。

[![Deploy to GitHub Pages](https://github.com/fuck-algorithm/fuck-algorithm.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/fuck-algorithm/fuck-algorithm.github.io/actions/workflows/deploy.yml)

## 项目理念

> 把一天能理解的知识，缩短到一个小时

我们致力于提供简洁明了的算法解析，帮助开发者快速理解和掌握常见算法问题。

## 技术栈

- React 
- TypeScript
- Webpack
- CSS3
- GitHub Actions (CI/CD)

## 可用脚本

在项目目录中，你可以运行：

### `npm start`

在开发模式下运行应用。\
打开 [http://localhost:3001](http://localhost:3001) 在浏览器中查看。

当你进行更改时，页面将会重新加载。\
你也可能会在控制台中看到任何lint错误。

### `npm run build`

将应用程序构建到`dist`文件夹中，用于生产环境。\
它在生产模式下正确地打包React，并优化构建以获得最佳性能。

构建被压缩，文件名包含哈希。\
你的应用已准备好部署！

### `npm run lint`

检查代码中的语法和样式问题。

### `npm run format`

使用Prettier格式化代码。

## 部署

该项目使用GitHub Actions自动部署到GitHub Pages。每当代码推送到main分支时，CI/CD工作流会自动构建并部署网站。

## 贡献指南

1. Fork这个仓库
2. 创建您的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'feat: 添加一些惊人的功能'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开Pull Request

## 开源协议

此项目基于MIT协议开源 - 查看[LICENSE](LICENSE)文件了解更多详情。 