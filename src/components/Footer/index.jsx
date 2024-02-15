import React from 'react'
import { FooterContainer, FooterImg, FooterImgWrap, FooterLinksContainer, FooterLinksWrap, FooterWrap, Privacy, PrivacyWrap } from '../../styles/Footer'
import FooterImg1 from '../../assets/footer-img1.png'
import FooterImg2 from '../../assets/footer-img2.png'
import { FiTwitter } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";
import { SlSocialFacebook } from "react-icons/sl";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterImgWrap>
                <FooterImg src = {FooterImg1} />
            </FooterImgWrap>
            <FooterLinksContainer>
                <FooterLinksWrap>
                    <FiTwitter />
                    <RxDiscordLogo />
                    <SlSocialFacebook />
                    <CiYoutube />
                </FooterLinksWrap>
                <PrivacyWrap>
                    <Privacy>
                        Privacy
                    </Privacy>
                    <Privacy>
                       Terms of Use
                    </Privacy>
                </PrivacyWrap>
            </FooterLinksContainer>
            <FooterImgWrap>
                <FooterImg src = {FooterImg2} />
            </FooterImgWrap>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer