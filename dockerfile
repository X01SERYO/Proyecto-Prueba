FROM node:lts-alpine
ENV PORT 4000
ENV NODE_ENV development
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
CMD ["node", "--experimental-specifier-resolution=node", "./src/app.js"]

EXPOSE 4001