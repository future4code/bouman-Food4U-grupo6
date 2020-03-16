import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoint/signup";
import { loginEndpoint } from "./endpoint/login";

const app = express();
app.use(express.json());

app.post('/signup', signupEndpoint);
app.post('/login', loginEndpoint);

export default app;
