import Router from 'koa-router';

import booksControl from './books.controller';

const books = new Router();

const handler = (ctx, next) => {
  ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

books.get('/', booksControl.list);

books.post('/', booksControl.create);

books.delete('/', booksControl.delete);

books.put('/', booksControl.replace);

books.patch('/', booksControl.update);

module.exports = books;
