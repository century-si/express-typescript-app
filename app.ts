import express from "express";
import cors from 'cors';
import { PORT } from "./config/global";
import { routes } from "./routes";
import { getIpAddress } from "./utils";

const app = express();
// 跨域
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

routes.forEach((route) => {
  const { method, path, middleware, handler } = route
  app[method](path, ...middleware, handler)
})

app.listen(PORT, () => {
  console.log(`localhost! http://127.0.0.1:${PORT}`);
  console.log(`Ipv4! http://${getIpAddress()}:${PORT}`);
});
