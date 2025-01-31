FROM node:slim

WORKDIR /app

COPY package*.json ./

RUN apt update -y && \
    npm ci --only=production

COPY . .

RUN chmod +x index.js

EXPOSE 3000

CMD ["node", "index.js"]
