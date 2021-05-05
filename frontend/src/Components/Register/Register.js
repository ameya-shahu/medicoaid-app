import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../../redux/actions/users/registerAction';

function Register() {
    const [state, setState] = useState({
        name: '',
        department: '',
        gender: '',
        number: '',
        email: '',
        password: '',
        confirmPassword: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        country: ''

    });

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const address = {
            street1: state.street1,
            street2: state.street2,
            city: state.city,
            state: state.state,
            country: state.country
        }
        const reqJson = {
            name: state.name,
            department: state.department,
            gender: state.gender,
            phoneNo: state.number,
            email: state.email,
            password: state.password,
            confirmPassword: state.confirmPassword,
            address: address
        }
        dispatch(registerUserAction(reqJson));
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    }



    return (
        <Container>

            <Headers>
                <Form onSubmit={(e) => handleSubmit(e)} >
                    <InputFields>

                        <Title1>Doctor Registration</Title1>
                        <FullName
                            autoComplete='off'
                            type='text'
                            name='name'
                            value={state.name}
                            placeholder='Enter full name'
                            onChange={handleChange}
                        />

                        <Department
                            type='text'
                            name='department'
                            placeholder='Enter Department name'
                            value={state.department}
                            onChange={handleChange}
                        />

                        <Form.Group>
                            <Title>
                                Gender
                            </Title>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    name="gender"
                                    id="gender"
                                    value='male'
                                    label='Male'
                                    onChange={handleChange}
                                />

                                <Form.Check
                                    type="radio"
                                    name="gender"
                                    id="gender"
                                    value='female'
                                    label='Female'
                                    onChange={handleChange}
                                />

                                <Form.Check
                                    type="radio"
                                    name="gender"
                                    id="gender"
                                    value='Other'
                                    label='Other'
                                    onChange={handleChange}
                                />

                            </Col>
                        </Form.Group>


                        <PhoneNumber
                            type='text'
                            name='number'
                            placeholder='Enter phone number'
                            value={state.number}
                            onChange={handleChange}
                        />

                        <EmailId
                            type='email'
                            name='email'
                            placeholder='Enter Email-Id'
                            value={state.email}
                            onChange={handleChange}
                        />

                        <Address>
                            <Title>Address</Title>
                            <Street1
                                type='text'
                                name='street1'
                                placeholder='Street 1'
                                value={state.street1}
                                onChange={handleChange}
                            />
                            <Street2
                                type='text'
                                name='street2'
                                placeholder='Street 2'
                                value={state.street2}
                                onChange={handleChange}
                            />
                            <City
                                type='text'
                                name='city'
                                placeholder='City'
                                value={state.city}
                                onChange={handleChange}
                            />
                            <State
                                type='text'
                                name='state'
                                placeholder='State'
                                value={state.state}
                                onChange={handleChange}
                            />
                            <Street4
                                type='text'
                                name='country'
                                placeholder='Country'
                                value={state.country}
                                onChange={handleChange}
                            />
                        </Address>

                        <Password
                            type='text'
                            name='password'
                            placeholder='Password'
                            value={state.password}
                            onChange={handleChange}
                        />
                        <ConfirmPassword
                            type='text'
                            name='confirmPassword'
                            placeholder='Confirm Password'
                            value={state.confirmPassword}
                            onChange={handleChange}
                        />
                        <SubmitButton type='submit'>Submit</SubmitButton>
                        {/* <Link to='/thankyou'>
                            <SubmitButton type='submit'>Submit</SubmitButton>
                        </Link> */}
                    </InputFields>
                </Form>

            </Headers>
        </Container>
    )
}

export default Register

const Container = styled.div`
    padding-top: 10px;
    padding-bottom: 40px;
    height: auto;
    background-color: #9390FF;
    justify-content: center;
`

const Headers = styled.div`
    color: white;
    display: grid;
    place-items: center;

`
const InputFields = styled.div`
    margin-top: 28px;
    display: grid;
    place-items: center;

`
const Title1 = styled.h2`
    color: white;
    font-weight: 700;
`

const Title = styled.h2`
    color: white;
    
`
const FullName = styled.input`
    margin-top: 8px;
    padding: 15px;
    border: none;
    border-radius: 4px;
    :focus{
        outline: none;
    }
`
const Department = styled.input`
    margin-top: 15px;
    padding: 15px;
    border: none;
    border-radius: 4px;
    :focus{
        outline: none;
    }  
`
const PhoneNumber = styled.input`
    margin-top: 15px;
    padding: 15px;
    border: none;
    border-radius: 4px;
    :focus{
        outline: none;
    }
`
const EmailId = styled.input`
    margin-top: 15px;
    padding: 15px;
    border: none;
    border-radius: 4px;
    :focus{
        outline: none;
    }
`
const Address = styled.div`
    margin-top: 20px;   
    display: grid;
    place-items: center;
`
const Street1 = styled.input`
    padding: 15px;
    border: none;
    border-radius: 4px;
    :focus{
        outline: none;
    }
`
const Street2 = styled.input`
    margin-top: 8px;
    padding: 15px;
    border: none;
    border-radius: 4px;
    :focus{
        outline: none;
    }
`

const City = styled.input`
    margin-top: 8px;
    padding: 15px;
    border: none;
    border-radius: 4px;
    :focus{
        outline: none;
    }
`
const State = styled.input`
    margin-top: 8px;
    padding: 15px;
    border: none;
    border-radius: 4px;
    :focus{
        outline: none;
    }
`

const Street4 = styled.input`
    margin-top: 8px;
    padding: 15px;
    border: none;
    border-radius: 4px;
    :focus{
        outline: none;
    }
`

const Password = styled.input`
    margin-top: 48px;
    padding: 15px;
    border: none;
    border-radius: 4px;
    :focus{
        outline: none;
    }
`

const ConfirmPassword = styled.input`
    margin-top: 8px;
    padding: 15px;
    border: none;
    border-radius: 4px;
    :focus{
        outline: none;
    }
`

const SubmitButton = styled.button`
    margin-top: 25px;
    width: 100px;
    background-color: white;
    color: #9390FF;
    padding: 10px;
    border: none;
    border-radius: 4px;
    :hover{
        background-color: #9390FF;
        color: white;
        border: 2px solid white;
    }
`