#! /bash/bin

npm install

npm run build

pm2 start pm2.config.js

echo "🍎已部署 =>"
