import React from 'react'

export default function Card (props) {
    return (
        <div>
            <div>
                <img src={props.img} alt="" />
            </div>
            <div>
                <p>{props.description}</p>
                <a href={props.link}>acessar</a>
            </div>
        </div>
    )
}