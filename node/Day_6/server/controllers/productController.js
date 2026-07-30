const arr = []

export const  productController = (req,res)=>{

  try {
    
    arr.push(req.body)
    console.log(arr);

    return res.status(200).json({
      message:"successfully recived",
      product: arr
    })
    

  } catch (error) {
    console.log(error);
    
  }
}

export const getAllProducts = async(req,res)=>{

 
    console.log(req.params);

} 

export const QuertParam = async(req,res)=>{

  console.log(req.query);
  
}

export const productHeader = async(req,res)=>{

  console.log(req.header);
  
}