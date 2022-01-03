# cat-home-nav

猫窝导航 —— 导航到猫窝里面的各种设施

## 使用方法

1. 安装依赖

```
pnpm install
```

2. 构建项目

```
pnpm build
```

3. dist 中是构建好的网站
   1. 编辑 dist/config.json 当中的 `apps` 条目，添加需要的导航标签。
   2. 在 dist/icons 中放置 config.json 当中引用的图标。
4. 配置 nginx 网页服务器，参考以下配置文件，[nginx 使用文档](http://nginx.org/en/docs/)

```nginx
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;

        location / {
            root   <dist 目录所在位置>/dist;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/local/www/nginx-dist;
        }
    }
}
```

## PWA

⚡️ 项目使用 [vite-plugin-pwa](https://vite-plugin-pwa.netlify.app/) 提供 Vite 的零配置 PWA 框架

💖 通过 [Favicon Generator. For real.](https://realfavicongenerator.net/) 一键生成多平台适用的网站图标

> 如果需要部署为 PWA，需要配置 https（在 localhost 域名下时不需要）

