import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 340,
        marginBottom: '20px',
        boxShadow: '0 2px 6px rgba(50, 50, 93, 0.9), 0 5px 3px rgba(0, 0, 0, 0.08)'
    },

});

export default function Patient({data}) {
    const classes = useStyles();
    const URL = '/patientdetails?id=' + data._id;
    return (
        <Container>
            <Card className={classes.root}>
                <CardContent>
                    <CardHeader
                        title={data.name}
                        subheader={data.gender}
                    />
                </CardContent>
                <CardActions>
                    <Link to={URL}>
                        <Button 
                            size="medium" 
                            variant='contained' 
                            color='primary'
                        >
                            More
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Container>

    );
}

const Container = styled.div`
    background: black;
    color: white;
`