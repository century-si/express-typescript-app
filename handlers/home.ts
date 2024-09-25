import type { Handler } from "../types/common.type";
export const home: Handler = (req, res) => {
  res.send("Hello World!");
};
