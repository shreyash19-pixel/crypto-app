import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Hero = () => {

    const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");

    //             if (!response.ok) {
    //                 console.log("Response was not ok");
    //             }

    //             const responseData = response.data;
    //             setData(responseData);
    //         } catch (error) {
    //             console.log(error.message);
    //         }
    //     };

    //     fetchData();
    // }, []);

  return (
    <div>Hero</div>
  )
}

export default Hero