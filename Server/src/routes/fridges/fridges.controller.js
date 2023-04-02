const { Fridge } = require('../../models/index')
const axios = require('axios')
const MapBox_Token = process.env.MapBox_Token;
/*
export const getAllFridgesGeoCode = () => {}
export const getFridgeAddress = () => {}
export const getFridgeGeoCode = () => {}
export const getFridgesImagesByID = () => {}
*/
const addFridge = async (req, res) => {
  const fridgeAddress = req.body.address
  axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${fridgeAddress}.json?language=en&limit=5&proximity=-121.90662,37.42827&country=US&access_token=${MapBox_Token}`)
    .then(({data}) => {
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
    .catch(err => error.log(err))
  res.sendStatus(200)
}

module.exports = {
  addFridge
}

