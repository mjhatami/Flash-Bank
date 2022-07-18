FROM node:16.16-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build
ENV NODE_ENV dev
EXPOSE 3000
CMD [ "npm", "run", "dev" ]