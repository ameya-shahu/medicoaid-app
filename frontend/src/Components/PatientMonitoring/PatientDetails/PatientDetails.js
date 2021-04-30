import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import queryString  from 'query-string'
import {patientDetailsAction} from '../../../redux/actions/patients/patientDetailsAction';
import { useDispatch, useSelector } from 'react-redux';
import {Spinner} from 'react-bootstrap';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    //   backgroundColor: theme.palette.background.paper,
    },
  }));

function PatientDetails() { 
   
    const classes = useStyles();
    const parsed = queryString.parse(window.location.search);
    const id = parsed.id;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(patientDetailsAction(id));
    }, [dispatch]);
    const {details, loading}  = useSelector(state => state.patientDetail);
   
    return (
        <Container>
            {
                loading ? (
                    <div><Spinner animation="border" variant="primary" /></div>
                ) : 
                (
                    <div>
                        <h1>Patient Details</h1>
                        <Divider  />
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
                        <Divider  />
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
