FROM node:22-alpine AS base

WORKDIR /app

# Instalar ferramentas de build (opcional, mas seguro)
RUN apt-get update && apt-get install -y python3 make g++ bash && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY apps/web/package*.json ./apps/web/
COPY packages/tsconfig/package.json ./packages/tsconfig/package.json
COPY packages/utils/package.json ./packages/utils/package.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--workspace=web"]