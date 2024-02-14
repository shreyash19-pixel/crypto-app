import React from 'react'
import { HeroContainer, HeroHeading1,HeroHeading1Wrap,HeroHeading2, HeroHeadingCryptoImg, HeroHeadingCryptoImgWrap,  HeroHeadingWrap, HeroWrap } from '../../styles/Hero'
import BitCoinImg from '../../assets/Bitcoin.png'
import EthImg from '../../assets/Ethereum.png'

const Hero = () => {
  return (
    <HeroContainer>
        <HeroWrap>
            <HeroHeadingWrap>     
                <HeroHeading1Wrap>
                    <HeroHeadingCryptoImgWrap>
                        <HeroHeadingCryptoImg src = {BitCoinImg} />
                    </HeroHeadingCryptoImgWrap>
                    <HeroHeading1>TRACK AND TRADE</HeroHeading1>
                    <HeroHeadingCryptoImgWrap>
                        <HeroHeadingCryptoImg src = {EthImg} />
                    </HeroHeadingCryptoImgWrap>
                </HeroHeading1Wrap>
                <HeroHeading2>CRYPTO CURRENCIES</HeroHeading2>   
            </HeroHeadingWrap>
        </HeroWrap>
    </HeroContainer>
  )
}

export default Hero