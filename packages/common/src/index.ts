import crypto from "crypto";

export const generateID = (length: number) => {
  return crypto.randomBytes(length).toString("hex");
};
