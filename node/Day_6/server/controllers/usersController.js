const arr = []

export const userController = (req,res)=>{

  try {
    
    arr.push(req.body)
    console.log(arr);

    return res.status(200).json({
      message: "successfully register"
    })
    


  } catch (error) {
    console.log(error);
    
  }
}
