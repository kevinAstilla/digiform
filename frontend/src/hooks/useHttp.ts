import { useCallback, useEffect, useState } from 'react';

interface UseHttpProps {
    url: string;
    config: any;
    initialData: any;
}

async function sendHttpRequest(url: string, config: any) {
    const response = await fetch(url, config);
    const responseData = await response.json();
    if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong');
    }

    return responseData;
}

export default function UseHttp({url, config, initialData}:UseHttpProps) {
    const [data, setData ] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    function clearData() {
        setData(initialData);
    }

    const sendRequest = useCallback(
        async function sendRequest(data: any = undefined) {
            setIsLoading(true);
            try {
                console.log('sending request');
                console.log(JSON.stringify(data));
                const response = await sendHttpRequest(url, {
                    ...config,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)});
                setData(response);
            } catch(e) {
                setError(e.message || 'Something went wrong');
            }
            setIsLoading(false);
        },
        [url, config]
    );
    

    useEffect(() => {
        if (
            (config && (config.method === 'GET' || !config.method)) ||
            !config
        ) {
            sendRequest();
        }
    }, [sendRequest, config]);

    return {
        isLoading,
        data,
        error,
        sendRequest,
        clearData
    }
}