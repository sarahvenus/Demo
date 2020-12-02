FROM node:12-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
<<<<<<< HEAD
CMD ["node", "app.js"]
=======
CMD ["node", "src/index.js"]
>>>>>>> 13839749ccee064007f57729e2bed824eed55f43
