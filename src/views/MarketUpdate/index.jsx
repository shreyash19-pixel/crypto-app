import React, {useContext} from 'react'
import {MarketTableHeadingContents, MarketContainer, MarketHeading, MarketTableHeadingWrap, MarketTableWrap, MarketWrap, MarketTableDataWrap, CryptoImgAndNameWrap, CryptoImg, MarketTableDataContainer, ButtonWrap, Button } from '../../styles/MarketUpdate'
import { CryptoImgWrap, CryptoPercSpan, CryptoPercWrap, CryptoPriceWrap} from '../../styles/Hero'
import AppContext from '../../utils/AppContext';
import Loader from '../../components/Loader';

const MarketUpdate = () => {



  const btn = [
    {title : 1},
    {title : 2},
    {title : 3},
    {title : 4},
    {title : 5}
  ]

  const {data,setPage} = useContext(AppContext)

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
    <MarketContainer id = "Market">
      <MarketWrap>
        <MarketHeading>
            Market Update
        </MarketHeading>
        <MarketTableWrap>
          <MarketTableHeadingWrap>
              <MarketTableHeadingContents>Coin</MarketTableHeadingContents>
              <MarketTableHeadingContents>Price</MarketTableHeadingContents>
              <MarketTableHeadingContents>24h Change</MarketTableHeadingContents>
              <MarketTableHeadingContents>Market Cap</MarketTableHeadingContents>
          </MarketTableHeadingWrap>
          {data.length > 0 ? (
          <MarketTableDataContainer>
              {data.map((value, index) => (
                  <MarketTableDataWrap key={index}>
                      <CryptoImgAndNameWrap>
                          <CryptoImgWrap>
                              <CryptoImg src={value.image} />
                          </CryptoImgWrap>
                          <CryptoPercWrap market="true">
                              {value.name}
                          </CryptoPercWrap>
                      </CryptoImgAndNameWrap>
                      <CryptoPriceWrap market="true">
                          {"$ " + value.current_price}
                      </CryptoPriceWrap>
                      <CryptoPercWrap>
                          <CryptoPercSpan market="true" style = {{color : limitNumsAfterDecimal(value.price_change_percentage_24h).includes("-") ? "red" : "#0ECB81"}}>
                              {limitNumsAfterDecimal(value.price_change_percentage_24h) + " %"}
                          </CryptoPercSpan>
                      </CryptoPercWrap>
                      <CryptoPriceWrap market="true">
                          {"$ " + numberWithCommas(value.market_cap)}
                      </CryptoPriceWrap>
                  </MarketTableDataWrap>
              ))}
            </MarketTableDataContainer>
            ) : (
                <MarketTableDataContainer style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                    <MarketTableDataWrap style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                        <Loader />
                    </MarketTableDataWrap>
                </MarketTableDataContainer>
            )}
        </MarketTableWrap>
        <ButtonWrap>
          {btn.map((num) => (
          <Button onClick={() => setPage(num.title)}>{num.title}</Button>
          ))}  
        </ButtonWrap>
      </MarketWrap>
    </MarketContainer>
  )
}

export default MarketUpdate