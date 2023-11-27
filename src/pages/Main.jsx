import { useState, useEffect } from 'react'
import Form from '../components/Form.jsx';
import NasaResult from '../components/NasaResult.jsx';

  //variable with your apiKey
  //const apiKey = "6TZrSMtdaiPWj7LpjjV2nKEGJ8gcCVTowYGxdUyB";

  //State to hold movie data
export default function Main() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    //console.log(nasaData);
  }, [nasaData]);

  //Function to getNasaData
  const getNasaData = async (searchTerm) => {
    try{
        // make fetch request and store response
        const url = `https://images-api.nasa.gov/search?q=${searchTerm}`;
        const response = await fetch(url);
        console.log(url);
        // Parse JSON response into a javascript object
        const data = await response.json();
        //set the Movie state to the movie
        setNasaData(data.collection.items);
        console.log(data.collection.items);
    }catch(e){
        console.log(e);
    }
  };

  const consolelogValue = (searchTerm) => {
    console.log(searchTerm)
  }

//getNasaData(the search term in the box)

  return (
    <>
      <Form nasasearch = {getNasaData}/>
      <div className = "NasaResultContainer">
      { 
        nasaData.length 
        ? 
          nasaData.map( (item) => {
            return(
              <NasaResult url = {item.links?.[0].href} 
              desc = {item.data[0].description}  
              title = {item.data[0].title}
              date = {item.data[0].date_created}
              />
            )
          } )
        : 
          <h1>No Data</h1>
      }
      </div>
    </>
  )
}