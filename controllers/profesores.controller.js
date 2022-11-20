import { Profesores } from "../models/Profesores.js";
export const getProfesores = async (req, resp) => {
  try {
    const profesores = await Profesores.findAll();
    resp.json(profesores);
  } catch (error) {
    return resp.status(500).json({ message: error.message });
  }
};

export const getProfesor = async (req, resp) => {
  try {
    const { id } = req.params;
    const profesor = await Profesores.findOne({ where: { id } });
    resp.json(profesor);
  } catch (error) {
    return resp.status(500).json({ message: error.message });
  }
};
export const createProfesor = async (req, resp) => {
  try {
    const { user, pass, email, name, acountType } = req.body;

    console.log(req.body);

    const newProfesor = await Profesores.create({
      usuario: user,
      contrasena: pass,
      email,
      nombre: name,
      idCuenta: acountType,
    });
    resp.json(req.body);
  } catch (error) {
    return resp.status(500).json({ message: error.message });
  }
};
export const updateProfesor = async (req, resp) => {
  try {
    const { id } = req.params;
    const { user, pass, email, name, acountType } = req.body;
    await Profesores.update(
      {
        usuario: user,
        contrasena: pass,
        email,
        nombre: name,
        idCuenta: acountType,
      },
      { where: { id } }
    );
    resp.send("actualizado");
  } catch (error) {
    return resp.status(500).json({ message: error.message });
  }
};
export const deleteProfesor = async (req, resp) => {
  try {
    const { id } = req.params;
    await Profesores.destroy({ where: { id } });
    resp.sendStatus(204);
  } catch (error) {
    return resp.status(500).json({ message: error.message });
  }
};
