import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from "../../shared/middleware/Validation";
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema(
    yup.object().shape({
      page: yup.number().notRequired().min(1, 'Page must be greater than 0'),
      limit: yup.number().notRequired().min(1, 'Limit must be greater than 0'),
      filter: yup.string().notRequired(),
    })
  ),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  console.log(req.query);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Not implemented!');
};
