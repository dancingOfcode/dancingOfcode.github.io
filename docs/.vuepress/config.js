import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",
  title: "VuePress",
  description: "正友的技术博客网站",
  theme: defaultTheme({
    logo: "/images/logo.jpg",
    heroImage: "/images/logo.jpg",
    // 在这里进行配置
    navbar: [
      // NavbarItem
      {
        text: "首页",
        link: "/",
      },
      {
        text: "网络",
        link: "/network/",
      },
      {
        text: "设计模式",
        link: "/designPatterns/",
      },
    ],
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      "/network/": [
        {
          text: "网络",
          children: [
            {
              text: "一张图帮你看懂，在浏览器输入网址回车后，都发生了什么？",
              link: "/network/一张图帮你看懂，在浏览器输入网址回车后，都发生了什么？.md",
            },
            {
              text: "在Jekyll中创建一个新的列表页面",
              link: "/network/在Jekyll中创建一个新的列表页面.md",
            },
          ],
        },
      ],
      "/designPatterns/": [
        {
          text: "设计模式",
          collapsible: true,
          children: [
            {
              text: "单例模式--我的机器人女友",
              link: "/designPatterns/单例模式--我的机器人女友.md",
            },
          ],
        },
      ],
    },
  }),
  bundler: viteBundler(),
});
