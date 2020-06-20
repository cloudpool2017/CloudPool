---
title: Windows安装
author: m1
date: 2020-06-17
tags: [Windows,安装]
categories: 浊技术
main: 如何安装Windows操作系统
---

**~~FBI~~ WARNING**
*下面的方式重装系统会清空C盘的所有文件，要备份的请先做好备份*

***

## 能够正常运行的电脑上做的事情

1. 首先下载系统镜像，推荐[MSDN我告诉你](https://msdn.itellyou.cn/)，这个是良心大佬搞的一个网站。提供windows系统镜像文件(.iso)的对应磁力链接

2. 选择 操作系统 -- Windows 10, Version xxxx -- Windows 10 (consumer editions), version xxxx (x64)
下载链接: ed2k://|file|********
下载工具：[eagleget](http://www.eagleget.com/cn/) 或 迅雷 或 百度云 + [速盘 - 极速版](http://www.supanx.com) 3元 = 3天内30G流量
![网站截图](01.png)(建议选择发布时间最晚的下载)

3. 下载完之后可以直接解压iso文件到U盘，也可以使用专业一点的软件[Rufus](http://rufus.ie)

![Rufus截图](02.png)

***

## 目标电脑上做的事情

1. 插上U盘，设置从U盘启动
    * 电脑更改启动方式一般有两种方法：
    1. 修改BIOS设置（麻烦一点点）
    2. 开机时前几秒瞎JB按F1-F12一堆键（因为不同电脑的按键设置不一样），不行就多试几次，然后找一找它的设置里面带BOOT, CONFIGURATION, DEVICE字眼的设置，把1ST BOOT DEVICE改成你的U盘，然后照它的说明SAVE & EXIT（装完系统以后建议）

2. 临时从U盘启动
    * 开机时设置临时从U盘启动
    ![快捷键表格](03.png)
    然后选择你的U盘，回车

3. 如果你做对了，你将会看到下面的图片：
  
    ![1](i1.png)
    * 现在安装-确定

    ![2](i2.png)
    * 我没有产品密钥

    ![3](i3.png)
    * 如果看不懂一般就是家庭版

    ![4](i4.png)
    * 自定义

    ![5](i5.png)
    * 此时建议：删除所有**你不认识**的盘与C盘。*万一手贱把D盘什么的删了不要慌，请左上角回退再来一次。*然后点击**未分配的空间**--**下一步**（这样基础分区设置就会使用默认值）

    ![6](i6.png)
    * 然后等8

4. 一般电脑以前登录过微软账号的话Windows会自动联网激活，但是万一没有的话参考上面
