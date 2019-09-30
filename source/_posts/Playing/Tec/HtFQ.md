---
title: 自用梯子教程
writer: m1
date: 2019-06-22
type: play
tags: 技术
categories: 浊技术
main: 小孩子千万不要学
sub: 1
---
    写在前面的话：这个是一个很复杂的教程，不过这种方法免费，而且应该安全
    缺点：只支持Windows电脑
---
### 第一步：开启IPv6
##### 方法1：使用6in4隧道（电信宽带可用）
    *（需要特殊梅林固件路由器，可某宝搜索“梅林 路由器”）
1.申请公网IP地址：
电信网络打10000号转人工保修查障服务

“我需要公网IP”
理由：家中装监控/技术测试

若路由器设置页面显示WAN IP与你百度'IP'显示的结果一样，则已成功

2.设置6in4隧道

a.打开 [Tunnel Broker](https://tunnelbroker.net/)，注册账号（实际上具体信息可以随便填）
b.Create New Tunnel, 填写公网ip地址(可百度'ip'查看)--Create
c.对应路由器设置填写<sup>[1]</sup>
d.（若路由器重启）回Tunnel Details，重填IP地址（如有变化）[未重启则可以不管]

[1]: 路由器设置中必填项：
	服务器ipv4地址/6in4远程端点/WAN IPv4地址----Server IPv4 Address
	服务器ipv6地址/IPv6 外网默认网关/WAN IPv6默认网关----Server IPv6 Address    *除尾端'/64'
    IPv6 前缀长度: 64
	客户端ipv6地址/IPv6 外网地址/WAN IPv6地址----Client IPv6 Address    *除尾端'/64'
    内网前缀长度: 64
    内网IPv6前缀/IPv6 内网地址/LAN IPv6地址----Routed /64:    *除尾端'/64'
    IPv6 DNS填写: 2001:470:20::2   2001:4860:4860::8888    2001:4860:4860::8844
    其他说明：1.IP地址尾部的'/64'为地址长度规定
             2.若有MTU、TTL项保持默认或填写1480、255

以上完成可打开[Test-IPv6](https://test-ipv6.com)测试，绿色代表通过

###### 进阶：自动更新IP地址
    原因：重启路由器后，IP地址很有可能会有变化

**外部网络设置 - DDNS**

服务器--www.tunnelbroker.net
主机名称--Tunnel ID
用户名称--Main Page-User ID
密码或DDNS密钥--IPv6 Tunnel-Advanced-Update Key

设置完成后，即可自动更新IP地址

##### 方法2：使用teredo等（实测可能不稳定）
[教程](https://github.com/XX-net/XX-Net/wiki/如何开启IPv6)
[简便工具](https://github.com/XX-net/XX-Net/issues/10282)

---
### 第二步：程序设置
##### 电脑：XX-Net
Github：https://github.com/XX-net/XX-Net
[下载](https://github.com/XX-net/XX-Net/blob/master/code/default/download.md) 
解压文件，打开start.bat或start.vbs
    推荐浏览器中安装SwitchyOmega，火狐/谷歌扩展搜索或直接导入同名文件夹中的.xpi/.crx文件，并导入配置文件（主程序同名文件夹下.bak文件） 

其他：[AppID申请](https://github.com/XX-net/XX-Net/wiki/how-to-create-my-appids)，然后部署服务端(记得要用ID部署，不要用名称)，之后把部署成功AppID的在配置中保存

### 若IPv6隧道断开
尝试：
重新连接WIFI / 重启路由器，应该会更换IP地址

