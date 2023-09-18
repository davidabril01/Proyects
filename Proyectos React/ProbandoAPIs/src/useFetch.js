import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);
    const [isMounted, setIsMounted] = useState(true); // Nuevo estado para rastrear el montaje del componente

    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);

        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal: abortController.signal });
                const result = await response.json();
                if (isMounted) {
                    setData(result); // Actualiza el estado solo si el componente está montado
                }
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Request cancelled");
                } else {
                    setError(error);
                }
            } finally {
                if (isMounted) {
                    setLoading(false); 
                }
            }
        };

        fetchData();

        return () => {
            abortController.abort();
            setIsMounted(false); 
        };
    }, [url]);

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
        }
    };

    return { data, loading, error, handleCancelRequest };
}
