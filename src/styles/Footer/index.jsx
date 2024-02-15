import styled from 'styled-components'


export const FooterContainer = styled.div`
    width: 100%;
    padding: 20px;

    @media (max-width: 500px)
    {
        padding-inline: 10px;
    }
`

export const FooterWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 420px)
    {
        justify-content: center;
    }
`

export const FooterImgWrap = styled.div`
    @media (max-width: 420px)
    {
        display: none;
    }
`

export const FooterImg = styled.img`
    width: 100%;
    max-width: 400px;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    
    @media (max-width: 420px)
    {
        gap: 30px;
    }
`

export const FooterLinksWrap = styled.div`
    display: flex;
    gap: 25px;
    justify-content: center;
    color: white;
    font-size: 30px;

    @media (max-width: 600px)
    {
        font-size: 25px;
    }


    @media (max-width: 420px)
    {
        font-size: 35px;
        gap: 30px;
    }
`

export const PrivacyWrap = styled.div`
    display: flex;
    gap: 25px;
    justify-content: center;


    @media (max-width: 420px)
    {
        gap: 30px;
    }

`

export const Privacy = styled.h4`
    color: white;
    font-size: 17px;
    font-weight: 400;

    @media (max-width: 600px)
    {
        font-size: 14px;
    }

    @media (max-width: 420px)
    {
        font-size: 17px;
    }
`