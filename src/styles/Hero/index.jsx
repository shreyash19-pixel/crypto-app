import styled,{keyframes} from 'styled-components'


export const HeroContainer = styled.div`
    width: 100%;
    padding: 80px;
    position: relative;

    @media (max-width: 1300px)
    {
        padding-inline: 20px;
    }

    @media (max-width: 400px)
    {
        padding-block: 30px;
    }
`

export const HeroWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
   
`



export const HeroHeadingWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    
`
export const HeroHeading1Wrap = styled.div`
    display: flex;
    gap: 35px;
`


const floatAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 25px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const HeroHeadingCryptoImgWrap = styled.div`
      animation: ${floatAnimation} 2s ease-in-out infinite;
      display: flex;
      align-items: center;
`;

export const HeroHeadingCryptoImg = styled.img`
    width: 100%;
    max-width: 70px;

`


export const HeroHeading1 = styled.h1`
    color: white;
    font-size: 105px;


    @media (max-width: 1160px)
    {
        font-size: 85px;
    }

    @media (max-width: 1160px)
    {
        font-size: 65px;
    }

    @media (max-width: 768px)
    {
        font-size: 50px;
    }

    @media (max-width: 480px)
    {
        font-size: 40px;
    }

`

export const HeroHeading2 = styled.h1`
     font-size: 105px;
    background: linear-gradient(25deg, #2600fc, #ff00ea);
    -webkit-background-clip: text; /* For Safari */
    background-clip: text;
    color: transparent; /* Hides the original text */

    @media (max-width: 1160px)
    {
        font-size: 85px;
    }

    @media (max-width: 1160px)
    {
        font-size: 65px;
    }

    @media (max-width: 768px)
    {
        font-size: 50px;
    }

    @media (max-width: 480px)
    {
        font-size: 40px;
    }


`;

export const Top4CryptoWrap = styled.div`
    display: flex;
    gap: 30px;
`

export const CryptoPriceAndImgWrap = styled.div`
    display: flex;
    flex-direction: column;
`

export const CryptoImgWrap = styled.div`
    
`

export const CryptoImg = styled.img`
    width: 100%;
`

export const CryptoPriceAndPercWrap = styled.div`
    display: flex;
    flex-direction: column;
`


export const CryptoPercWrap = styled.div`
    
`

export const CryptoPercSpan = styled.span`
    color: #0ECB81;
`

export const CryptoPriceWrap = styled.div`
    
`
