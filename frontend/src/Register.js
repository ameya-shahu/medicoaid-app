import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { loginUserAction } from './redux/actions/users/userActions';
import { useDispatch } from 'react-redux';

function Register() {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [male, setMale] = useState('');
    const [female, setFemale] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [street1, setStreet1] = useState('');
    const [street2, setStreet2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const respJson = {
        name: name,
        department: department,
        gender: {
            male: male,
            female: female
        },
        number: number,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        address: {
            street1: street1,
            street2: street2,
            city: city,
            state: state,
            country: country
        }
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUserAction(respJson));
    }

    const handleChange = (e) => {
        setName(e.target.value);
        setDepartment(e.target.value);
        setMale(e.target.value);
        setFemale(e.target.value);
        setNumber(e.target.value);
        setEmail(e.target.value);
        setStreet1(e.target.value);
        setStreet2(e.target.value);
        setCity(e.target.value);
        setState(e.target.value);
        setCountry(e.target.value);
        setPassword(e.target.value);
        setConfirmPassword(e.target.value);

        
    }
    return (
        <Container>

            <Headers>
                <Form onSubmit={(e) => handleSubmit(e)} >
                    <InputFields>
                        <Title1>Doctor Registration</Title1>
                        <FullName
                            type='text'
                            value={name}
                            placeholder='Enter full name'
                            onChange={handleChange}
                        />

                        <Department
                            type='text'
                            placeholder='Enter Department name'
                            value={department}
                            onChange={handleChange}
                        />

                        <GenderContainer>
                            <Title>Gender</Title>
                            <GenderRadio>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="exampleRadios1"
                                        value={male}
                                        onChange={handleChange}
                                        />
                                    <label className="form-check-label mr-3" >
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="exampleRadios2"
                                        value={female}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" >
                                        Female
                                    </label>
                                </div>

                            </GenderRadio>
                        </GenderContainer>

                        <PhoneNumber 
                            type='number' 
                            placeholder='Enter phone number'
                            value={number}
                            onChange={handleChange}
                        />

                        <EmailId 
                            type='email' 
                            placeholder='Enter Email-Id'
                            value={email}
                            onChange={handleChange}
                        />

                        <Address>
                            <Title>Address</Title>
                            <Street1 
                                type='text' 
                                placeholder='Street 1' 
                                value={street1}
                                onChange={handleChange}
                            />
                            <Street2 
                                type='text' 
                                placeholder='Street 2' 
                                value={street2}
                                onChange={handleChange}
                            />
                            <City 
                                type='text' 
                                placeholder='City' 
                                value={city}
                                onChange={handleChange}
                            />
                            <State 
                                type='text' 
                                placeholder='State' 
                                value={state}
                                onChange={handleChange}
                            />
                            <Street4 
                                type='text' 
                                placeholder='Country' 
                                value={country}
                                onChange={handleChange}
                            />
                        </Address>

                        <Password 
                            type='text' 
                            placeholder='Password' 
                            value={password} 
                            onChange={handleChange}
                        />
                        <ConfirmPassword 
                            type='text' 
                            placeholder='Confirm Password' 
                            value={confirmPassword}
                            onChange={handleChange}
                        />

                        <Link to='/thankyou'>
                            <SubmitButton type='submit'>Submit</SubmitButton>
                        </Link>
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
const GenderContainer = styled.div`
   margin-top: 15px;
`
const GenderRadio = styled.div`
    display: flex;
    flew-flow: column;
    
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