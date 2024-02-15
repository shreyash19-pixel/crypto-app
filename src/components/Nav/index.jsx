import React,{useState } from 'react';
import { CompanyName, CrossWrap, Hamburger, NavLinks, NavLinksWrap, Navbar, NavbarWrap, ResponsiveSocialWrap, ResponsiveWrap, SocialLinksWrap } from '../../styles/Nav';
import { FiTwitter } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {

  const navLinks = [
    {title : "Home", link : "#Home"},
    {title : "Market", link : "#Market"},
    {title : "Choose Us", link : "#Choose Us"},
    {title : "Join", link : "#Join"},
  ]

  const socialLinks = [
    {icon : <FiTwitter />, link : "https://twitter.com/?lang=en"},
    {icon : <RxDiscordLogo />, link : "https://discord.com/"},
  ]

  const [nav, setNav] = useState(false)
  const [stickyNav, setStickyNav] = useState(false)
    nav?document.body.style.overflow="hidden":document.body.style.overflow="auto";

    const handleStickyNav = () => {
      if(window.scrollY > 40)
      {
        setStickyNav(true)
      }
      else
      {
        setStickyNav(false)
      }
    }

    window.addEventListener("scroll",handleStickyNav)

    
    return (
        <NavbarWrap isSticky = {stickyNav}>
          <Navbar>
            <CompanyName>
              CRYPTO
            </CompanyName>
            <NavLinksWrap>
              {navLinks.map((links) => (
              <NavLinks href = {links.link}>{links.title}</NavLinks>
              ))}
            </NavLinksWrap>
            <SocialLinksWrap>
              {socialLinks.map((links) => (
              <NavLinks href = {links.link}>{links.icon}</NavLinks>
              ))}
            </SocialLinksWrap>
            <Hamburger onClick = {() => setNav(!nav)}>
              <GiHamburgerMenu />
            </Hamburger>
            {nav &&
            (<ResponsiveWrap>
              <CrossWrap onClick = {() => setNav(!nav)}>
                  <RxCross2 />
              </CrossWrap>
                     
                {navLinks.map((links) => (
                  <NavLinks onClick = {() => setNav(false)} href = {links.link}>{links.title}</NavLinks>
              ))}
              <ResponsiveSocialWrap>
              {socialLinks.map((links) => (
                            <NavLinks onClick = {() => setNav(false)} href = {links.link}>{links.icon}</NavLinks>
                            ))}
              </ResponsiveSocialWrap>
            </ResponsiveWrap>
            )}
          </Navbar>
        </NavbarWrap>
    );
};

export default Nav;
