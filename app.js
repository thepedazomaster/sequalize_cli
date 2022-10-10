import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import alumnosRoutes from "./routes/alumnos.routes.js";
import cursosRoutes from "./routes/cursos.routes.js";
import profesoresRoutes from "./routes/profesores.routes.js";
import tipoCuentaRoutes from "./routes/tipoCuenta.routes.js";

var app = express();

// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(profesoresRoutes);
app.use(alumnosRoutes);
app.use(cursosRoutes);
app.use(tipoCuentaRoutes);
// catch 404 and forward to error handler

export default app;
