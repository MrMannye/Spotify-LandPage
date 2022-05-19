import React from 'react'
import Image from 'next/image'
import SliderContainer from './slider'
import { SliderItem } from './slider'

const ClientLogos = () => (
    <>
        <SliderContainer className='' contentWidth={2000} initialOffsetX={0}>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/audubon.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/coinbase.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/expensify.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/extra.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/litentry.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/picnic.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/pinkpanda.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/rainbow.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
        </SliderContainer>
        <SliderContainer className='' contentWidth={2000} initialOffsetX={0}>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/extra.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/expensify.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/rainbow.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/litentry.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/picnic.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/pinkpanda.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/coinbase.webp' objectFit='contain' alt='Image Logo' width={150} height={50}/>
            </SliderItem>
            <SliderItem width={150}>
                <Image src='/assets/trustedby/audubon.webp' objectFit='contain' alt='Image Logo' width={150} height={50} />
            </SliderItem>
        </SliderContainer>
    </>
)

export default ClientLogos