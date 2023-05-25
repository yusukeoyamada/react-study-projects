FROM node:18

WORKDIR /app

# Dockerfileが置いてあるディレクトリ内のものを、コンテナ内のWORKDIRにコピー
COPY . .

RUN npm i

RUN npm run build

EXPOSE 3001

# コンテナが実行されるときに、「npm run start」コマンドを実行
CMD ["npm", "run", "start"]