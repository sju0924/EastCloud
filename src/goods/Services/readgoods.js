const { Client } = require('pg');

const client = new Client({
    user : 'postgres',
    host : 'localhost',
    database : 'eastcloud',
    password : 'shinonomelove',
    port : 5432,
});

client.connect();

exports.getAllgoods = async (req) =>{
    try{
        var row = await client.query('SELECT * from goods')
        console.log(row.rows);
        return row.rows;
        
        /*function(req,data){
            console.log(data);
            const resMessage = {
                statusCode: 200,
                data: data,
                msg: '즐겨찾기 조회 완료',
           };
              
            res.send(resMessage);
        });*/
    }
    catch(err){
            console.log(err);
            const resMessage = {
                statusCode: 400,
                msg:'암것도안드림 ㅅㄱ'
            }
            return resMessage;
    }
    
    

}
