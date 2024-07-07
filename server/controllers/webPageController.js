const pageModel = require("../models/webPageModel");


const handlePostRequest = async (req, res) => {

  try {
    const { query, body } = req;
    let pageData = await pageModel.findOne({});
    if (pageData === null) {
      pageData = new pageModel({ aboutPage: { content: "" } });
    }

    switch (query.scope) {
      case "carousel":
        const { title, subTitle, description, url, image } = body;
        const carouselData = {
          title,
          subTitle,
          description,
          url,
          image,
        };
        pageData.homePage.carousel.carouselData.push(carouselData);
        await pageData.save();
        break;

      case "background":
        const { background } = body;
        const arg =
          pageData.homePage.carousel.background[0].name !==
          background[0].name;
        if (arg) {
          const fileName = [
            { Key: pageData.homePage.carousel.background[0].name },
          ];
        }
        pageData.homePage.carousel.background = background;
        await pageData.save();
        break;

      case "banner":
        const arg2 =
          pageData.homePage.banner.image[0].name !== body.image[0].name;
        const bannerData = {
          title: body.title,
          subTitle: body.subTitle,
          description: body.description,
          url: body.url,
          image: body.image,
        };
        pageData.homePage.banner = bannerData;
        await pageData.save();
        break;

      case "collection":
        const collectionItem =
          pageData.homePage.collection[query.dataScope];
        const arg3 =
          collectionItem.image[0] &&
          collectionItem.image[0].name !== body.image[0].name;
        const collectionData = {
          title: body.title,
          url: body.url,
          image: body.image,
        };
        pageData.homePage.collection[query.dataScope] = collectionData;
        await pageData.save();
        break;

      default:
        return res.status(400).json({ success: false });
        break;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, err: err.message });
  }
};

module.exports = { handlePostRequest };