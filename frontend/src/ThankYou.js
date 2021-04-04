import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function ThankYou() {
    return (
        <Container>
            <Content>
                <Title>Thank You</Title>
                <TagLine>for registering in <br />MedicoAId application, <br />hope you are safe at <br />your home.</TagLine>
                <Link to='/login'>
                    <Login>Login now</Login>
                </Link>
                
            </Content>
        </Container>
    )
}

export default ThankYou
const Container = styled.div`
    padding-top: 80px;
    height: 100vh;
    background-color: white;
    justify-content: center;

`
const Content = styled.div`
    color: #9390FF;
    display: grid;
    place-items: center;    
`
const Title = styled.h1`
    font-weight: 700;

`
const TagLine = styled.span`
    text-align: center;
    font-weight: 500;
`
const Login = styled.button`
    margin-top: 50px;
    padding: 12px 18px;
    background-color: #9390FF;
    color: white;
    border: none;
    border-radius: 4px;
    :hover{
        background-color: white;
        color: #9390FF;
        border: 2px solid #9390FF;
    }
`