<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/robot.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/convenience-store.webp">

<h1>Lobe Chat 助手索引</h1>

[**提交您的助手 >>**][submit]

[Lobe Chat](https://github.com/lobehub/lobe-chat) 从该存储库访问 [`index.json`][website-url] 来为用户展示可用的 LobeChat 助手列表。

[English](./README.md) · **简体中文**

<!-- SHIELD GROUP -->

![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)
[![website][website-shield]][website-url]
[![ciTest][ci-test-shield]][ci-test-url]
[![ciRelease][ci-release-shield]][ci-release-url] <br/>
[![contributors][contributors-shield]][contributors-url]
[![forks][forks-shield]][forks-url]
[![stargazers][stargazers-shield]][stargazers-url]
[![issues][issues-shield]][issues-url]

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

</div>

<details>
<summary><kbd>目录</kbd></summary>

#### TOC

- [🚀 如何提交您的助手](#-如何提交您的助手)

  - [提交步骤](#提交步骤)

- [👀 注意事项](#-注意事项)

- [🛳 自主托管](#-自主托管)

  - [部署到 Vercel](#部署到-vercel)

- [🤝 参与贡献](#-参与贡献)

####

</details>

## 🚀 如何提交您的助手

你可以直接通过以下链接提交 [**提交您的助手**][submit]，或者按以下步骤进行提交

### 提交步骤

如果您想将助手添加到索引中，请使用 `agent-template.json` 或 `agent-template-full.json` 在 `plugins` 目录中创建一个条目，编写简短的描述并适当标记，然后创建一个拉取请求。

1. <kbd>Fork</kbd> 这个存储库
2. 复制 `agent-template.json` 或 `agent-template-full.json`
3. 填写副本并重命名
4. 将其移动到 `agents` 目录中
5. 提交一个拉取请求并等待审核

> 👉 **注意：** `createAt` 日期将在合并后自动填充, `agent-template-full.json` 中提供更加丰富的参数配置，请按实际情况选用

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 👀 注意事项

- 并非所有的助手都会被接受，我们将审核助手并进行评估
- 即使您不是作者，也可以提交助手，但最好是由作者自己提交
- 如果您希望删除您的助手，或者认为描述不正确，请提交问题或拉取请求

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🛳 自主托管

如果您想自己部署此服务，可以按照以下步骤操作

### 部署到 Vercel

单击下面的按钮以部署您的私有助手索引

[![Vercel][deploy-shield]][deploy-url]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 参与贡献

[![][contributors-contrib]][contributors-url]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

Copyright © 2023 [LobeHub][profile-url]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[ci-release-shield]: https://github.com/lobehub/lobe-chat-agents/actions/workflows/release.yml/badge.svg
[ci-release-url]: https://github.com/lobehub/lobe-chat-agents/actions/workflows/release.yml
[ci-test-shield]: https://github.com/lobehub/lobe-chat-agents/actions/workflows/test.yml/badge.svg
[ci-test-url]: https://github.com/lobehub/lobe-chat-agents/actions/workflows/test.yml
[contributors-contrib]: https://contrib.rocks/image?repo=lobehub/lobe-chat-agents
[contributors-shield]: https://img.shields.io/github/contributors/lobehub/lobe-chat-agents.svg?style=flat
[contributors-url]: https://github.com/lobehub/lobe-chat-agents/graphs/contributors
[deploy-shield]: https://vercel.com/button
[deploy-url]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flobehub%2Flobe-chat-agents&project-name=lobe-chat-agents&repository-name=lobe-chat-agents
[forks-shield]: https://img.shields.io/github/forks/lobehub/lobe-chat-agents.svg?style=flat
[forks-url]: https://github.com/lobehub/lobe-chat-agents/network/members
[issues-shield]: https://img.shields.io/github/issues/lobehub/lobe-chat-agents.svg?style=flat
[issues-url]: https://github.com/lobehub/lobe-chat-agents/issues/new/choose
[profile-url]: https://github.com/lobehub
[stargazers-shield]: https://img.shields.io/github/stars/lobehub/lobe-chat-agents.svg?style=flat
[stargazers-url]: https://github.com/lobehub/lobe-chat-agents/stargazers
[submit]: https://github.com/lobehub/lobe-chat-agents/issues/new/choose
[website-shield]: https://img.shields.io/website?down_message=offline&label=🤯%20chat-agents.lobehub.com&up_message=online&url=https%3A%2F%2Fchat-agents.lobehub.com&style=flat
[website-url]: https://chat-agents.lobehub.com
