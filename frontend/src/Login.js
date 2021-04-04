import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Form } from 'react-bootstrap'

const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(login user action function({email, password});
}

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    return (
        <Container>
            <Headers>
                
                <LineOne>LogIn</LineOne>
                <TagLineOne>now to check</TagLineOne>
                <Tag>This is a prototype, so don't <br />consider this as the final<br /> aaplication</Tag>
                <Form onSubmit={handleSubmit}>
                    <InputFields>
                        <First placeholder='Email-Id' type='text' onChange={(e)=> setEmail(e.target.value)}></First>
                        <Second placeholder='Password' type='text' onChange={(e)=> setPassword(e.target.value)}></Second>
                        <SubmitButton>Submit</SubmitButton>
                        <Link to='/register'>
                            <CreateAcount>Don't have an Account? Create One now!</CreateAcount>
                        </Link>
                        
                    </InputFields>
                </Form>
                
            </Headers>
        </Container>
    )
}

export default Login

const Container = styled.div`
    padding-top: 40px;
    height: 100vh;
    background-color: #9390FF;
    justify-content: center;
`
const Headers = styled.div`
    color: white;
    display: grid;
    place-items: center;
`
const LineOne = styled.div`
    font-size: 42px;
    font-weight: 700;
`
const TagLineOne =styled.div`
    margin-top: -10px;
`
const Tag = styled.div`
    margin-top: 30px;
    text-align: center;

`
const InputFields = styled.div`
    margin-top: 28px;
    display: grid;
    place-items: center;

`

const First = styled.input`
    padding: 15px;
    border: none;
    border-radius: 4px;
    :focus{
        outline: none;
    }
`

const Second = styled.input`
    margin-top: 15px;
    padding: 15px;
    border: none;
    border-radius: 4px;
    :focus{
        outline: none;
    }
`
const SubmitButton = styled.button`
    margin-top: 15px;
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

const CreateAcount = styled.button`
    background-color: #9390FF;
    color: white;
    border: none;
    margin-top: 50px;
`