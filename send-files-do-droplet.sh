#!/usr/bin/env bash


cd dist/my-personal-site

#edit index.html to set base path accordingly
#sed -i .bak 's/base href="\/"/base href="\/elink-designs\/"/' index.html


#send files to ux2live.rd.allscripts.com servers
#ssh root@142.93.92.62 "mkdir -p /var/www/html/my-personal-site"
rsync -avzhe ssh --progress . root@142.93.92.62:/var/www/html

cd ../..