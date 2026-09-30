AIGIS WEBSITE - AWS SETUP (Ubuntu EC2)
Everything (pages, logo, photos, videos) is inside this folder.

1) From your computer, upload the zip:
   scp aigis-aws.zip ubuntu@43.204.16.169:~

2) On the server, run these lines one by one:
   sudo apt update && sudo apt install -y unzip nginx
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt install -y nodejs
   sudo npm install -g pm2
   sudo rm -rf /var/www/aigis-site && sudo mkdir -p /var/www
   cd ~ && unzip -o aigis-aws.zip && sudo mv ~/aigis-site /var/www/aigis-site
   cd /var/www/aigis-site && PORT=3000 pm2 start server/index.mjs --name aigis && pm2 save

3) Turn on nginx with the included settings:
   sudo cp /var/www/aigis-site/nginx-aigis.conf /etc/nginx/sites-available/default
   sudo nginx -t && sudo systemctl restart nginx

4) Open http://43.204.16.169/
   The AWS Security Group must allow inbound port 80.

Updating later: run "pm2 delete aigis", then repeat steps 2 (last three lines) and 3.
