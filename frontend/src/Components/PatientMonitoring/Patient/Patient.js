import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';

import styled from 'styled-components';

const useStyles = makeStyles({
    root: {
        minWidth: 340,
        marginBottom: '20px',
        boxShadow: '0 2px 6px rgba(50, 50, 93, 0.9), 0 5px 3px rgba(0, 0, 0, 0.08)'
    },

});

export default function Patient() {
    const classes = useStyles();
    return (
        <Container>
            <Card className={classes.root}>
                <CardContent>
                    <CardHeader
                        title="Ameya Shahu"
                        subheader="September 14, 2016"
                    />
                </CardContent>
                <CardActions>
                    <Button size="small" variant='contained' color='primary'>More</Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <CardHeader
                        title="Ameya Shahu"
                        subheader="September 14, 2016"
                    />
                </CardContent>
                <CardActions>
                    <Button size="small" variant='contained' color='primary'>More</Button>
                </CardActions>
            </Card>
        </Container>

    );
}

const Container = styled.div``