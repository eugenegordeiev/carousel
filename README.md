## DEMO
![DEMO Video](https://github.com/eugenegordeiev/carousel/blob/feature-branch/demo.gif)

### Requirements
- Mac OS/Linux
- Docker
- Docker-compose

### Architecture

The application is separated into two servers (backend/API and frontend/UI).

The API server by default is running on port 8080 utilizing Node/Express.  The frontend application by default is running on port 80 using React/Material UI and is served by Nginx web server.


### Installation (Requires Mac OX/Linux)

Clone Repo

git clone -b feature-branch https://github.com/eugenegordeiev/carousel.git testApp

cd testApp

./start-app.sh

Open browser http://localhost
