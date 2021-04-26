import React from 'react';
import styled from 'styled-components';
import Patient from '../PatientMonitoring/Patient/Patient';

function PatientsList() {
    return (
        <Container>
            <Patient />
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    place-items: center;
    flex-direction: coloumn;
    padding: 10px;
`

export default PatientsList
