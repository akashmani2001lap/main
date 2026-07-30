const arr = [];

export const register = async (req, res) => {
  try {
    arr.push(req.body);
    console.log(arr);

    return res.status(200).json({ arr });
    
  } catch (error) {
    console.log(error);
  }
};
