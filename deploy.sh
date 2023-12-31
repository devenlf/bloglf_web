#!/usr/bin/env sh

# 发生错误时终止
set -e

# 安装依赖
npm install

# 构建
npm run build

# 进入构建文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 推送代码
git push -f git@github.com:devenlf/bloglf_web.git master:gh-pages

cd -