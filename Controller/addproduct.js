import product from "../Model/product.js";

export const addproduct = async (req, res) => {
  try {
    const { name, price, description, stock, category,subcategory } = req.body;
    let { filename } = req.file;
    if (req.file) {
      filename = req.file.path;
    }

    const newproduct = new product({
      name,
      price,
      stock,
      description,
      category,
      subcategory,
      image: filename,
    });

    const updateddata = await newproduct.save();

    res.status(200).send({
      message: "Product Added Successfully",
      success: true,
      updateddata,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error adding product",
      error: error.message,
    });
  }
};
