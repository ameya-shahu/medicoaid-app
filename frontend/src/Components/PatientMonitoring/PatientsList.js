import React, { useEffect } from 'react';
import styled from 'styled-components';
import Patient from '../PatientMonitoring/Patient/Patient';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { patientListAction } from '../../redux/actions/patients/patientListAction';
import {Spinner} from 'react-bootstrap';

function PatientsList() {
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(patientListAction());
    }, [dispatch]);
    const { patientInfo, loading } = useSelector(state => state.patientList);

    return (
        <Container>
            {
                loading ? (
                    <div><Spinner animation="border" variant="primary" /></div>
                ) : (
                    <div>
                        {
                            patientInfo.map((data, index) =>
                                <Patient data={data} key={index} />
                            )
                        }
                    </div>

                )
            }

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
