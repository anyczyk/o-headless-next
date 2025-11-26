import React, {useState, useRef, useEffect} from "react";

export const ApiExample = () => {
    const [dataJson, setDataJson] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('./cars.json').then(response => {
            if(!response.ok) {
                throw new Error(`Net error ${response.status}`);
            }
            return response.json();
        }).then(data => {
            setDataJson(data);
            setLoading(false);
            }
        ).catch(error => {
                console.error('Error:', error);
            setLoading(false);
            }
        );
    }, []);

    return (
        <>
            <h2>Table</h2>
            {loading ? <p>Loading....</p> : ''}
            <ul>
                {dataJson.map(item => <li key={item.idUnique}>{item.idUnique} - {item.brand} - {item.model}</li>)}
            </ul>
        </>
    );
};
