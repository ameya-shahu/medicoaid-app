import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Select } from '@material-ui/core';

import styled from 'styled-components'
import queryString from 'query-string'
import { Spinner } from 'react-bootstrap';

import PatientChart from '../PatientChart/PatientChart';
import AsignMachine from '../AsignMachine/AsignMachine';
import firebase from '../../Firebase/Firebase';

import {freeMachineAction} from "../../../redux/actions/sensorMachine/freeMachineAction";
import { patientDetailsAction } from '../../../redux/actions/patients/patientDetailsAction';
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
}));

function PatientDetails() {

    const classes = useStyles();

    // const URL = '/patientdetails?id=' + data._id;


    //parsing id from website url
    const parsed = queryString.parse(window.location.search);
    const id = parsed.id;
    const machineCode = parsed.m;

    //dispatching patient details action
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (patientId, sensorId)=>{
        dispatch(freeMachineAction(patientId, sensorId));
        history.push("/patientdetails?id="+patientId);
        window.location.reload();
    }

    const { details, loading } = useSelector(state => state.patientDetail);
    // const { data } = useSelector(state => state);


    useEffect(() => {
        dispatch(patientDetailsAction(id));
        if (machineCode != 'emp') {
            //updating data from firebase and
            //dispatching firebase action for
            //pulserate and spo2
            firebase.database().ref( machineCode + "/SPO2").limitToLast(6).on("value", datasnap => {
                let newData = [];
                datasnap.forEach(snap => {
                    newData.push(parseInt(snap.val()));
                });

                dispatch(firebasePatientAction(newData, "s"));
                //   console.log(newData)
            });
            firebase.database().ref( machineCode + "/pulseRate").limitToLast(6).on("value", datasnap => {
                let newData = [];
                datasnap.forEach(snap => {
                    newData.push(parseInt(snap.val()));
                });

                dispatch(firebasePatientAction(newData, "p"));
                //   console.log(newData)
            });

        }
        // dispatch(listMachineAction(details.id))
    }, [dispatch, id, machineCode]);


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
                                    <ListItemText primary={details.name.toString()} > </ListItemText>
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
                                {/* <Divider variant='middle' component="li" /> */}
                                {/* <ListItem>
                                    <ListItemAvatar>
                                        <h5>Age:&nbsp; </h5>
                                    </ListItemAvatar>
                                    <ListItemText primary={details.age.toString()} > </ListItemText>
                                </ListItem>
                                <Divider variant='middle' component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <h5>Date of Birth:&nbsp; </h5>
                                    </ListItemAvatar>
                                    <ListItemText primary={details.phoneNo.toString()} > </ListItemText>
                                </ListItem> */}
                            </List>
                            <Divider />

                            {/*  calling chart js component */}
                            {
                                !loading && details.sensorMachine ? (
                                    <div>
                                        <PatientChart />
                                        <Button className='mt-3'
                                                type='submit'
                                                variant='outlined'
                                                color='primary'
                                                onClick={()=> handleClick(details.id, details.sensorMachine.machineId)}
                                        >Free Machine</Button>
                                    </div>


                                ) : (
                                    <AsignMachine patientId={details.id} />
                                )
                            }

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
