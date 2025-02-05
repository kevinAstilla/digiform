import { Request, Response, RequestHandler} from 'express'
import templates from '../data/templates'

export const getTemplates: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json(templates);
    } catch (error: unknown) {
        if ( error instanceof Error) {
            res.status(500).json({ message: error.message || "Internal Error Occured" });
        } else {
            res.status(500).json({ message: "Internal Error Occured" });
        }
    }   
};

export const getTemplate: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log('here');
        const { id } = req.params;
        const template = templates.find((template) => template.id === id);
        
        if (template) {
            res.status(200).json(template);
        } else {
            throw new Error("Template Not Found");
        }
    } catch (error: unknown) {
        if ( error instanceof Error) {
            res.status(500).json({ message: error.message || "Internal Error Occured" });
        } else {
            res.status(500).json({ message: "Internal Error Occured" });
        }
    }
}

export const deleteTemplate: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const template = templates.find((template) => template.id === id);
        
        if (template) {
            templates.splice(templates.indexOf(template), 1);
            res.status(200).json({ message: "Template Deleted Successfully" });
        } else {
            throw new Error("Template Not Found");
        }
    } catch (error: unknown) {
        if ( error instanceof Error) {
            res.status(500).json({ message: error.message || "Internal Error Occured" });
        } else {
            res.status(500).json({ message: "Internal Error Occured" });
        }
    }
}