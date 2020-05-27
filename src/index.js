import Koa from 'koa';

const app = new Koa();

app.use((ctx) => {
  ctx.body = 'Hello Koa';
});

app.listen(4000, () => {
  console.log('Now the Server is Running on Port 4000');
});
