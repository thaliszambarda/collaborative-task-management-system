FROM node:22-alpine AS baset

WORKDIR /app

COPY package*.json ./
COPY apps/auth-service/package*.json ./apps/auth-service/
COPY packages/tsconfig/package.json ./packages/tsconfig/package.json
COPY packages/utils/package.json ./packages/utils/package.json

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "run", "dev", "--workspace=auth-service"]
