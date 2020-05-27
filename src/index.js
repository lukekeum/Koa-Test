import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = '홈';
});

router.get('/about', (ctx, next) => {
  ctx.body = '소개';
});

router.get('/about/:name', (ctx, next) => {
  const { name } = ctx.params; // 라우트 경로에서 :파라미터명으로 정의된 겂이 ctx.params 안에 저장
  ctx.body = name + '의 소개';
});

router.get('/post', (ctx, next) => {
  const { id } = ctx.request.query; // 주소 뒤에다가 ?id=10 이런식으로 적성된 쿼리는 ctx.request.query 안에 저장
  if (id) {
    ctx.body = '포스트 #' + id;
  } else {
    ctx.body = '포스트 아이디가 없습니다';
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Now the Server is Running on Port 4000');
});
