FROM node:12

LABEL version="1.0"
LABEL description="This is the base docker image for the ApiChallenge."
LABEL maintainer = ["mimail@gmail.com""]

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]
