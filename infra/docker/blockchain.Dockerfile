
FROM node:20-alpine
WORKDIR /app
COPY package.json hardhat.config.ts ./
COPY contracts ./contracts
COPY scripts ./scripts
RUN npm install
CMD ["npx", "hardhat", "help"]
