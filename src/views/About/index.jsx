import React from 'react'
import { ChooseUsImage,AboutCards, AboutCardsInfoWrap, AboutCardsWrap, AboutContainer, AboutHeadingSpan, AboutHeadingWrap, AboutWrap, CardInfoDesc, CardInfoHeading, CardInfoWrap, CardsIconContainer, CardsIconWrap, ChooseUsImageWrap } from '../../styles/About'
import { CiWallet } from "react-icons/ci";
import { RiPencilLine } from "react-icons/ri";
import { PiNotepadThin } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";
import { RxIconjarLogo } from "react-icons/rx";
import { HiOutlineCollection } from "react-icons/hi";
import BitImg from '../../assets/choose-us-img.png'

const About = () => {

    const perks = [
        {icon : <CiWallet />, heading : "CONNECT YOUR WALLET", desc : "Use Trust Wallet, Metamask or to connect to the app."},
        {icon : <RiPencilLine />, heading : "SELECT YOUR QUANTITY", desc : "Upload your crypto and set a title, description and price."},
        {icon : <PiNotepadThin />, heading : "CONFIRM TRANSACTION", desc : "Earn by selling your crypto on our marketplace."},
        {icon : <FaRegMessage />, heading : "RECEIVE YOUR OWN NFTS", desc : "Invest all your crypto at one place on one platform."},
        {icon : <RxIconjarLogo />, heading : "TAKE A MARKET TO SELL", desc : "Discover, collect the right crypto collections to buy or sell."},
        {icon : <HiOutlineCollection />, heading : "DRIVE YOUR COLLECTION", desc : "We make it easy to Discover, Invest and manage."},
    ]

  return (
    <AboutContainer>
        <AboutWrap>
            <AboutHeadingWrap>
                WHY <AboutHeadingSpan>&nbsp; CHOOSE US</AboutHeadingSpan>
            </AboutHeadingWrap>
            <AboutCardsInfoWrap>
            <AboutCardsWrap>
                {perks.slice(0,3).map((perk) => (
                <AboutCards>
                    <CardsIconWrap>
                        <CardsIconContainer>
                            {perk.icon}
                        </CardsIconContainer>
                    </CardsIconWrap>
                    <CardInfoWrap>
                        <CardInfoHeading>
                            {perk.heading}
                        </CardInfoHeading>
                        <CardInfoDesc>
                            {perk.desc}
                        </CardInfoDesc>
                    </CardInfoWrap>
                </AboutCards>
                ))}
            </AboutCardsWrap>
            <ChooseUsImageWrap>
                <ChooseUsImage src = {BitImg} />
            </ChooseUsImageWrap>
            <AboutCardsWrap>
                {perks.slice(3,).map((perk) => (
                <AboutCards>
                    <CardsIconWrap>
                        <CardsIconContainer>
                            {perk.icon}
                        </CardsIconContainer>
                    </CardsIconWrap>
                    <CardInfoWrap>
                        <CardInfoHeading>
                            {perk.heading}
                        </CardInfoHeading>
                        <CardInfoDesc>
                            {perk.desc}
                        </CardInfoDesc>
                    </CardInfoWrap>
                </AboutCards>
                ))}
            </AboutCardsWrap>
            </AboutCardsInfoWrap>
        </AboutWrap>
    </AboutContainer>
  )
}

export default About