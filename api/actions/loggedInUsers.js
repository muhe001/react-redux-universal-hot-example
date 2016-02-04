import redisClient from '../utils/redisClient.js';

export default function loggedInUsers(req) {

  return new Promise((resolve) => {
    redisClient.keys('sess:*', function(error, keys){
      resolve({
        keys: keys
      });
    });
  });
}