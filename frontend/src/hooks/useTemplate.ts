import UseHttp from "./useHttp";

export function UseTemplates() {
    const url = import.meta.env.VITE_API_URL + '/templates';
    return UseHttp({url: url, config: {method:'GET'}});
};
export function UseTemplate(id: string) {
    const url = import.meta.env.VITE_API_URL + `/templates/${id}`;
    console.log(url);
    return UseHttp({url: url, config: {method:'GET'}});
};

export function UseCreateTemplate({}) {

};

export function UseUpdateTemplate() {

};

export function UseDeleteTemplate() {

};