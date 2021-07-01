#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'dist'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:laravel-ksrm/laravel-ksrm-ui.github.io.git master

# if you are deploying to 
https://laravel-ksrm.github.io/laravel-ksrm-ui
# git push -f git@github.com:laravel-ksrm/laravel-ksrm-ui.git master:gh-pages

cd -