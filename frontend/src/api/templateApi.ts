export function getTemplateUrl(id: string): string {
    return import.meta.env.VITE_API_URL + `/template/${id}`;
}