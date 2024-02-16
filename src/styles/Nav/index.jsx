import styled from "styled-components";

export const NavbarWrap = styled.div`
    width: 100%;
    padding: 20px 90px;
    background-color: ${(props) => (props.isSticky ? "#0F051D" : "transparent")};
    box-shadow: ${(props) => (props.isSticky ? "0px 10px 5px 0px rgba(0, 0, 0, 0.16);" : "none")};
    position: fixed;
    z-index: 99;
    
    @media (max-width : 1000px) {
        padding-inline: 40px;
    }

    @media (max-width : 768px) {
        padding-inline: 20px;
        padding-block: 20px;
    }
`

export const Navbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CompanyName = styled.h1`
    color : white;
`

export const NavLinksWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;


    @media (max-width: 768px)
    {
        display: none;
    }
`

export const NavLinks = styled.a`
    text-decoration: none;
    color: white;
    font-size: 21px;
    font-weight: 500;

    &:hover{
        background: linear-gradient(25deg, #2600fc, #ff00ea);
        -webkit-background-clip: text; /* For Safari */
        background-clip: text;
        color: transparent;
        transition: all .4s ease-in-out;
    }

    @media (max-width: 768px)
    {
        color: black;
    }
`

export const SocialLinksWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px)
    {
        display: none;
    }
`

export const Hamburger = styled.div`
    display: none;

    @media (max-width: 768px)
    {
        display: flex;
        color: white;
        font-size: 25px;
        cursor: pointer;
    }
`

export const CrossWrap = styled.div`
     display: none;

    @media (max-width: 768px)
    {
        display: flex;
        font-size: 30px;
        cursor: pointer;
        position: absolute;
        z-index: 4;
        right: 20px;
        top: 40px;
    }
`

export const ResponsiveWrap = styled.div`
    display: none;

    @media (max-width: 768px)
    {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 60px;
        background-color: white;
        position: absolute;
        top: 0;
        left:0px;
        animation : left .4s ease-out;
        font-size: 22px;
        z-index: 99999;

        @keyframes left {
        from {
            transform: translate(-100%);
        }
        to {
            transform: translate(0);
        }
        }
    }
`

export const ResponsiveSocialWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`