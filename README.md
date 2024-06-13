First run:
1. git clone
2. npm i

upload files
aws s3 cp /Users/evnomad/Yandex.Disk.localized/Library/Тайский/thai-private1/6-13 s3://phaa-saa-thai-soong --recursive
aws s3 cp /Users/evnomad/Desktop/123 s3://thai-private1 --recursive

Development:
npm start

Build:
npm run build

Plain HTML url example:
http://localhost:8080/homepage.html

HTML: ./src/public
Images: ./src/images (don't forget to import image in index.js, so webpack know about it)
Fonts: ./src/fonts
JS: ./src/js (index.js is main js file)
scss: ./src/scss (main.scss is main styles file)

All files will be generated in ./dist folder. 