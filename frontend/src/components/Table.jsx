import React, {useState, useEffect, useRef} from "react";
const cars = [
    {idUnique: '1',  brand:'BMW',       model:'320i',     year:'2015', color:'black',  length:'463', weight:'1500', price:'18000'},
    {idUnique: '2',  brand:'Peugeot',   model:'208',      year:'2019', color:'white',  length:'405', weight:'1150', price:'12000'},
    {idUnique: '3',  brand:'Toyota',    model:'Corolla',  year:'2018', color:'blue',   length:'463', weight:'1370', price:'16000'},
    {idUnique: '4',  brand:'Ford',      model:'Focus',    year:'2016', color:'grey',   length:'448', weight:'1400', price:'12500'},
    {idUnique: '5',  brand:'Audi',      model:'A4',       year:'2017', color:'silver', length:'472', weight:'1500', price:'22000'},
    {idUnique: '6',  brand:'Honda',     model:'Civic',    year:'2020', color:'red',    length:'467', weight:'1350', price:'19500'},
    {idUnique: '7',  brand:'BMW',       model:'X3',       year:'2019', color:'blue',   length:'470', weight:'1750', price:'35000'},
    {idUnique: '8',  brand:'Nissan',    model:'Qashqai',  year:'2018', color:'white',  length:'439', weight:'1500', price:'18000'},
    {idUnique: '9',  brand:'Volkswagen',model:'Golf',     year:'2015', color:'black',  length:'425', weight:'1320', price:'13000'},
    {idUnique: '10', brand:'Peugeot',   model:'3008',     year:'2020', color:'green',  length:'444', weight:'1450', price:'24000'},
    {idUnique: '11', brand:'Mercedes',  model:'C 200',    year:'2016', color:'grey',   length:'468', weight:'1550', price:'26000'},
    {idUnique: '12', brand:'Hyundai',   model:'i30',      year:'2017', color:'blue',   length:'434', weight:'1280', price:'11000'},
    {idUnique: '13', brand:'Kia',       model:'Sportage', year:'2019', color:'white',  length:'448', weight:'1500', price:'21000'},
    {idUnique: '14', brand:'Renault',   model:'Clio',     year:'2018', color:'red',    length:'405', weight:'1100', price:'10000'},
    {idUnique: '15', brand:'BMW',       model:'318i',     year:'2001', color:'red',    length:'446', weight:'1500', price:'10000'},
    {idUnique: '16', brand:'Mazda',     model:'3',        year:'2020', color:'black',  length:'466', weight:'1340', price:'20000'},
    {idUnique: '17', brand:'Subaru',    model:'Impreza',  year:'2015', color:'blue',   length:'445', weight:'1370', price:'14000'},
    {idUnique: '18', brand:'Suzuki',    model:'Swift',    year:'2016', color:'yellow', length:'384', weight:'950',  price:'9000'},
    {idUnique: '19', brand:'Tesla',     model:'Model 3',  year:'2021', color:'white',  length:'469', weight:'1625', price:'42000'},
    {idUnique: '20', brand:'Volvo',     model:'XC60',     year:'2018', color:'silver', length:'468', weight:'1780', price:'33000'},
    {idUnique: '21', brand:'Opel',      model:'Astra',    year:'2017', color:'green',  length:'437', weight:'1285', price:'11500'},
    {idUnique: '22', brand:'Fiat',      model:'500',      year:'2019', color:'pink',   length:'357', weight:'980',  price:'9500'},
    {idUnique: '23', brand:'Lexus',     model:'RX 350',   year:'2016', color:'black',  length:'489', weight:'1890', price:'34000'},
    {idUnique: '24', brand:'Honda',     model:'HR-V',     year:'2018', color:'grey',   length:'429', weight:'1360', price:'20000'},
    {idUnique: '25', brand:'Toyota',    model:'RAV4',     year:'2020', color:'blue',   length:'460', weight:'1600', price:'28000'},
    {idUnique: '26', brand:'Nissan',    model:'Almera',   year:'2014', color:'white',  length:'449', weight:'1280', price:'8000'},
    {idUnique: '27', brand:'Mitsubishi',model:'Outlander',year:'2017', color:'silver', length:'469', weight:'1600', price:'17000'},
    {idUnique: '28', brand:'Mercedes',  model:'S 350',    year:'2015', color:'black',  length:'509', weight:'1950', price:'45000'},
    {idUnique: '29', brand:'Alfa Romeo',model:'Giulia',   year:'2018', color:'red',    length:'463', weight:'1470', price:'30000'},
    {idUnique: '30', brand:'Seat',      model:'Leon',     year:'2016', color:'blue',   length:'436', weight:'1290', price:'12500'},
    {idUnique: '31', brand:'Citroen',   model:'C3',       year:'2019', color:'white',  length:'399', weight:'1080', price:'10500'},
    {idUnique: '32', brand:'Porsche',   model:'911',      year:'2014', color:'black',  length:'449', weight:'1500', price:'70000'},
    {idUnique: '33', brand:'Volkswagen',model:'Passat',   year:'2018', color:'grey',   length:'476', weight:'1530', price:'22000'},
    {idUnique: '34', brand:'Chevrolet', model:'Cruze',    year:'2015', color:'red',    length:'463', weight:'1410', price:'11000'},
    {idUnique: '35', brand:'Peugeot',   model:'508',      year:'2017', color:'blue',   length:'475', weight:'1500', price:'19500'},
    {idUnique: '36', brand:'Jaguar',    model:'XE',       year:'2016', color:'green',  length:'467', weight:'1490', price:'25000'},
    {idUnique: '37', brand:'BMW',       model:'520d',     year:'2014', color:'white',  length:'496', weight:'1600', price:'21000'},
    {idUnique: '38', brand:'Dacia',     model:'Duster',   year:'2019', color:'grey',   length:'434', weight:'1250', price:'9000'},
    {idUnique: '39', brand:'Skoda',     model:'Octavia',  year:'2018', color:'black',  length:'467', weight:'1350', price:'17000'},
    {idUnique: '40', brand:'Ford',      model:'Mustang',  year:'2015', color:'red',    length:'478', weight:'1650', price:'26000'},
];
const carsBrandUnique = [...new Map(cars.map(item => [item.brand, item])).values()];
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export const Table = () => {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 600);
    const refSelect = useRef(null);
    const refInputText = useRef(null);
    const [countPages, setCountPages] = useState(3);
    const [carsFilter, setCarsFilter] = useState([]);

    useEffect(() => {
        if(search !== refSelect.current.value) {
            refSelect.current.value = '';
        }
        carsBrandUnique.filter(item => item.brand.toLowerCase() === search.toLowerCase()).map(item => {
            console.log('xxx:', item.brand);
            refSelect.current.value = item.brand;
        });

        setCarsFilter( cars.filter(item => (search !== '' && search.length > 0 && search !== 'All') ? item.brand.toLowerCase() === search.toLowerCase() : item) );
    }, [search]);

    const searchString = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <input ref={refInputText} placeholder="Search by string" type="text" value={search}
                   onChange={(e) => searchString(e)}/>
            <select ref={refSelect} onChange={(e) => {
                setSearch(e.target.value);
            }}>
                <option value=''> -</option>
                <option value='All'>All</option>
                {carsBrandUnique.map((item, index) => <option value={item.brand} key={index}>{item.brand}</option>)}
            </select>
            <table>
                <thead>
                <tr>
                    <th className="p-3">ID</th>
                    <th className="p-3">Brand</th>
                    <th className="p-3">Model</th>
                    <th className="p-3">Year</th>
                    <th className="p-3">color</th>
                    <th className="p-3">Length [cm]</th>
                    <th className="p-3">Weight [kg]</th>
                    <th className="p-3">Price [$]</th>
                </tr>
                </thead>
                <tbody>
                {
                    // cars.filter(item => Object.values(item).some(v => v.toString().toLowerCase().includes(debouncedSearch.toLowerCase())))
                    // cars.filter(item => (search !== '' && search.length > 0 && search !== 'All') ? item.brand.toLowerCase() === search.toLowerCase() : item)
                    carsFilter
                        .map((item, index) => {
                            if (index < countPages) {
                                return (<tr key={item.idUnique}>
                                    <td className="p-3">{item.idUnique}</td>
                                    <td className="p-3">{item.brand}</td>
                                    <td className="p-3">{item.model}</td>
                                    <td className="p-3">{item.year}</td>
                                    <td className="p-3">{item.color}</td>
                                    <td className="p-3">{item.length}</td>
                                    <td className="p-3">{item.weight}</td>
                                    <td className="p-3">{item.price}</td>
                                </tr>);
                            }
                        })}
                </tbody>
            </table>
            <button disabled={countPages >= (search === '' ? cars.length : carsFilter.length)} className={`text-white p-2 ${ countPages >= (search === '' ? cars.length : carsFilter.length) ? 'cursor-default bg-gray-300':'cursor-pointer bg-blue-500'}`} onClick={() => {
                setCountPages(countPages + 3);
            }}>show more
            </button>
        </>
    );
};
