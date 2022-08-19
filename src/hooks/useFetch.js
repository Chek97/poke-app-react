import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [list, setList] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getListData = async () => {
            try {
                const request = await fetch(url);
                const response = await request.json();
                setList(response);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }
        getListData();
    }, []);

    return {
        list,
        loading
    }
}