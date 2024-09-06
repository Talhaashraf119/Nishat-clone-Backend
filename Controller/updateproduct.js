import product from "../Model/product.js";

export const updateproduct = async (req, res) => {
  try {
    let id=req.params.id
    const update = req.body;
    if(req.file){
      update.image=req.file.path
    }

  
    // Find the user by ID
    const checkuser = await product.findByIdAndUpdate(id,update,{new:true});
    // if (!checkuser) {
    //   return res.status(404).send({ message: "User not found" });
    // }

    res.status(200).send({
      message: "Product updated successfully",
      checkuser
    });

  } catch (error) {
    res.status(500).send({
      message: "Error updating product",
      error: error.message
    });
  }
};
