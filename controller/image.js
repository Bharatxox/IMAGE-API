const imageModel = require("../model/image");

const getImage = async (req, res) => {
  try {
    const pageSize = req.query.pageSize || 10; //no of item per page
    const pageNo = req.query.pageNo || 1; //current page no
    const skip = (pageNo - 1) * pageSize;

    const { description, tags } = req.body;
    const filterImage = {};
    if (description) {
      filterImage.description = {
        $regex: new RegExp(`${description}`, "gi"),
      };
    }
    if (tags) {
      filterImage.tags = { $in: tags };
    }
    const images = await imageModel
      .find(filterImage)
      .skip(skip)
      .limit(pageSize);
    res.status(200).json({
      status: "OK",
      message: "successfully generated image",
      images: images,
    });
  } catch (err) {
    res.json({
      status: false,
      message: err.message,
    });
  }
};

const createImage = async (req, res) => {
  try {
    const image = await imageModel.create(req.body);
    res.status(200).json({
      status: "OK",
      message: "successfully created image",
      images: image,
    });
  } catch (err) {
    res.json({
      status: false,
      message: err.message,
    });
  }
};

const imageController = { getImage, createImage };

module.exports = imageController;
9;
