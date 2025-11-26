import React, {useState, useRef, useEffect} from "react";

const path = window.location.pathname;
const string = path.split('/');
export const ApiJsonAndFilter = () => {
    const [dataJson, setDataJson] = useState([]);
    const [dataJsonUniqueBrands, setDataJsonUniqueBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectBrand, setSelectBrand] = useState('');
    const refSelect = useRef(null);

    useEffect(() => {
        fetch('./cars.json').then(r => {
            if(!r.ok) {
                throw new Error('Error:' + r.status )
            }
            return r.json();
        }).then(data => {
            setDataJson(data);
            const uniqueDataBrands = [... new Map(data.map(item => [item.brand, item])).values()];
            setDataJsonUniqueBrands(uniqueDataBrands);
            setLoading(false);
            setSelectBrand(string[1]);
        }).catch(
            error => {
                console.error("Error:",error);
            }
        );
    }, []);

    useEffect(() => {
        history.pushState({}, '', '/' + selectBrand);
        refSelect.current.value = window.location.pathname.split('/')[1];
    }, [selectBrand]);

    return (
        <>
            <h2>ApiJsonAndFilter</h2>
            {loading ? <p>Loading...</p> : ''}
            <select ref={refSelect} onChange={(e) => setSelectBrand(e.target.value)}>
                <option value={''}>All</option>
                {dataJsonUniqueBrands.map((item,index) => {
                    return <option value={item.brand} key={index}>{item.brand}</option>
                })}
            </select>
            <ul>
                {dataJson.filter(item => !selectBrand ? item : item.brand.toUpperCase() === selectBrand.toUpperCase()).map((item, index) => {
                    return <li key={index}>{item.idUnique} - {item.brand} - {item.model}</li>
                })}
            </ul>
        </>
    );
};
