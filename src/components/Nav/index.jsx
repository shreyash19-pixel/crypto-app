import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Nav = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apikey = process.env.REACT_APP_CRYPTO_API; 

                const options = {
                    method: 'GET',
                    url: 'https://coinranking1.p.rapidapi.com/coins',
                    params: {
                        referenceCurrencyUuid: 'yhjMzLPhuIDl',
                        timePeriod: '24h',
                        'tiers[0]': '1',
                        orderBy: 'marketCap',
                        orderDirection: 'desc',
                        limit: '50',
                        offset: '0'
                    },
                    headers: {
                        'X-RapidAPI-Key': apikey,
                        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                    }
                };

                const response = await axios.request(options);

                if (!response.ok) {
                    console.log("Response was not ok");
                }

                const responseData = response.data;
                setData(responseData);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, []);

    console.log(data);
    
    return (
        <div>

        </div>
    );
};

export default Nav;
