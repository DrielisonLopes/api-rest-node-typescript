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
    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', 1);

    return res.status(StatusCodes.OK).json([
        {
          id: 1,
          name: 'Rio de Janeiro',
        }
      ]);
};
