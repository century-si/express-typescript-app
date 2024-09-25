import { RequestHandler as Middleware } from "express";

export const requestLogger: Middleware = (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
};