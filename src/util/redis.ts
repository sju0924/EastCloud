
import { RedisClient,createClient } from "redis";


var redisClient:RedisClient= createClient(6379,'127.0.0.1');

redisClient.on('error', function(err:any) {
    console.log('Redis error: ' + err);
});



export {redisClient};
