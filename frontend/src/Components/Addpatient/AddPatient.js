import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { registerPatientAction } from '../../redux/actions/patients/registerPatientAction';
import { useHistory } from "react-router-dom";  

function ThankYou() {

    const [startDate, setStartDate] = useState(new Date());
    const [state, setState] = useState({
        email: '',
        name: '',
        phoneNo: '',
        gender: '',
        dateOfBirth: new Date()
    })
    
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const tempDate = state.dateOfBirth;
        console.log(tempDate);
        dispatch(registerPatientAction(state));

    }

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    }
    return (
        <Container>
            <Content>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' value={state.email} type="email" placeholder="name@example.com" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' value={state.name} type="text" placeholder="Enter Name" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control name='phoneNo' value={state.phoneNo} type="text" placeholder="XXXXXXXXXXXX" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Gender
                        </Form.Label>
                        <Col>
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="gender"
                                id="gender"
                                value='female'
                                onChange={handleChange}
                            />
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="gender"
                                id="gender"
                                value='male'
                                onChange={handleChange}
                            />
                            <Form.Check
                                type="radio"
                                label="Other"
                                name="gender"
                                id="gender"
                                value='other'
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Date of Birth
                        </Form.Label>
                        <Col>
                            <DatePicker
                                name='dateOfBirth'
                                onChange={handleChange}
                                value={state.dateOfBirth}
                                dateFormat="dd/MM/yyyy"
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                isClearable
                                placeholderText="Enter DOB"
                                closeOnScroll={true}
                            />
                        </Col>

                    </Form.Group>
                    <SubmitButton type='submit'>Submit</SubmitButton>
                </Form>

            </Content>
        </Container>
    )
}

export default ThankYou
const Container = styled.div`
    padding-top: 20px;
    height: 100vh;
    background-color: white;
    justify-content: center;

`
const Content = styled.div`
    color: #9390FF;
    display: grid;
    place-items: center;    
`
const SubmitButton = styled.button`
    margin-top: 25px;
    width: 100px;
    background-color: #9390FF;
    color: white;
    font-weight: 700;
    padding: 10px;
    border: none;
    border-radius: 4px;
    :hover{
        background-color: white;
        color: #9390FF;
        border: 2px solid #9390FF;
    }
`
