import styled from "styled-components";


export const AboutContainer = styled.div`
    width: 100%;
    padding: 80px 120px;

    @media (max-width: 900px)
    {
      padding-inline: 50px;
    }

    @media (max-width: 600px)
    {
      padding-inline: 20px;
    }
`

export const AboutWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 70px;
`

export const AboutHeadingWrap = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 65px;
    color: white;
    font-weight: 600;

    @media (max-width: 650px)
    {
        font-size: 45px;
    }

    @media (max-width: 420px)
    {
        font-size: 30px;
    }
`

export const AboutHeadingSpan = styled.span`

    background: linear-gradient(25deg, #2600fc, #ff00ea);
    -webkit-background-clip: text; /* For Safari */
    background-clip: text;
    color: transparent;
`

export const AboutCardsInfoWrap = styled.div`
    display: flex;
    gap: 30px;

    @media (max-width: 1100px)
    {
        flex-direction: column;
        justify-content: center;
    }
`

export const AboutCardsWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const AboutCards = styled.div`
    width: 100%;
    max-width: 390px;
    display: flex;
    gap: 35px;
    background-color: #1B1229;
    padding: 20px;
    border: 1px solid #464646;
    border-radius: 20px;

    @media (max-width: 1100px)
    {
        max-width: 1100px;
        justify-content: center;
    }

    @media (max-width: 400px)
    {
      gap: 25px;
    }
`

export const CardsIconWrap = styled.div`
    display: flex;
    align-items: flex-start;
`

export const CardsIconContainer = styled.div`
    background: linear-gradient(25deg, #2600fc, #ff00ea);
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 15px;
    font-size: 25px;

    @media (max-width: 400px)
    {
      padding: 12px;
      font-size: 19px;
    }
`

export const CardInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const CardInfoHeading = styled.h3`
    color: white;
    font-size: 23px;

    @media (max-width: 400px)
    {
      font-size: 19px;
    }
`

export const CardInfoDesc = styled.h3`
    color: white;
    font-weight: 400;
    font-size: 16px;
    @media (max-width: 400px)
    {
      font-size: 16px;
    }
`

export const ChooseUsImageWrap = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1100px)
    {
        justify-content: center;
    }
`

export const ChooseUsImage = styled.img`
    width: 100%;
    max-width: 330px;

    @media (max-width: 1100px)
    {
        max-width: 200px;
    }
`