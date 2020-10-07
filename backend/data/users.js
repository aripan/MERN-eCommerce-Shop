import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
  },

  {
    name: "John Deo",
    email: "john@example.com",
    password: bcrypt.hashSync("password", 10),
  },

  {
    name: "Jane Deo",
    email: "jane@example.com",
    password: bcrypt.hashSync("password", 10),
  },
];

export default users;
