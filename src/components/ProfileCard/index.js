import React from 'react'
import styled from 'styled-components'

const ImgComponent = styled.img`
    width: 100px;
    max-width: 100%;
    display: block;
    margin: 0 auto;
`

const Description = styled.p`
    text-align: center;
`

export default function ProfileCard (props) {
    return (
        <div>
            <ImgComponent src={props.img} />
            <Description>{props.description}</Description>
        </div>
    )
}