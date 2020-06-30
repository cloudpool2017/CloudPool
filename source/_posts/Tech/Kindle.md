---
title: Kindle电子书共享指北
author: m1
date: 2020-06-30
tags: [Kindle,电子书,破解]
categories: 浊技术
main: 共享Kindle电子书
---

Kindle官方电子书带有版权保护，只能在登录了购买者Kindle账户的Kindle设备上阅读。这里的方法可用于破解这种限制。

## 1 前言

Kindle电子书在2019(2018?)年之前使用的文件扩展名为 .azw 或 .azw3 ,这类书籍可以被转换为更加通用的 .mobi 或 .epub 格式。大多数电子书阅读器已可以支持 .azw3 格式的电子书。只是如果是从亚马逊官方下载的电子书会有一层与账号绑定的加密锁，无法直接复制后打开。
新Kindle电子书使用 kfx 格式

本教程采用 Calibre + DeDRM 作为破解工具。

## 2 准备工作

1. 下载 [Calibre](https://calibre-ebook.com/download), [DeDRM](https://github.com/apprenticeharper/DeDRM_tools/releases/), [PC版Kindle](https://www.amazon.cn/kindle-dbs/fd/kcp/)
2. 安装 Calibre , 安装并登陆 PC版Kindle , 解压 DeDRM压缩包 ，得到 DeDRM_Plugin.zip
3. 打开 Calibre , 打开 首选项 - 插件 - 从文件加载插件 - 选择 DeDRM_Plugin.zip - 重启Calibre
4. 打开 Kindle软件 , 打开 选项 - 内容 , 找到电子书文件存储位置。
5. 根据文件更新时间找到扩展名为 .azw 或 .azw3 或 .kfx 的电子书。打开Calibre，将它们拖放入 Calibre 软件
6. 在Calibre内书籍处 右键 - 保存到磁盘 即可

*之后的破解只需重复5-6步
