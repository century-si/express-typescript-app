import { addUser } from "../data/users";
import type { Handler } from "../types/common.type";

export const signup: Handler = (req, res) => {
  const { username, password } = req.body;
  if (!username?.trim() || !password?.trim()) {
    return res.status(400).send("Invalid username or password");
  }
  addUser({ username, password });
  res.status(201).send("User added");
};
