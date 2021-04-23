import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './Components/Footer/Footer'

function Home() {
    return (
        <Container>
            <Link to='/addPatient'>
                <AddPatientButton>+ Add more Patients</AddPatientButton>
            </Link>
            <DiseaseDetection>Disease Detection</DiseaseDetection>
            <PatientDetection>Patients Details</PatientDetection>
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.div`
    display: grid;
    place-items: center;
    flex-direction: coloumn;
    padding: 10px;
    height: 80vh;
`
const AddPatientButton = styled.button`
    width: 300px;
    padding: 6px;
    font-size: 20px;
    font-weight: 600;
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
const DiseaseDetection = styled.button`
    width: 300px;
    height: 160px;
    display: grid;
    color: #9390FF;
    background-color: white;
    font-size: 20px;
    font-weight: 600;
    place-items: center;
    border: 2px solid #9390FF;
    border-radius: 16px;
    :hover{
        background-color: #9390FF;
        color: white;
        border: 2px solid white; 
    }
`
const PatientDetection = styled.div`
    width: 300px;
    height: 160px;
    display: grid;
    color: #9390FF;
    background-color: white;
    font-size: 20px;
    font-weight: 600;
    place-items: center;
    border: 2px solid #9390FF;
    border-radius: 16px;
    :hover{
        background-color: #9390FF;
        color: white;
        border: 2px solid white; 
    }
`
