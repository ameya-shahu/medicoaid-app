import { Divider } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 220,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    },
}));

function Home({ userInfo }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [model, setModel] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setModel(value);
    };

    const handleOnClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container>
            <Link to='/addpatient'>
                <AddPatientButton>+ Add more Patients</AddPatientButton>
            </Link>


            <DiseaseDetection onClick={handleOnClick}>Disease Detection</DiseaseDetection>

            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle style={{ color: '#9390FF'}}>Fill the form</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel style={{ color: '#9390FF'}} htmlFor="demo-dialog-native">Disease to be Detected</InputLabel>
                            <Select
                                style={{ color: '#9390FF'}}
                                native
                                value={model}
                                onChange={handleChange}
                                input={<Input id="demo-dialog-native" />}
                            >
                                <option aria-label="None" value="" />
                                <option value='Diabetes'>Diabetes</option>
                                <option value='Lung_Cancer'>Lung Cancer</option>
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant='outlined'>
                        Cancel
                    </Button>
                    <Link to={'/diseaseDetection?type=' + model}>
                        <Button onClick={handleClose} color="primary" variant='outlined'>
                            Ok
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>

            <Link to='/patientslist'>
                <PatientDetection>Patients Monitoring</PatientDetection>
            </Link>

            <Link to='/registerMachine'>
                <RegisterMachine>Register your Machine</RegisterMachine>
            </Link>

            <Divider variant='middle' width={300} className='mt-5' />
            <FooterContainer className='mt-3'>
                Copyright @MedicoAId 2021
            </FooterContainer>

        </Container>
    )
}

export default Home

const Container = styled.div`
    display: grid;
    place-items: center;
    flex-direction: coloumn;
    padding: 10px;

`
const AddPatientButton = styled.button`
    width: 300px;
    padding: 6px;
    margin-top: 15px;
    font-size: 20px;
    font-weight: 600;
    background-color: #9390FF;
    color: white;
    border: 2px solid #9390FF;
    border-radius: 4px;
    :hover{
        background-color: white;
        color: #9390FF;
        border: 2px solid #9390FF;
    }
`
const DiseaseDetection = styled.button`
    width: 300px;
    height: 160px;
    margin-top: 15px;
    font-size: 20px;
    font-weight: 600;
    color: #9390FF;
    background-color: white;
    border: 2px solid #9390FF;
    border-radius: 16px;
    :hover{
        background-color: #9390FF;;
        color: white;
        border: 2px solid #9390FF;
    }
`
const PatientDetection = styled.button`
    width: 300px;
    height: 160px;
    margin-top: 15px;
    font-size: 20px;
    font-weight: 600;
    color: #9390FF;
    background-color: white;
    border: 2px solid #9390FF;
    border-radius: 16px;
    :hover{
        background-color: #9390FF;;
        color: white;
        border: 2px solid #9390FF;
    }
`

const RegisterMachine = styled.button`
    width: 300px;
    padding: 6px;
    margin-top: 15px;
    font-size: 20px;
    font-weight: 600;
    background-color: #9390FF;
    color: white;
    border: 2px solid #9390FF;
    border-radius: 4px;
    :hover{
        background-color: white;
        color: #9390FF;
        border: 2px solid #9390FF;
    }
`

const FooterContainer = styled.div`
    color: #9390FF
`