FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json ./
COPY apps/notifications-service/package*.json ./apps/notifications-service/
COPY packages/tsconfig/package.json ./packages/tsconfig/package.json
COPY packages/utils/package.json ./packages/utils/package.json

RUN npm install

COPY . .

EXPOSE 3004

CMD ["npm", "run", "dev", "--workspace=notifications-service"]
