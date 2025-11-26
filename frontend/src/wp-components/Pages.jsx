import React, {useState, useEffect, useRef} from "react";

export const Pages = () => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        fetch('http://o-headless-backend-rest.local/wp-json/wp/v2/pages').then(response => {
            if(!response.ok) {
                throw new Error('Error: ' + response.status);
            }
            return response.json();
        }).then(data => {
            setPages(data);
            console.log('data xx:', data);
        }).catch(error => {
           console.error('Error:', error);
        });
    }, []);

    return (
        <>
            <h1>Test</h1>
            {pages.length > 0 ?
                <>
                    <h2>{pages[8].title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{__html: pages[8].content.rendered}}/>
                </>

                : <p>Loading...</p>}
        </>
    );
};
