import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from "../../shared/middleware/Validation";
import { ICity } from '../../database/models';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
  id?: number;
}
interface IBodyProps extends Omit<ICity, 'id'> { }

export const updateByIdValidation = validation(getSchema => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    name: yup.string().required().min(3),
  })),
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {

    if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            default: 'Record not found'
        }
    });
    
    return res.status(StatusCodes.NO_CONTENT).send();
};