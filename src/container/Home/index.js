import React, { useEffect, useState } from "react"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProfileCard from '../../components/ProfileCard'
import styled from 'styled-components'
import { Card, Button } from 'react-bootstrap'

const Title = styled.h2`
    text-align: center;
`

const CardContainer = styled.h2`
    display: flex;
    flex-direction: row;
    align-content: center;
    > * {
        margin: 0 10px;
    }
    .card-text {
        font-size: 12px;
    }
`

export default function Home () {
    const [posts, setPosts] = useState([])

    useEffect(function () {
       getPosts()
    }, [])

    // async / await
    async function getPosts () {
        const data = await fetch('https://my-json-server.typicode.com/caiodesign/blog-api/posts')
        const result = await data.json();
        setPosts(result)
    }
    return (
        <>
            <Navbar />
            <Title>Home</Title>
            <ProfileCard
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToU6pR15agpyPnekGjTDMnAJckftByK7J3haqvPxRN0HZbP_rE"
                description="Meu nome é jessica, tenho 25 anos de idade e sou programadora."
            />
            <CardContainer>
                {posts.map((item, ix) => {
                    return (
                        <Card>
                                <Card.Img src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.content}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </CardContainer>
            
            <Footer />
        </>
    )
}
