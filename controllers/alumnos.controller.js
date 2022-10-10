export const getAlumnos = async (req, resp) => {
  resp.send("alumnos perro");
};

export const getAlumno = async (req, resp) => {
  resp.send("alumnos");
};
export const createAlumno = async (req, resp) => {
  const { fname, sname, flastname, slastname, identificacion } = req.body;
};
export const updateAlumno = async (req, resp) => {
  resp.send("alumnos");
};
export const deleteAlumnos = async (req, resp) => {
  resp.send("alumnos");
};
