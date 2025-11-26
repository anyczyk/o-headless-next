import React, {useState} from "react";

const names = [['Victor', '1'], ['John', '2'], ['Rich', '3']];
export const FilterListName = () => {
    const [nameFilter, setNameFilter] = useState('');

    const searchName = (e) => {
        setNameFilter(e.target.value);
    }

    return (
        <>
            <h2>Filter list name component</h2>
            <input className="bg-black text-white" placeholder="Search name..." onChange={(e) => searchName(e)} value={nameFilter} type="text" />
            {nameFilter}

            {names.map((item, index) => {
                const nameLower = item[0].toLowerCase();
                if(nameLower.includes(nameFilter.toLowerCase())) { // startsWith()
                    return (
                        <li key={index}>
                            {item[0]} ({item[1]})
                        </li>
                    )
                }
            })}
        </>
    );
};
