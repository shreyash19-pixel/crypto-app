import React from 'react'
import { HeroHeading1, HeroHeading1Wrap, HeroHeading2, HeroHeadingCryptoImg, HeroHeadingCryptoImgWrap, HeroHeadingWrap, HeroWrap } from '../../styles/Hero'
import BitCoinImg from '../../assets/Bitcoin.png'
import EthImg from '../../assets/Ethereum.png'
import { DiscordBtn, DiscordBtnWrap, DiscordContainer, DiscordDesc } from '../../styles/Discord'
import Loader from '../../components/Loader'

const Discord = () => {
  return (
    <DiscordContainer id = "Join">
        <HeroWrap>
            <HeroHeadingWrap>
                <HeroHeading1Wrap>
                    <HeroHeadingCryptoImgWrap>
                        <HeroHeadingCryptoImg src = {BitCoinImg} />
                    </HeroHeadingCryptoImgWrap>
                    <HeroHeading1>JOIN US VIA</HeroHeading1>
                    <HeroHeadingCryptoImgWrap>
                        <HeroHeadingCryptoImg src = {EthImg} />
                    </HeroHeadingCryptoImgWrap>         
                </HeroHeading1Wrap>
                <HeroHeading2>DISCORD</HeroHeading2>
                <DiscordDesc>Invest and manage all your crypto at one place.</DiscordDesc>
            </HeroHeadingWrap>
            <DiscordBtnWrap>
                <DiscordBtn href = "https://discord.com/">Join via Discord</DiscordBtn>
            </DiscordBtnWrap>
        </HeroWrap>
        </DiscordContainer>
  )
}

export default Discord