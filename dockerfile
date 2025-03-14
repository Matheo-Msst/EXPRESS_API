FROM node:18.19.1-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 1616
CMD ["npm", "start"]
