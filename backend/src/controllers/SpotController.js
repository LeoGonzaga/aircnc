const Spot = require("../models/Spot");
const User = require("../models/User");
module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({
        error: "Usuário não existe."
      });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      price,
      techs: techs.split(",").map(tech => tech.trim())
    });
    return res.json(spot);
  },

  async index(req, res) {
    const { techs } = req.query;
    const spots = await Spot.find({ tech: techs });
    return res.json(spots);
  },

  async remove(req, res) {
    const { _id, user } = req.body;

    console.log("id", id);
    const spot = await Spot.remove({ id: _id });
    console.log(spot);
    return res.json(spot);
  }
};
