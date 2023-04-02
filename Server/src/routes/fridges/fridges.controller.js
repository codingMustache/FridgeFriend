const { Fridge } = require('../../models/index')
const axios = require('axios')
const fs = require('fs-extra')
const MapBox_Token = process.env.MapBox_Token;
const api_key = process.env.API_KEY;
const cloud_name = process.env.CLOUD_NAME;
const api_secret = process.env.CLOUD_SECRET;
const multer = require('multer')
const cloudinary = require('cloudinary')
/*
export const getFridgeAddress = () => {}
export const getFridgeGeoCode = () => {}
export const getFridgesImagesByID = () => {}
*/
const upload = multer({ dest: './tmp/' }).single('file');

const getAllFridgesGeoCode = async (req, res) => {
  Fridge.find({}).select('location')
    .then(data => res.send(data))
    .catch(err => console.error(err))
}

const addFridge = async (req, res) => {
  const fridgeAddress = req.body.address
  axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${fridgeAddress}.json?language=en&limit=5&proximity=-121.90662,37.42827&country=US&access_token=${MapBox_Token}`)
    .then(({ data }) => {
      const geocode = data.features[0].center
      const lon = geocode[0]
      const lat = geocode[1]
      const fridgeDbObj = {
        location: {
          lat,
          lon,
          address: {
            streetAddress: fridgeAddress,
          }
        },
      }
      Fridge.create(fridgeDbObj)
    })
    .catch(err => console.error(err))
  res.sendStatus(200)
}

const getFridgeInfoByID = (req, res) => {
  Fridge.findOne({ "_id": req.params.id })
    .then(data => res.send(data))
    .catch(err => console.error(err))
}
const updateByField = async (req, res) => {
  const update = req.body
  const _id = req.params.id
  Fridge.findOneAndUpdate(_id, update, { new: true })
    .then(data => res.send(data))
    .catch(err => console.error(err))
}
const addImageToInsideFridge = async (req, res) => {
  const _id = req.params.id
  const fridgeObj = await Fridge.findOne({ _id })
  const imgArr = fridgeObj.insideImages

  const file = req.file.path;
  cloudinary.v2.uploader
    .upload(file, {
      api_key,
      api_secret,
      cloud_name,
      width: 600,
      height: 600,
      crop: 'fit',
      quality: 'auto:good',
      format: 'jpg',
    })
    .then((data) => {
      const fullArr = imgArr.push({url: data.url})
      Fridge.findOneAndUpdate(_id, fullArr, { new: true })
        .then(data => res.status(201).json(data.url))
        .catch(err => console.error(err))
    })
    .catch((err) => console.error(err));

  fs.emptyDir('./tmp');
}


module.exports = {
  addFridge,
  getAllFridgesGeoCode,
  getFridgeInfoByID,
  updateByField,
  addImageToInsideFridge
}

