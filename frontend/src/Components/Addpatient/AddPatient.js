import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Form, Col } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { registerPatientAction } from '../../redux/actions/patients/registerPatientAction';
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {makeStyles} from "@material-ui/core/styles";



function ThankYou() {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '30ch',
            },
        },
        formField:{
            width: '30ch',
        }
    }));

    const classes = useStyles();

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
                <Card className={classes.root}>
                    <Form onSubmit={ handleSubmit }>
                        <TextField
                            label="Email"
                            autoComplete='off'
                            className={classes.formField}
                            value={state.email}
                            placeholder='abc@xyz.com'
                            type='email'
                            name='email'
                            onChange={handleChange}
                            required
                        />

                        <TextField
                            label="Name"
                            autoComplete='off'
                            className={classes.formField}
                            value={state.name}
                            placeholder='Enter Name'
                            type='text'
                            name='name'
                            onChange={handleChange}
                            required
                        />

                        <TextField
                            label = "Phone Number"
                            autoComplete="off"
                            name='phoneNo'
                            value={state.phoneNo}
                            className={classes.formField}
                            type="text"
                            placeholder="XXXXXXXXXXXX"
                            onChange={handleChange}
                            required
                        />

                        <FormControl className= 'mt-4'>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender"  value={state.gender} onChange={handleChange}>
                                <FormControlLabel value="female" control={<Radio color = "primary" />} label="Female" />
                                <FormControlLabel value="male" control={<Radio color = "primary" />} label="Male" />
                                <FormControlLabel value="other" control={<Radio color = "primary" />} label="Other" />
                            </RadioGroup>
                        </FormControl>

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


                        <Wrapper>
                            <Link to='/'>
                                <SubmitButton className='mr-3' type='submit'>Home</SubmitButton>
                            </Link>
                            <SubmitButton type='submit'>Submit</SubmitButton>
                        </Wrapper>
                    </Form>
                </Card>
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

const Wrapper = styled.div`
text-align: center;
`

const SubmitButton = styled.button`
    margin-top: 25px;
    width: 100px;
    background-color: #9390FF;
    color: white;
    font-weight: 700;
    padding: 10px;
    border: 2px solid #9390FF;
    border-radius: 4px;
    :hover{
        background-color: white;
        color: #9390FF;
        border: 2px solid #9390FF;
    }
`
