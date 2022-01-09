FROM node:12

LABEL version="1.0"
LABEL description="This is the base docker image for ReactChallenge."
LABEL maintainer = "mimail@gmail.com"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]