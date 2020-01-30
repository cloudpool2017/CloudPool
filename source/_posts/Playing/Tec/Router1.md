---
title: 自用梯子教程1
writer: m1
date: 2020-1-30
tags: 技术
categories: 浊技术
main: 小孩子千万不要学
sub: 1
---
    写在前面的话：这个是一个有些复杂的教程，不过这种方法免费，而且应该安全
    需要：
    1. 特殊路由器（固件: 梅林Merlin / Padavan / PandoraBox / ...) (自用: ASUS-AC68U + 梅林固件)
    2. 电信宽带 (主要是需要公网IP地址，电信宽带易于申请，其他宽带运营商申请较困难，不过可以一试)
---
### 第一步：开启IPv6
##### 方法1：使用6in4隧道（电信宽带可用）
1.申请公网IP地址：

电信网络打10000号转人工保修查障服务
    “我需要公网IP”
理由：家中装监控/技术测试

若路由器设置页面显示WAN IP与你百度'IP'显示的结果一样，则已成功

2.设置6in4隧道

a.打开 [路由器设置页面](http://192.168.50.1)，打开 防火墙 - 一般设置 - 响应ping要求
b.打开 [Tunnel Broker](https://tunnelbroker.net/)，注册账号（实际上具体信息可以随便填）
c.Create Regular Tunnel<sup>1</sup>
d.对应路由器设置填写<sup>2</sup>
e.IP地址如有变化，回到Tunnel Details，重填IP地址

1:  
IPv4 Endpoint (Your side): = You are viewing from:
服务器选择:  [工具](PingInfoView.zip)
打开exe，确定，根据 平均一次Ping 排序在网页中选择 快且稳定 的服务器，Create Tunnel

2:  路由器设置中必填项：

	服务器ipv4地址/6in4远程端点/WAN IPv4地址----Server IPv4 Address
	服务器ipv6地址/IPv6 外网默认网关/WAN IPv6默认网关----Server IPv6 Address    *除尾端'/64'
    IPv6 前缀长度: 64
	客户端ipv6地址/IPv6 外网地址/WAN IPv6地址----Client IPv6 Address    *除尾端'/64'
    内网前缀长度: 64
    内网IPv6前缀/IPv6 内网地址/LAN IPv6地址----Routed /64:    *除尾端'/64'
    IPv6 DNS填写: 2001:4860:4860::8888    2001:4860:4860::8844    2001:470:20::2
    其他说明：1.IP地址尾部的'/64'为地址长度规定
             2.若有MTU、TTL项保持默认或填写1480、255


以上完成后可通过[Test-IPv6](https://test-ipv6.com)网站测试。如果失败，请尝试重启路由器直至更换ip地址。

每一次路由器重启后，IP地址很有可能会变化。请进入6in4隧道设置页面，手动更改IP地址；
或者，也可以使用DDNS服务自动更新IP地址

### 进阶：自动更新IP地址

**路由器设置页面 - 外部网络设置 - DDNS**

    服务器 -- www.tunnelbroker.net
    主机名称 -- Tunnel ID
    用户名称 -- Account Info - Account Name
    密码或DDNS密钥 -- [IPv6 Tunnel] - Advanced - Update Key

设置完成后，即可自动更新IP地址

问题：实测HE.net自动更新IP地址后仍需重新更换刷新至少一次隧道IP地址才可正常连接，原因不明

##### （方法2：使用teredo，实测有时不稳定）
[教程](https://github.com/XX-net/XX-Net/wiki/如何开启IPv6)
[简便工具](https://github.com/XX-net/XX-Net/issues/10282)

---
### 第二步：程序设置
##### 电脑：XX-Net

[Github项目主页](https://github.com/XX-net/XX-Net)
[下载页面](https://github.com/XX-net/XX-Net/blob/master/code/default/download.md) 

解压文件，打开start.bat或start.vbs
    推荐浏览器中安装SwitchyOmega，火狐/谷歌浏览器搜索扩展插件，或直接导入同名文件夹中的.xpi/.crx文件，
    之后在SwitchyOmega 选项 - 导入/导出 - 从备份文件恢复 加载配置文件 \SwitchyOmega\.bak 

进阶：[AppID申请](https://github.com/XX-net/XX-Net/wiki/how-to-create-my-appids)，然后部署服务端(记得要用ID部署，不要用名称)，之后把部署成功AppID的在配置中保存

##### 若IPv6隧道断开
尝试：
重新连接WIFI / 重启路由器

### 相关资料

Q: IPv6是什么？
Wikipedia: 网际协议第6版（英语：Internet Protocol version 6，缩写：IPv6）是网际协议的最新版本，用作互联网的网络层协议。用它来取代IPv4主要是为了解决IPv4地址枯竭问题，同时它也在其他方面对于IPv4有许多改进。

Q: 6in4是什么？
Wikipedia: 6in4是一种IPv6转换传送机制，是将IPv6的数据包直接封装在IPv4数据包中，通过IPv4链路一条明确配置的隧道中进行传送。

Q: What is the Hurricane Electric Tunnel Broker?
www.tunnelbroker.net: Welcome to the Hurricane Electric IPv6 Tunnel Broker! Our free tunnel broker service enables you to reach the IPv6 Internet by tunneling over existing IPv4 connections from your IPv6 enabled host or router to one of our IPv6 routers. 