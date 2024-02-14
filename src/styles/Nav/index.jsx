import styled from "styled-components";

export const NavbarWrap = styled.div`
    width: 100%;
    padding: 40px 90px;
    
    @media (max-width : 1000px) {
        padding-inline: 40px;
    }

    @media (max-width : 768px) {
        padding-inline: 20px;
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
        animation : left .8s ease-out;
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