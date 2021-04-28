import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

import { useHistory } from "react-router-dom";

import useFormLogin from '../Custom_Hooks/LoginHook';
import logInvalidate from '../Validation/Validate';
import 'bulma/css/bulma.css';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Login = () => {
    const classes = useStyles();
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
                <LineOne>LOGIN</LineOne>
                <TagLineOne>Now to proceed further</TagLineOne>
                <Tag>MedicoAId<br />Need insights on medical images<br /> or monitor your patient</Tag>

                <Form onSubmit={handleSubmit} noValidate>
                    <Card>
                        <InputFields>
                            <TextField
                                label="Email"
                                autoComplete='off'
                                className={classes.root}
                                value={values.email || ''}
                                placeholder='abc@xyz.com'
                                type='email'
                                name='email'
                                onChange={handleChange}
                                required
                            />
                            {errors.email && (
                                <p className="help is-danger">{errors.email}</p>
                            )}
                            <TextField
                                label="Password"
                                autoComplete='off'
                                className={classes.root}
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

                        </InputFields>
                    </Card>
                </Form>
                <CreateAcount>
                    Don't have an Account?<br /> Create One now...<br />
                    <Link to='/register'><p>Click here!</p></Link>
                </CreateAcount>

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
    margin-bottom: 5px;
    background-color: #9390FF;
    color: white;
    padding: 10px 10px;
    border: 2px solid #9390FF;
    border-radius: 4px;
    text-decoration: none;
    :hover{
        background-color: white;
        color: #9390FF;
        border: 2px solid #9390FF;
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