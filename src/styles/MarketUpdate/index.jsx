import styled from "styled-components";


export const MarketContainer = styled.div`
    width: 100%;
    padding: 40px 90px;

    @media (max-width: 1200px)
    {
        padding-inline: 30px;
    }
`

export const MarketWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    
`

export const MarketHeading = styled.h1`
    color: white;
    font-size: 40px;

    @media (max-width:400px)
    {
        font-size: 25px;
    }
`


export const MarketTableWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: auto;   
    white-space: nowrap;
`;


export const MarketTableHeadingWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    background : linear-gradient(25deg, #2600fc, #ff00ea);
    padding: 15px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    

    @media (max-width: 800px)
    {
        display: flex;
        justify-content: space-between;
        width: 800px
    }

 
`

export const MarketTableHeadingContents = styled.div`
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    
    @media (max-width: 800px)
    {
        width: 18rem;
        text-align: center;
    }
   
`

export const MarketTableDataContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const MarketTableDataWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    padding: 15px;
    border-bottom: 1px solid white;

    
    @media (max-width: 800px)
    {
        width: 800px;
        text-align: center;
    }
    
`
export const CryptoImgAndNameWrap = styled.div`
    display: flex;
    gap: 20px;

`

export const CryptoImg = styled.img`
    width: 40px;
    height: 40px;
`

export const ButtonWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 350px)
    {
        gap: 10px;
    }
`

export const Button = styled.div`
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    max-width: 50px;
    min-height: 50px;
    cursor: pointer;

    @media (max-width: 350px)
    {
        max-width: 35px;
        min-height: 35px;
    }
`
