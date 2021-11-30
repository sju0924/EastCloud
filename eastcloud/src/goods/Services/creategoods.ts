import { Client } from 'pg';

const client = new Client({
    user : 'postgres',
    host : '127.0.0.1',
    database : 'eastcloud',
    password : 'shinonomelove',
    port : 5432,
});

client.connect();

async function putgoods(req: any) {
//name, GenreID, CharID,GoodsTypeID
    const sql: string = "INSERT INTO goods (name, GenreID, CharID,TypeID) VALUES('"+req.body.name+"', "+req.body.GenreID+", "+req.body.CharID+","+req.body.GoodsTypeID+") RETURNING *;";
    console.log(sql)

    try{
        let result: any = await client.query(sql)
        console.log(result);
        return result;
    }
    catch(err){
            const resMessage= {
                statusCode: 400,
                msg:'암것도안드림 ㅅㄱ'
            }
            console.log(err)
            return resMessage;
    }
    
    

}

export{ putgoods }