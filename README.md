# ReactJS + ExpressJS

This app is using Nginx to serve ReactJS app (using Webpack development server) while consuming REST API based on ExpressJS

## Prerequisites
- Nginx 
- Clone this repository

## How to Run

### Frontend

Install the dependencies and run the development server (default to port 3000)

```bash
cd demo-app
yarn install
yarn start
```

### Backend

Install the dependencies and run the API server (default to port 8000)

```bash
cd backend
yarn install
yarn start
```

### Nginx

- Install Nginx: `brew install nginx`
- Check where Nginx store the server configuration: `brew info nginx`
- Add `nginx-sample.conf` to Nginx config folder (my machine is `/usr/local/etc/nginx/servers/demo-app.conf`)
- Start Nginx: `brew services restart nginx`


Now navigate to localhost:8088 and the app should work
