---
title: 路由器搞机探索2
writer: m1
date: 2019-09-30
tags: 技术
categories: 浊技术
main: 路由器实现文件服务器
---

    写在前面：
    完成这个教程中的步骤后，可以实现远程访问路由器的存储
### 预备工作
    同样，我们需要公网IP地址，最好有DDNS服务，详情见上篇教程
    另外，还需要一个可用域名

### 域名设置

1. 注册商处NameServer改为

    ns1.he.net
    ns2.he.net
    ns3.he.net
    ns4.he.net
    ns5.he.net

2. [DDNS远端设置](https://dns.he.net)

2.1 左侧 Add a new domain - 输入域名
2.2 New A - 打开Enable entry ... ，IPv4 Address = 路由器IP地址 ，其他不填
2.3 点击A Record右侧，DDNS一栏下符号 -- Generate a key -- 复制粘贴至tunnelbroker.net - [tunnel] - HE DDNS Settings: Hostname = Domain; API Key = Key from he.net


3. 路由器DDNS设置（外部网络--DDNS）

服务器--www.tunnelbroker.net
主机名称--Tunnel ID
用户名称--Main Page-User ID
密码或DDNS密钥--IPv6 Tunnel-Advanced-Update Key

设置完成后，即可自动更新IP地址

并打开 防火墙 - 一般设置 - 响应ping要求

4. USB相关应用--服务器中心--FTP设置（账号、共享文件夹、读写权限）
