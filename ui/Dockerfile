# base image
FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

RUN apk add --no-cache python make g++

# install and cache app dependencies
COPY app/package.json /app/

#RUN npm install react-scripts -g --silent

RUN yarn

# start app
CMD ["yarn", "start"]