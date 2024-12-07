import redis from './client';

async function init() {
  const result1 = await redis.mget('user:1', 'user:2', 'user:3', 'user:4');
  const result2 = await redis.mget('msg:1', 'msg:2', 'msg:3', 'msg:4');
  console.log({ result1 });
  console.log({ result2 });
}
init();
