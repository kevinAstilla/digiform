import mongooseLoader from './mongoose';
import dependencyInjector from './dependencyInjector';
import FormTemplate from '@/models/mongoose/formtemplate';
import expressLoader from './express';
import { type Express} from 'express'


export default function loader({ expressApp }: { expressApp: Express }): void {
    console.log('Initiating MongoDB connection');
    mongooseLoader();
    console.log('MongoDB connection established');

    console.log('Loading models');
    const formTemplateModel = {
        name: 'formTemplateModel',
        model: FormTemplate
      }

      dependencyInjector({
        models: [formTemplateModel]
    });

    // Load express app
    expressLoader({ app: expressApp });

    // Load passport

    // Load all routes
}