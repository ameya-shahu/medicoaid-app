import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import queryString from 'query-string'
import { patientDetailsAction } from '../../../redux/actions/patients/patientDetailsAction';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Spinner } from 'react-bootstrap';
import { Button, Divider, FormControl, InputLabel, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Select } from '@material-ui/core';
import PatientChart from '../PatientChart/PatientChart';

import firebase from '../../Firebase/Firebase';
import { firebasePatientAction } from '../../../redux/actions/patients/firebasePatientAction';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        //   backgroundColor: theme.palette.background.paper,
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

function PatientDetails() {

    const classes = useStyles();

    const [machine, setMachine] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [isDisable, setIsDisabled] = React.useState(true);

    //parsing id from website url
    const parsed = queryString.parse(window.location.search);
    const id = parsed.id;

    //dispatching patient details action
    const dispatch = useDispatch();

    const { details, loading } = useSelector(state => state.patientDetail);

    useEffect(() => {
        dispatch(patientDetailsAction(id));

        //updating data from firebase and
        //dispatching firebase action for
        //pulserate and spo2
        firebase.database().ref("sensor/SpO2").limitToLast(6).on("value", datasnap => {
            let newData = [];
            datasnap.forEach(snap => {
                newData.push(parseInt(snap.val()));
            });

            dispatch(firebasePatientAction(newData, "s"));
            //   console.log(newData)
        });
        firebase.database().ref("sensor/heartRate").limitToLast(6).on("value", datasnap => {
            let newData = [];
            datasnap.forEach(snap => {
                newData.push(parseInt(snap.val()));
            });

            dispatch(firebasePatientAction(newData, "p"));
            //   console.log(newData)
        });

    }, [dispatch, id]);



    const handleChange = (event) => {
        setMachine(event.target.value);
        if ( event.target.value != null) {
            setIsDisabled(false);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <Container>
            {
                loading ? (
                    <div><Spinner animation="border" variant="primary" /></div>
                ) :
                    (
                        <div>
                            <h1>Patient Details</h1>
                            <Divider />
                            <List className={classes.root}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <h5>Name:&nbsp; </h5>
                                    </ListItemAvatar>
                                    <ListItemText primary={details.name} > </ListItemText>
                                </ListItem>
                                <Divider variant='middle' component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <h5>Email:&nbsp; </h5>
                                    </ListItemAvatar>
                                    <ListItemText primary={details.email.toString()} > </ListItemText>
                                </ListItem>
                                <Divider variant='middle' component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <h5>Phone number:&nbsp; </h5>
                                    </ListItemAvatar>
                                    <ListItemText primary={details.phoneNo.toString()} > </ListItemText>
                                </ListItem>
                                <Divider variant='middle' component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <h5>Gender:&nbsp; </h5>
                                    </ListItemAvatar>
                                    <ListItemText primary={details.gender} > </ListItemText>
                                </ListItem>
                                <Divider variant='middle' component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <h5>Age:&nbsp; </h5>
                                    </ListItemAvatar>
                                    {/* <ListItemText primary={details.age.toString()} > </ListItemText> */}
                                </ListItem>
                                <Divider variant='middle' component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <h5>Date of Birth:&nbsp; </h5>
                                    </ListItemAvatar>
                                    {/* <ListItemText primary={details.phoneNo.toString()} > </ListItemText> */}
                                </ListItem>
                            </List>
                            <Divider />

                            {/*  calling chart js component */}
                            {
                                !loading && details.sensorMachine ? (
                                    <PatientChart />
                                ) : (
                                    <div></div>
                                )
                            }

                            <Form>
                                <h4 className='mt-3'>No machine is asign to this patient.</h4>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-controlled-open-select-label">machines</InputLabel>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        value={machine}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>MAX30100</MenuItem>
                                    </Select>
                                    <Button className='mt-3' type='submit' variant='outlined' color='primary' disabled={isDisable}>Asign now</Button>
                                </FormControl>
                            </Form>
                        </div>
                    )
            }
        </Container>
    )
}

const Container = styled.div`

    flex-direction: coloumn;
    padding: 10px;
`
export default PatientDetails
