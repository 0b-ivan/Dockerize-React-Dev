# Basisimage,  das Nodes.js und npm enthält
FROM node:19-alpine
#Set working directory to /app insinde the container
WORKDIR /app
# Copy app file
COPY . .
#install depenc
RUN npm install

ENV NODE_ENV production
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]


