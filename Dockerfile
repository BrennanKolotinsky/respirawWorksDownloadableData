# must use at least node 14
FROM node:14.15.5

# move into directory app
WORKDIR /app

# copy our package and package-lock
COPY package*.json ./

# install dependencies
RUN npm install

# copy everything except node_modules because of .dockerignore
COPY . .

# set our envs
ENV MONGODB_URL=mongodb+srv://respiraWorks:S5u7t5yOmomK0x9j@cluster0.7yqbv.mongodb.net/sampleData?retryWrites=true&w=majority

EXPOSE 3001

# run our command to start
CMD [ "npm", "start" ]