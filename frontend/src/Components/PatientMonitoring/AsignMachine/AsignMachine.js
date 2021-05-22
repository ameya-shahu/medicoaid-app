import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { listMachineAction } from '../../../redux/actions/sensorMachine/listMachineAction';
import { useDispatch, useSelector } from 'react-redux';
import { assignMachineAction } from '../../../redux/actions/sensorMachine/assignMachineAction';


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

function AsignMachine({ patientId }) {
    const classes = useStyles();
    var machineList = [];

    const [machine, setMachine] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [isDisable, setIsDisabled] = React.useState(true);

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userLogin)
    // console.table(userInfo)

    useEffect(() => {
        dispatch(listMachineAction(userInfo.id));
    }, [dispatch, userInfo])

    const { sensorMachine, MachineListLoading } = useSelector(state => state.sensorMachine)
    // console.log(sensorMachine, MachineListLoading)

    if (sensorMachine) {
        machineList = sensorMachine
        // console.log(machineList[0].id)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let machineId = machine;

        dispatch(assignMachineAction(patientId, machineId));
        window.location.reload();
    }

    const handleChange = (event) => {
        let value = event.target.value;
        setMachine(value);

        if (value != null && value != 'None') {
            setIsDisabled(false);
        } else if ( event.target.value === "None") {
            setIsDisabled(true);
        }
        // console.log(event.target)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <form onSubmit={handleSubmit}>
            <h4 className='mt-3'>No machine is asign to this patient.</h4>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">machines</InputLabel>

                {
                    MachineListLoading && !sensorMachine ? (
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            name='machineInput'
                            value={machine ? machine : ''}
                            onChange={handleChange}
                        >
                            <MenuItem>
                                loading
                                </MenuItem>
                        </Select>

                    ) : (
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            name='machineInput'
                            value={machine ? machine : ''}
                            onChange={handleChange}
                        >

                            <MenuItem value='None'>
                                <em>None</em>
                            </MenuItem>
                            {
                                machineList.map((data, index) => {
                                    // console.log(data.id)
                                    return (

                                        <MenuItem value={data.id} key={index}>{data.identifyName}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    )
                }

                <Button className='mt-3' type='submit' variant='outlined' color='primary' disabled={isDisable}>Asign now</Button>
            </FormControl>
        </form >
    )
}

export default AsignMachine
