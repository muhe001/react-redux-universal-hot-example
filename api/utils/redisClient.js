import redis from 'redis';

 //TODO: use env config
const redisUrl = 'redis://h:pfes4rjo39sjo63abphbp31c1qk@ec2-54-227-246-40.compute-1.amazonaws.com:13919' // dev only!!!

export default redis.createClient({
  url: redisUrl
});

export const pub = redis.createClient({
  url: redisUrl
});

export const sub = redis.createClient({
  url: redisUrl
});