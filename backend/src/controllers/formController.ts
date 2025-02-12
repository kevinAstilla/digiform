import { Request, Response, RequestHandler} from 'express'
import forms from '../data/forms'
import submissions from '../data/submissions'

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

export const getSubmissions: RequestHandler = async(req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { page } = req.query;
        console.log(req.query)
        let startIndex = 0
        if( page ) {
            startIndex = (Number(page) - 1) * 5;
        }

        const form = forms.find((form) => form.id === id);
        if (!form) {
            throw new Error("Form Not Found");
        }

        const formSubmissions = submissions.filter((submissions) => submissions.form_id === id);
        const response = {
            totalPages: Math.ceil(formSubmissions.length / 5),
            currentPage: page ? Number(page) : 1,
            data: formSubmissions.slice(startIndex, startIndex + 5)
        }
        res.status(200).json(response);

    } catch (error: unknown) {
        if ( error instanceof Error) {
            res.status(500).json({ message: error.message || "Internal Error Occured" });
        } else {
            res.status(500).json({ message: "Internal Error Occured" });
        }
    }
}

export const submitForm: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { data } = req.body
        const form = forms.find((form) => form.id === id);

        if (!form) {
            throw new Error("Form Not Found");
        }
        submissions.push({
           id: submissions.length + 1,
           form_id: form.id,
           created_at: new Date().toISOString(),
           submitted_at: new Date().toISOString(),
           data 
        })
        res.status(200).json({message: submissions})
    } catch (error: unknown) {
        if (error instanceof Error ) {
            res.status(500).json({ message: error.message || "Internal Error Occured" });
        } else {
            res.status(500).json({message: "Internal Error Occured" });
        }
    }
}

export const deleteForm: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const form = forms.find((form) => form.id === id);
        if (form) {
            forms.splice(forms.indexOf(form), 1);
            res.status(200).json({ message: "Form Deleted Successfully" });
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