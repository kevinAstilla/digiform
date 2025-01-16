import UseHttp from "./useHttp";

interface UseHttpProps {
    url: string;
    config: any;
    initialData: any;
}

export default function UseApi({url, config, initialData}: UseHttpProps) {

    // const apiUrl =  import.meta.env.VITE_API_URL + url;
    
    return UseHttp({url, config, initialData});    
}