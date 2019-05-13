# FelipeFlor.com

My personal Website 

### Visit it here:  

https://www.felipeflor.com

#### Setup for Development
```
npm i && npm run dev
```

#### Deploying in Production
   I LOVE pm2 now! Until now I was using nohup, but pm2 is better since it will restart its processes automatically if the server reboots. 
   
```
    pm2 start npm --name felipe -- start     // Use pm2 to run 'npm run start' - Name the process 'felipe'  
```

##### First time seeing pm2? These are some useful commands
```
    pm2 monit // See list of pm2 processes running
    pm2 startup   // Needs to run only once in the server life 
    pm2 save    // Saves the list of pm2 processes to restart them on boot
```

If you're using nginx, your routing needs to look similar to this: 

```
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```

#### generate static (If you're using CDNs) 
```
npm run generate
```
