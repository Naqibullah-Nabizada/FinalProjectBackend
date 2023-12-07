import express from "express";
import session from "express-session";

const app = express();

export const sessionMiddleware = app.use(session({
  secret: '329jklsdfoi34oiopu5p34o5u34', // Replace with your own secret key
  resave: false,
  saveUninitialized: false
}));
