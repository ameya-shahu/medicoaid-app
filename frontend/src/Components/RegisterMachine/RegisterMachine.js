import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { Divider, FormControl, FormGroup, TextField } from '@material-ui/core';
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
    const classes = useStyles();


    return (
        <Container>
            <Content>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Register Machine
                     </Typography>
                        <FormControl>
                            <FormGroup>
                            <TextField className={classes.mt} id="outlined-basic" label="Machine code" variant="outlined" />
                            <TextField className={classes.mt} id="outlined-basic" label="Authentication code" variant="outlined" />
                            <TextField name='name' className={classes.mt} id="outlined-basic" label="Identification name" variant="outlined" />
                            </FormGroup>
                        </FormControl>
                    </CardContent>
                    <Divider variant='middle' />
                    <CardActions className={classes.center}>
                        <Button size="medium" color='primary' variant='outlined'>Register</Button>
                    </CardActions>
                </Card>
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