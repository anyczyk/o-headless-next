import React,{useEffect, useState, useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Earthquake = () => {

    const [dataEarthquake, setDataEarthquake] = useState([]);
    const [loading, setLoading] = useState(true);

    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=20').then(r=> {
            if(!r.ok) {
                console.log(r);
                throw new Error('Error: ' + r.status);
            }
            return r.json();
        }).then(data => {
            setDataEarthquake(data.features);
            console.log('data xx:', data.features);
            setLoading(false);
        }).catch(error => {
           console.error('Error:', error);
        });


        console.log('theme: ', theme);
        console.log('toggleTheme: ', toggleTheme);
    }, []);

    return (
      <div className={`p-2 ${theme==='light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
          <button className="p-2 bg-blue-500 text-white cursor-pointer" onClick={() => toggleTheme()}>Button theme (dark/light) test context</button>
          <h2>Earthquake</h2>
          {loading ? <p>Loading...</p> : <ul>
              {dataEarthquake.map((item, index) => {
                  const [lon, lat] = item.geometry.coordinates;
                  const {
                      mag,
                      magType,
                      place,
                      time,
                      url,
                  } = item.properties;
                  const dateTime = new Date(time);
                  const zoom = 12;
                  const mapUrl = `https://www.google.com/maps/place/${lat},${lon}/@${lat},${lon},${zoom}z`;
                  return <li className="p-2 border-solid border-2 mb-2" key={item.id}>{index} (unique id: {item.id})
                      mag: {mag} - <a className="text-blue-500" target="_blank"
                                      href={mapUrl}>{place}</a><br/> {dateTime.toString()} - <a
                          className="text-blue-500" target="_blank" href={url}>Url</a></li>;
              })}
          </ul>}
      </div>
    );
}
