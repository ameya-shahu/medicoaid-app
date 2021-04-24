import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

import { useHistory } from "react-router-dom";

import useFormLogin from './Components/Custom_Hooks/LoginHook';
import logInvalidate from './Validate';


const Login = () => {
    //if url is not matching to the initial url then it changes back to the initial
    const URL = window.location.href;
    var res = URL.split("/");
    const history = useHistory();
    useEffect(() => {
        if (res.length > 1) {
            history.push('/');
        }
    }, []);

   //custom hook called from a diff component
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useFormLogin(login, logInvalidate);

    function login() {
        console.log('Logged-In successfully!');
      }

    return (
        <Container>
            <Headers>
                <LineOne>LogIn</LineOne>
                <TagLineOne>now to check</TagLineOne>
                <Tag>This is a prototype, so don't <br />consider this as the final<br /> aaplication</Tag>
                <Form onSubmit={handleSubmit} noValidate>
                    <InputFields>

                        <First
                            autoComplete='off'
                            className={`input ${errors.email && 'is-danger'}`}
                            value={values.email || ''}
                            placeholder='Email-Id'
                            type='email'
                            name='email'
                            onChange={handleChange}
                            required
                        />
                        {errors.email && (
                            <p className="help is-danger">{errors.email}</p>
                        )}
                        <Second
                            autoComplete='off'
                            className={`input ${errors.password && 'is-danger'}`}
                            value={values.password || ''}
                            placeholder='Password'
                            type='password'
                            name='password'
                            onChange={handleChange}
                            required
                        />
                        {errors.password && (
                            <p className="help is-danger">{errors.password}</p>
                        )}
                        <SubmitButton type='submit'>Submit</SubmitButton>

                        <CreateAcount>
                            Don't have an Account?<br /> Create One now...<br />
                            <Link to='/register'><p>Click here!</p></Link>
                        </CreateAcount>
                    </InputFields>
                </Form>

            </Headers>
        </Container>
    )
}

export default Login

const Container = styled.div`
    padding: 40px;
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
const TagLineOne = styled.div`
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
    margin-top: 15px;
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
    text-decoration: none;
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
    
    p{
        color: white;
        background-color: transparent;
        text-decoration: none;
    
    }
`