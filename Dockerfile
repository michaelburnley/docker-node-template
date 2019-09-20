FROM mhart/alpine-node:12

WORKDIR /app
COPY . .
RUN npm i
EXPOSE 3000
CMD ["node", "index.js"]