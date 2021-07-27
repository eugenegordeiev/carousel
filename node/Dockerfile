# ---- Base Node ----
FROM node:15.3.0-alpine3.11 AS base

RUN apk add --no-cache tini

# set working directory
WORKDIR /

# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]

# copy project file
COPY app/package.json .

# ---- Dependencies ----
FROM base AS dependencies

# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production 

# copy production node_modules aside
RUN cp -R node_modules prod_node_modules

RUN npm update

# install ALL node_modules, including 'devDependencies'
RUN npm install

#
# ---- Development ---
FROM base AS dev

RUN npm install --global nodemon --save-dev

# copy production node_modules
COPY --from=dependencies /prod_node_modules /node_modules

WORKDIR /app

CMD nodemon -L --exec npm start

#
# ---- Release ----
FROM base AS prod

# copy production node_modules
COPY --from=dependencies /prod_node_modules /node_modules

WORKDIR /app

# copy app sources
COPY app .

CMD npm run start
