cd /home/ec2-user/app
npm install
pkill node || true
nohup node server.js > server.log 2>&1 &