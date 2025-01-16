import { Container } from 'typedi';

export default function dependencyInjector({ models }: { models: Array<{ name: string, model: any }> }) : void {
    try {
        models.forEach((model) => {
            Container.set(model.name, model.model);
        });
    } catch (error) {
        console.error('Error loading models');
        throw new Error('Error loading models');
    }
}