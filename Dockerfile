FROM node:19-alpine3.15

WORKDIR /reddit-clone

COPY . /reddit-clone
COPY .env.production .env.production
RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
