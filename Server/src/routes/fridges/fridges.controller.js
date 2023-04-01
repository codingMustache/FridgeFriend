const Fridge = require('../../models/index')
const axios = require('axios')
/*
export const getAllFridgesGeoCode = () => {}
export const getFridgeAddress = () => {}
export const getFridgeGeoCode = () => {}
export const getFridgesImagesByID = () => {}
*/
const addFridge = async (req, res) => {
  console.log(req)
  //const fridgeAdress = fridgeToAdd.address
  //console.log(fridgeAdress)
  // axios(
  //   `https://api.mapbox.com/geocoding/v5/mapbox.places/${formattedLocation}.json?language=en&limit=5&proximity=-121.90662,37.42827&country=US&access_token=${mapToken}`
  // )
  //Fridge.create(data)
  res.send()
}

module.exports = {
  addFridge
}

