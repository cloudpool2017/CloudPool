---
title: 自用梯子教程
author: m1
date: 2019-06-22
tags:
categories:
main: 小孩子千万不要学
---

    写在前面的话：这个是一个很复杂的教程，不过这种方法免费，而且应该安全
    缺点：只支持Windows电脑与Android手机

---

## 第一步：开启 IPv6

### 使用 Hurricane Electric® 6in4 隧道（长期使用推荐）（电信、联通宽带可用）

1.申请公网 IP
电信网络打 10000 号说明理由即可 理由：家中装监控/开发测试
移动网络打专业技术服务号（百度）申请公网 ip 理由同上

2.设置 6in4 隧道
说明：此方法建议用在路由器上，路由器需刷固件(Merlin/Padavan/Openwrt/...) 至于哪些路由器支持刷机请自行查找 但好消息是贵一点且流行的路由器一般都有第三方固件

a.打开 [Tunnel Broker](https://tunnelbroker.net/)，注册账号（实际上具体信息可以随便填）
b.Create New Tunnel, 填写公网 ip 地址(可百度'ip'查看);服务器事实上建议选美国的，延迟低，原因不明。自用纽约的
c.对应路由器设置填写<sup>[1]</sup>
d.（若路由器重启）回 Tunnel Details，重填 IP 地址（如有变化）[未重启则可以不管]

[1]: 路由器设置中必填项：

    服务器ipv4地址/6in4远程端点/WAN IPv4地址----Server IPv4 Address
    服务器ipv6地址/IPv6 外网默认网关/WAN IPv6默认网关----Server IPv6 Address    *除尾端'/64'
    客户端ipv6地址/IPv6 外网地址/WAN IPv6地址----Client IPv6 Address    *除尾端'/64'
    内网IPv6前缀/IPv6 内网地址/LAN IPv6地址----Routed /48:    *需首先点击Asign    **除尾端'/48'

    其他说明：1.IP地址尾部的/**为地址长度规定，路由器设置填写时若需要填写前缀长度则填写对应数字
             2.IPv6 DNS可填写：2001:470:20::2   2001:4860:4860::8888    2001:4860:4860::8844
             3.若有MTU、TTL项保持默认或填写1480、255

以上完成可打开[Test-IPv6](https://test-ipv6.com)测试，绿色代表~~原谅~~通过

### 方法 3：使用 teredo 等（实测并不稳定）

[教程](https://github.com/XX-net/XX-Net/wiki/如何开启IPv6)
[简便工具](https://github.com/XX-net/XX-Net/issues/10282)

---

## 第二步：程序设置

### 电脑：XX-Net

[Github-XX-Net](https://github.com/XX-net/XX-Net)
[下载](https://github.com/XX-net/XX-Net/blob/master/code/default/download.md)
解压文件，打开 start.bat 或 start.vbs
推荐浏览器中安装 SwitchyOmega，火狐/谷歌扩展搜索或直接导入同名文件夹中的.xpi/.crx 文件，并导入配置文件（主程序同名文件夹下.bak 文件）

### 手机：[Xndroid](https://github.com/XndroidDev/Xndroid/releases)（推荐 root 后使用）

[教程](https://github.com/XX-net/XX-Net/wiki/安卓版)

其他：[AppID 申请](https://github.com/XX-net/XX-Net/wiki/how-to-create-my-appids)，然后部署服务端(记得要用 ID 部署，不要用名称)，之后把部署成功 AppID 的在配置中保存

### 若 IPv6 隧道断开

尝试： 1.重新连接 WIFI（不一定起效） 2.重启路由器，应该会更换 IP 地址
之后用新 IP 重新设置 6in4 隧道（重新填写 Tunnel Broker 设置中的 IP 地址即可）
