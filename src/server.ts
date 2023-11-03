import express, { NextFunction, Request, Response } from "express";
import { errorHandler } from "./middleware/errorHandler";
import { APIError } from "./utils/APIError";

const PORT = process.env.PORT || 30788;
const app = express();


app.get('/', (req: Request, res: Response, next: NextFunction ) => {
  try {
      throw new APIError( "NOT FOUND", 404, 'User not found') ;
  } catch (error) {
    next(error)
  }
});

app.use( errorHandler );

app.listen(PORT, () => {
    console.log(`sever start on port : ${PORT}`);
})