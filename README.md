# FelipeFlor.com

My personal Website 

### Visit it here:  

https://www.felipeflor.com

#### Setup for Development
```
npm i && npm run dev
```

#### Deploying in Production
```
npm i && npm run build
nohup npm start &
```

Why 'nohup' ? This stands for "No Hang-up". It will leave the server running after 
you ssh out of it. 

To see processes running by nohup simply type: ```jobs -l``` 

To stop the process: 
```kill -9 <Process ID>```

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

#### generate static
```
npm run generate
```
