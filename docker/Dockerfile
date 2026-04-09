FROM node:20-alpine

WORKDIR /app

# 依存関係のみ先にコピー
COPY app/package*.json ./

RUN npm install

# ソースコピー
COPY app/ ./

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]