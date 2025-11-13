import { z } from "zod";

const e164 = /^\+?[1-9]\d{1,14}$/;

const registerScheme = z.object({
  name: z.string().min(1, "invalid username"),
  lastName: z.string().min(1, "invalid last name"),
  email: z.email().min(1, "invalid email"),
  phone: z.string().regex(e164, "Invalid phone number"),
  message: z.string().min(1, "invalid message"),
});

export default registerScheme
