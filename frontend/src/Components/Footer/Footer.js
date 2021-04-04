import React from 'react'
import styled from 'styled-components'
import './Footer.css'

function Footer() {
    return (
        <Container className='mt-auto'>
            <hr />
            <FooterContainer>
                Copyright @MedicoAid 2021
            </FooterContainer>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    display: grid;
    place-items: center;
`
const FooterContainer = styled.div`
    color: #9390FF
`