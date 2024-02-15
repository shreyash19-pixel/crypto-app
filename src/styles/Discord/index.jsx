import styled from "styled-components";

export const DiscordContainer = styled.div`
    width: 100%;
    padding: 10px 80px 50px 80px; 
    position: relative;

    @media (max-width: 1300px)
    {
        padding-inline: 30px;
    }

`

export const DiscordDesc = styled.p`
    color: white;
    font-size: 20px;
`

export const DiscordBtnWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DiscordBtn = styled.a`
    text-decoration: none;
    padding: 20px 35px;
    background: linear-gradient(25deg, #2600fc, #ff00ea);
    border-radius: 35px;
    color: white;
    font-size: 18px;
    font-weight: 500;
`