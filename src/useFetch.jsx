import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        // console.log('use effect run');
        const abortCont = new AbortController();

       setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
        .then((res) => {
            if(!res.ok){
                throw Error ("Could not fetch data from resources");
            }
            return res.json();    
        })
        .then((data) => {
            // console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch((error) => {
            if(error.name === 'AbortError'){
                console.log('fetch aborted');
            }else{
                setIsPending(false);
                setError(error.message);
            }
        });    
       }, 1000);

    //    return (() => console.log("Cleanup")) ;
        return () => abortCont.abort();

    }, [url]);

    return { data, isPending, error }
}
 
export default useFetch;