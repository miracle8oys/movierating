import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [getData, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const abortController = new AbortController();

        setLoading(true)
        fetch(url, {signal: abortController.signal})
            .then(res => {
                if (!res.ok) {
                    throw new Error('failed to load data');
                }
                return res.json();
            }).then(data => {
                setData(data.Search);
                setLoading(false);
            }).catch(err => {
                console.log(err.message);
            })

            return () => abortController.abort();

    }, [url])
    return {getData, loading}
}
 
export default useFetch;