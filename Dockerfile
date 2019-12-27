FROM node:lts-slim
# second line from https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-doesnt-launch-on-unix
RUN apt-get update && apt-get install -y python make g++ \
  gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
USER node
WORKDIR /home/node
COPY --chown=node:node package* src/
COPY --chown=node:node .es* src/
COPY --chown=node:node tsconfig.json src/
COPY --chown=node:node src/ src/src/
COPY --chown=node:node types/ src/types/
WORKDIR /home/node/src
ENV CI true
RUN npm ci && npm run lint && npm run build && npm test
CMD [ "npm", "start" ]
