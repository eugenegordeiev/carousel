# base image
FROM node:lts-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN apk add --no-cache python make g++

COPY app/package.json /app/
RUN yarn

COPY app /app
RUN yarn build

FROM nginx:alpine

# copy the build folder from react to the root of nginx (www)
COPY --from=build /app/build /usr/share/nginx/html

# --------- only for those using react router ----------
# if you are using react router
# you need to overwrite the default nginx configurations
# remove default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# replace with custom one
COPY local_nginx.conf /etc/nginx/conf.d/nginx.conf
# --------- /only for those using react router ----------

# expose port 80 to the outer world
EXPOSE 80

# start nginx
CMD ["nginx", "-g", "daemon off;"]