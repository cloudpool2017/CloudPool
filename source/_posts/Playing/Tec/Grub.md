---
title: 多系统GRUB启动项管理
writer: m1
date: 2019-10-25
tags: 技术
categories: 浊技术
sub: 1
---
## WTG

Ubuntu下:

    # sudo update-grub

## LineageOS
    安装时选择不要更新Grub

Ubuntu下:
    # sudo gedit /etc/grub.d/40_custom

    输入：
    menuentry "Android-x86 14.1-rc1" {
    search --set=root --file /cm-x86-14.1-r3/kernel
    linux /cm-x86-14.1-r3/kernel quiet root=/dev/ram0 androidboot.selinux=permissive buildvariant=userdebug 
    initrd /cm-x86-14.1-r3/initrd.img
    }
    menuentry "Android-x86 14.1-rc1 (DEBUG mode)" {
    search --set=root --file /cm-x86-14.1-rc1/kernel
    linux /cm-x86-14.1-rc1/kernel root=/dev/ram0 androidboot.selinux=permissive buildvariant=userdebug DEBUG=2
    initrd /cm-x86-14.1-rc1/initrd.img
    }

    # sudo update-grub
