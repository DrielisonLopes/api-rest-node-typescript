import { Request, Response } from "express";


interface ICities {
    name: string;
}

export const create = (req: Request<{}, {}, ICities>, res: Response) => {

    console.log(req.body);

    return res.send("Create!")
};