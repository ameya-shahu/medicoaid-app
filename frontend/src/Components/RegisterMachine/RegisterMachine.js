
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { Divider, FormControl, FormGroup, TextField } from '@material-ui/core';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { initiateMachineAction } from '../../redux/actions/sensorMachine/initiateMachineAction';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
        fontWeight: 700
    },
    pos: {
        marginBottom: 12,
    },
    mt: {
        marginTop: '15px'
    },
    center: {
        justifyContent: 'center',
        marginTop: '15px',
    }
});

export default function RegisterMachine() {
    const [value, setValue] = useState({
        machineCode: '',
        authCode: '',
        identifyName: ''
    })

    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value)
        dispatch(initiateMachineAction(value, 's'));

    }

    const handleChange = (e) => {
        e.preventDefault();
        const values = e.target.value;
        setValue({
            ...value,
            [e.target.name]: values,
        });
    }

    return (
        <Container>
            <Content>
                <Form onSubmit={handleSubmit}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Register Machine
                            </Typography>
                            <FormControl>
                                <FormGroup>
                                    <TextField
                                        className={classes.mt}
                                        value={value.machineCode}
                                        name='machineCode'
                                        id="outlined-basic"
                                        label="Machine code"
                                        variant="outlined"
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        className={classes.mt}
                                        value={value.authCode}
                                        name='authCode'
                                        id="outlined-basic"
                                        label="Authentication code"
                                        variant="outlined"
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        className={classes.mt}
                                        value={value.identifyName}
                                        name='identifyName'
                                        id="outlined-basic"
                                        label="Name your Machine"
                                        variant="outlined"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </FormControl>
                        </CardContent>
                        <Divider variant='middle' />
                        <CardActions className={classes.center}>
                            {/* Go back on home page button */}
                            <Link to='/'>
                                <Button size="medium" type='submit' color='primary' variant='outlined'>Home</Button>
                            </Link>
                            {/* Register your machine button */}
                            <Button size="medium" type='submit' color='primary' variant='outlined'>Register</Button>
                        </CardActions>
                    </Card>
                </Form>
            </Content>

        </Container>

    );
}

const Container = styled.div`
    padding-top: 40px;
    height: 100vh;
    background-color: #9390FF;
    justify-content: center;
`
const Content = styled.div`
    color: white;
    display: grid;
    place-items: center;
`