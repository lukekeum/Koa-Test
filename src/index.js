import Koa from 'koa';
import Router from 'koa-router';
import * as dotenv from 'dotenv'; // .env 파일에서 환경 변수 불러오기 위한 import
import mongoose from 'mongoose';

import api from './api';

const app = new Koa();
const router = new Router();

dotenv.config(); // .env 파일 불러오기

mongoose.Promise = global.Promise; // Node 의 네이티브 Promise 사용
// mongodb 연결
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log('Successfully connected to mongodb');
  })
  .catch((e) => {
    console.error(e);
  });

const port = process.env.port || 4000; // 만약 port가 설정되어 있지 않다면, 4000

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods);

app.listen(port, () => {
  console.log(`Now the Server is Running on Port ${port}`);
});
