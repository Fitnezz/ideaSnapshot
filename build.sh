#!/bin/bash
rm ideaSnap.zip
rm build/assets/www/css -rf
rm build/assets/www/images -rf
rm build/assets/www/js -rf
rm build/assets/www/*.html

cp css build/assets/www -R
cp images build/assets/www -R
cp js build/assets/www -R
cp *.html build/assets/www -R

cd build
zip -9 -r ideaSnap.zip .
mv ideaSnap.zip ../ideaSnap.apk
