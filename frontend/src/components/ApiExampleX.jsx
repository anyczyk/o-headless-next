import React, {useState, useEffect} from "react";

export const ApiExampleX = () => {
    const [dataJson, setDataJson] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('./cars.json').then(
            response => {
                if(!response.ok) {
                    throw new Error(`Net error ${response.status}`);
                }
                return response.json();
            }
        ).then(
            data => {
                setDataJson(data);
                setLoading(false);
            }
        ).catch(error => {
            console.error('Error:', error);
        });
    }, []);

    return (
        <>
            <h2>Api List cars 2</h2>
            {loading ? <p>Loading...</p> : ''}
            <ul>
                {dataJson.map(item => <li>
                    {item.idUnique} : {item.brand} : {item.model}
                </li>)}
            </ul>
        </>
    );
};
