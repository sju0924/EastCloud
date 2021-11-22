import { getAllgoods,getOnegoods } from '../Services/readgoods';
import { putgoods } from '../Services/creategoods'

async function showgoods(req: any, res:any, next:any){
    try {
      let rows = await getAllgoods();
      res.send(rows);
    } catch (err) {
        console.log(err);
    }
  };

 async function showgoods_byid(req :any, res: any, next:any) {
  console.log(req)
    try {
      let rows = await getOnegoods(req.params.id);
      res.send(rows);
    } catch (err) {
        console.log(err);
    }
  };
  
  
async function creategoods (req :any, res :any , next: any) {
    
    try {
      let rows = await putgoods(req);
      res.send(rows);
    } catch (err) {
        console.log(err);
    }
};

export {showgoods, showgoods_byid , creategoods}