import express from "express";
import * as bodyParser from "body-parser";
import { PORT } from "./config/global";
import { routes } from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

routes.forEach((route) => {
  const { method, path, middleware, handler } = route
  app[method](path, ...middleware, handler)
})

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});
