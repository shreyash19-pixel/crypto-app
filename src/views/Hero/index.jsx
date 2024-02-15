import React,{useEffect, useContext} from 'react'
import { CryptoImg, CryptoImgWrap, CryptoPercSpan, CryptoPercWrap, CryptoPriceAndImgWrap, CryptoPriceAndPercWrap, CryptoPriceWrap, HeroContainer, HeroHeading1,HeroHeading1Wrap,HeroHeading2, HeroHeadingCryptoImg, HeroHeadingCryptoImgWrap,  HeroHeadingWrap, HeroWrap, Top4CryptoWrap } from '../../styles/Hero'
import BitCoinImg from '../../assets/Bitcoin.png'
import EthImg from '../../assets/Ethereum.png'
import AppContext from '../../utils/AppContext';
import axios from 'axios';
const Hero = () => {

    // const {data, setData} = useContext(AppContext)

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

    const data = [
        {image : BitCoinImg, name : "Bitcoin", price_change_percentage_24h : "5.17%", current_price : "51,700"},
        {image : EthImg, name : "Ethereum", price_change_percentage_24h : "2.19%", current_price : "11,300"},
        {image : BitCoinImg, name : "Bitcoin", price_change_percentage_24h : "5.17%", current_price : "51,700"},
        {image : EthImg, name : "Ethereum", price_change_percentage_24h : "2.19%", current_price : "11,300"},
    ]

    function limitNumsAfterDecimal(num) {
        let limNum = num.toFixed(2)
        return limNum
    }

    function numberWithCommas(x) {
        let num = limitNumsAfterDecimal(x)
        var parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

  return (
    <HeroContainer>
        <HeroWrap>
            <HeroHeadingWrap>     
                <HeroHeading1Wrap>
                    <HeroHeadingCryptoImgWrap>
                        <HeroHeadingCryptoImg src = {BitCoinImg} />
                    </HeroHeadingCryptoImgWrap>
                    <HeroHeading1>TRACK AND TRADE</HeroHeading1>
                    <HeroHeadingCryptoImgWrap>
                        <HeroHeadingCryptoImg src = {EthImg} />
                    </HeroHeadingCryptoImgWrap>
                </HeroHeading1Wrap>
                <HeroHeading2>CRYPTO CURRENCIES</HeroHeading2>   
            </HeroHeadingWrap>
            {/* <Top4CryptoWrap>
                {data.slice(0,4).map((crp,index) => (
                <CryptoPriceAndImgWrap>
                    <CryptoImgWrap>
                        <CryptoImg src = {crp.image} />
                    </CryptoImgWrap>
                    <CryptoPriceAndPercWrap>
                        <CryptoPercWrap>
                            {crp.name}
                        <CryptoPercSpan>
                            {limitNumsAfterDecimal(crp.price_change_percentage_24h)
                            }
                        </CryptoPercSpan>
                        </CryptoPercWrap>
                        <CryptoPriceWrap>
                            {"$ " + numberWithCommas(crp.current_price)}
                        </CryptoPriceWrap>
                    </CryptoPriceAndPercWrap>
                </CryptoPriceAndImgWrap>
                ))}
            </Top4CryptoWrap> */}
            <Top4CryptoWrap>
                {data.map((crp,index) => (
                <CryptoPriceAndImgWrap>
                    <CryptoImgWrap>
                        <CryptoImg src = {crp.image} />
                    </CryptoImgWrap>
                    <CryptoPriceAndPercWrap>
                        <CryptoPercWrap>
                            {crp.name}
                        <CryptoPercSpan>
                            {crp.price_change_percentage_24h
                            }
                        </CryptoPercSpan>
                        </CryptoPercWrap>
                        <CryptoPriceWrap>
                            {"$ " + crp.current_price}
                        </CryptoPriceWrap>
                    </CryptoPriceAndPercWrap>
                </CryptoPriceAndImgWrap>
                ))}
            </Top4CryptoWrap>
        </HeroWrap>
    </HeroContainer>
  )
}

export default Hero