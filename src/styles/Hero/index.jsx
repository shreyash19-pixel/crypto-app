import styled,{keyframes} from 'styled-components'


export const HeroContainer = styled.div`
    width: 100%;
    padding: 120px 80px 50px 80px;
    position: relative;

    @media (max-width: 1300px)
    {
        padding-inline: 30px;
    }
`

export const HeroWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
   
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
    max-width: 90px;

    @media (max-width: 550px)
    {
        max-width: 105px;
    }

    @media (max-width: 420px)
    {
       max-width: 130px;
    }
`


export const HeroHeading1 = styled.h1`
    color: white;
    font-size: 85px;


    @media (max-width: 1124px)
    {
        font-size: 75px;
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
     font-size: 85px;
    background: linear-gradient(25deg, #2600fc, #ff00ea);
    -webkit-background-clip: text; /* For Safari */
    background-clip: text;
    color: transparent; /* Hides the original text */

    @media (max-width: 1124px)
    {
        font-size: 75px;
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
    display: grid;
    grid-gap: 80px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;


    @media (max-width: 850px)
    {
        grid-template-columns: 1fr 1fr;
        grid-gap: 60px;
        row-gap: 20px;
    }
`

export const CryptoPriceAndImgWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const CryptoImgWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const CryptoImg = styled.img`
    width: 100%;
    max-width: 80px;

    @media (max-width: 400px)
    {
        max-width: 50px;
    }

   
`

export const CryptoPriceAndPercWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;  
    text-align: center;

    
`


export const CryptoPercWrap = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-weight: 500;
    font-size: 18px;

    @media (max-width: 800px)
    {
        width: ${(props) => (props.market ? "120px" : "")};
    }

    @media (max-width: 500px)
    {
        gap: 7px;
    }

    @media (max-width: 400px)
    {
        font-size: ${(props) => (props.market ? "18px" : "16px")};
    }
`

export const CryptoPercSpan = styled.span`
    font-size: 23px;

    @media (max-width: 1000px)
    {
        font-size: ${(props) => (props.market ? "23px" : "14px")};
    }

    @media (max-width: 800px)
    {
        width: ${(props) => (props.market ? "120px" : "")};
    }

    @media (max-width: 500px)
    {
        font-size: ${(props) => (props.market ? "18px" : "16px")};
    }

    @media (max-width: 400px)
    {
        font-size: ${(props) => (props.market ? "18px" : "11px")};
    }

`

export const CryptoPriceWrap = styled.div`
    color: white;
    font-weight: 500;
    font-size: 22px;


    @media (max-width: 800px)
    {
        width: ${(props) => (props.market ? "120px" : "")};
    }

    @media (max-width: 400px)
    {
        font-size: ${(props) => (props.market ? "18px" : "16px")};
    }
`
