const z = require('zod');

// Login Schema
const loginSchema = z.object({
  email: z
    .string({ message: "email is required" })
    .trim()
    .min(12, { message: "email must be at least 12 char..." })
    .max(28, { message: "email must be not more than 28 char..." }),

  password: z
    .string({ message: "password is required" })
    .trim()
    .min(8, { message: "password must be at least 8 char..." })
    .max(20, { message: "password must be not more than 20 char..." })
});

// Sign Up Schema
const signUpSchema = loginSchema.extend({
  username: z
    .string({ message: "username is required" })
    .trim()
    .min(3, { message: "username must be at least 3 char..." })
    .max(20, { message: "username must be not more than 20 char..." }),

  phone: z
    .string({ message: "phone is required" })
    .trim()
    .length(10, { message: "phone must be exactly 10 char..." })
});

module.exports = { loginSchema, signUpSchema };
