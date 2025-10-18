FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json ./
COPY apps/api-gateway/package*.json ./apps/api-gateway/
COPY packages ./packages

RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm", "run", "dev", "--workspace=api-gateway"]
