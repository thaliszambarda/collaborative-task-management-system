FROM node:22-alpine AS base

WORKDIR /app

# Copy only manifest files for caching
COPY package*.json ./
COPY apps/api-gateway/package.json ./apps/api-gateway/package.json
COPY packages/tsconfig/package.json ./packages/tsconfig/package.json
COPY packages/utils/package.json ./packages/utils/package.json

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev", "--workspace=api-gateway"]
