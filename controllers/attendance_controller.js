var BaseDeDatos = require("../dao/BaseDeDatos.js");

let baseDeDatos = new BaseDeDatos();

const add_user = async (req, res, next) => {

  try {
      const user = await baseDeDatos.add_user(req.query.email, req.query.date, req.query.course, req.query.image)
      res.send(user);
  } catch (error) {
      res.status(500).send(error);
  }
}

const put_user = async (req, res, next) => {

  try {
      const user = await baseDeDatos.edit_user(req.query.email, req.query.date, req.query.course, req.query.image);
      res.send(user);
  } catch (error) {
      res.status(500).send(error);
  }
}

const delete_user = async (req, res, next) => {

  try {
      const user = await baseDeDatos.delete_user(req.query.email);
      res.send(user);
  } catch (error) {
      res.status(500).send(error);
  }
}

module.exports = {
  add_user,
  put_user,
  delete_user
};
