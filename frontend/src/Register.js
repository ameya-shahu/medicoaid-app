import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Register() {
    return (
        <Container>
            <Content>
                <Title>Doctor fill your Details</Title>
                <FullName type='text' placeholder='Enter full name'></FullName>
                <Department type='text' placeholder='Enter Department name'></Department>
                <GenderContainer>
                    <Title>Gender</Title>
                    <GenderRadio>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="exampleRadios1" value="male" checked />
                            <label class="form-check-label" for="exampleRadios1">
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="exampleRadios2" value="female" />
                            <label class="form-check-label" for="exampleRadios2">
                                Female
                            </label>
                        </div>
                        
                    </GenderRadio>
                </GenderContainer>
                <PhoneNumber type='number' placeholder='Enter phone number'></PhoneNumber>
                <EmailId type='email' placeholder='Enter Email-Id'></EmailId>
                <Address>
                    <Title>Address</Title>
                    <Street1 type='text' placeholder='Street 1'></Street1>
                    <Street2 type='text' placeholder='Street 2'></Street2>
                    <City type='text' placeholder='City'></City>
                    <State type='text' placeholder='State'></State>
                    <Street4 type='text' placeholder='Country'></Street4>
                </Address>
                <Link to='/thankyou'>
                    <SubmitButton type='submit'>Submit</SubmitButton> 
                </Link>
                
            </Content>
           
        </Container>
    )
}

export default Register

const Container = styled.div`
    padding-top: 40px;
    height: 140vh;
    background-color: #9390FF;
    justify-content: center;
`
const Content = styled.div`
    
    color: white;
    display: grid;
    place-items: center;
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
    justify-content: space-evenly;
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