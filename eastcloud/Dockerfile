FROM node:alpine
WORKDIR /usr/src
COPY package.json .
COPY package-lock.json .
RUN npm i
RUN npm install cors
RUN npm install -g typescript
COPY src/ ./src
COPY index.ts .
CMD ["npm","start"]