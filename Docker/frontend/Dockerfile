# Etap budowania
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etap produkcyjny
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
