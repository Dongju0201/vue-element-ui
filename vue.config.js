const data = require("./data.json")


module.exports = {
  // 选项...

  lintOnSave:false,
  devServer:{
   open:true,
   before(app){
    app.get("/api/seller",(req,res)=>{
    res.json({
    errorno:0,
    data:data.seller
 
    })
  })
  

    app.get("/api/goods",(req,res)=>{
      res.json({
      errorno:0,
      data:data.goods
   
      })
    })
    
      app.get("/api/ratings",(req,res)=>{
        res.json({
        errorno:0,
        data:data.ratings
     
        })
      })
    
 
  
  
  }
  
  }



  }

