var express=require('express');
var router=express.Router();
var _=require('lodash');

var cars=[];
cars.push({id:201701,name:"BMW",price:190,speed:"210km/h",color:"白色"});
cars.push({id:201702,name:"BYD",price:25,speed:"160km/h",color:"红色"});
cars.push({id:201703,name:"Benz",price:300,speed:"215km/h",color:"蓝色"});
cars.push({id:201704,name:"Honda",price:190,speed:"170km/h",color:"黑色"});
cars.push({id:201705,name:"QQ",price:130,speed:"210km/h",color:"白色"});

router.get('/',function(req,res,next){
    res.json(cars);
});

router.get('/:id',function(req,res,next){
    var id=parseInt(req.params.id);
    var car=_.find(cars,{id:id});
    res.json(car);
})

router.post('/car',function(req,res,next){
    var car=req.body;
    console.log(car);
    car.id=_.last(cars).id+1;
    cars.push(car);
    res.json(car);
});

router.put('/car', function(req, res, next) {
      var car=req.body;  //从请求正文中获得json对象
      console.log(req.body);
      var index=_.findIndex(cars,{id:parseInt(car.id)});  //根据id获得车在集合中的下标
      
      cars[index]=car;  //替换原对象
      //res.json(car);  //将修改后的车以json的形式返回
      res.send({status:"success", message:"更新成功!"});  
});

router.delete('/id/:id', function(req, res, next) {
      //获得url中的编号参数
      var id=parseInt(req.params.id);
      var index=_.findIndex(cars,{id:id});  //根据id获得车在集合中的下标
      cars.splice(index,1);   //在cars数组中删除下标从index开始的1条数据
      res.send({status:"success", message:"删除成功!"});  
});

module.exports = router;