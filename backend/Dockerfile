FROM node:16

# Create app directory
WORKDIR /usr/src/app

ARG PORT=8080

ENV SERVER_URL host.docker.internal
ENV PORT $PORT
ENV DB_CONNECTION_STRING mariadb://host.docker.internal/chatbot_db

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE $PORT

CMD [ "node", "server.js" ]
