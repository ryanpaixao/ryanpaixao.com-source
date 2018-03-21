#! /bin/bash

cd build
echo $(pwd)
git init
echo "ryanpaixao.com" >> CNAME
git add .
git commit -m "Push build $(date)"
git remote add origin "https://github.com/ryanpaixao/ryanpaixao.github.io.git"
git push -f origin master