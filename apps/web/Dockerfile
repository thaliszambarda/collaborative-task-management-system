FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json ./
COPY apps/web/package*.json ./apps/web/
COPY packages ./packages

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--workspace=web"]