import { Divider } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            <Link to='/addpatient'>
                <AddPatientButton>+ Add more Patients</AddPatientButton>
            </Link>
            <DiseaseDetection>Disease Detection</DiseaseDetection>
            <Link to='/patientslist'>
                <PatientDetection>Patients Monitoring</PatientDetection>
            </Link>
            <Link to='/allocatemachine'>
                <AllocateMachine>Allocate Machine</AllocateMachine>
            </Link>
            
            <Divider variant='middle' width={300} className='mt-5' />
            <FooterContainer>
                Copyright @MedicoAid 2021
            </FooterContainer>

        </Container>
    )
}

export default Home

const Container = styled.div`
    display: grid;
    place-items: center;
    flex-direction: coloumn;
    padding: 10px;

`
const AddPatientButton = styled.button`
    width: 300px;
    padding: 6px;
    margin-top: 15px;
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
    margin-top: 15px;
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
    margin-top: 15px;
    display: grid;
    color: #9390FF;
    background-color: white;
    text-decoration: none;
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

const AllocateMachine = styled.button`
    width: 300px;
    padding: 6px;
    margin-top: 15px;
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

const FooterContainer = styled.div`
    color: #9390FF
`