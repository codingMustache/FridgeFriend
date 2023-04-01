const { User } = require('../../models');
/*
getUserByID
 */

const saveUser = async (req, res) => {
  try {
    const { email } = req.body;
    const found = await User.findOne({ email });
    if (!found) {
      const newUser = await User.create({ email });
      res.status(201).send(newUser);
    } else {
      res.status(200).send(found);
    }
  } catch (err) {
    console.log('Error from SaveUser:', err);
    res.sendStatus(500);
  }
}

module.exports = {
  saveUser
}