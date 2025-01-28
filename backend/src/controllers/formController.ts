import { Request, Response, RequestHandler} from 'express'
import forms from '../data/forms'

export const getForms: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json(forms);
    } catch (error: unknown) {
        if ( error instanceof Error) {
            res.status(500).json({ message: error.message || "Internal Error Occured" });
        } else {
            res.status(500).json({ message: "Internal Error Occured" });
        }
    }   
};

export const getForm: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const form = forms.find((form) => form.id === id);
        if (form) {
            res.status(200).json(form);
        } else {
            throw new Error("Form Not Found");
        }
    } catch (error: unknown) {
        if ( error instanceof Error) {
            res.status(500).json({ message: error.message || "Internal Error Occured" });
        } else {
            res.status(500).json({ message: "Internal Error Occured" });
        }
    }
}