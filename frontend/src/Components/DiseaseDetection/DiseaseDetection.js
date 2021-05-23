import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import useInterval from '@use-it/interval';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Button, Card, CardActions, CardContent, Divider, List, ListItem } from "@material-ui/core";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import queryString from 'query-string'

import ml5 from "ml5";
import ProgressBar from "./ProgressBar/ProgressBar";
import ProgressBarAdapter from "./ProgressBarAdapter/ProgressBarAdapter";


const useStyles = makeStyles(() => ({
    card: {
        display: 'grid',
        placeItems: 'center',
        marginBottom: '15px'
    },
    button: {
        fontWeight: 600,
    }
}));

// classifier for model is defined
let classifier;

function DiseaseDetection() {
    const classes = useStyles();
    const videoRef = useRef();
    const [start, setStart] = useState(false);
    const [result, setResult] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [prediction, setPrediction] = useState(null);

    const parsed = queryString.parse(window.location.search);
    const type = parsed.type;

    useEffect(() => {
        classifier = ml5.imageClassifier("/model/"+type + "/model.json", () => {
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: false })
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                    setLoaded(true);
                });
        });

    }, [type]);

    useInterval(() => {
        if (classifier && start) {
            classifier.classify(videoRef.current, (error, results) => {
                if (error) {
                    console.error(error);
                    return;
                }
                setResult(results);
                if (results.length > 0) {
                    setPrediction(results[0].label)
                }
                // console.log(results)
            });
        }
    }, 500);

    const toggle = () => {
        setStart(!start);
        setResult([]);
    }

    return (
        <Container>
            <Loader
                type="ThreeDots"
                color="#9390FF"
                height={40}
                width={40}
                timeout={5000} //3 secs
                visible={!loaded}
                style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
            />
            <Content>
                <Card className={classes.card}>
                    <CardContent>
                        <video
                            preload="none"
                            ref={videoRef}
                            style={{ transform: "scale(-1, 1)", border: '2px solid #9390FF' }}

                        />
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Link to='/'>
                            <Button
                                size='large'
                                variant='outlined'
                                color='primary'
                                className={classes.button}
                            >
                                Home
                            </Button>
                        </Link>
                        {loaded && (
                            <Button
                                onClick={() => toggle()}
                                size='large'
                                variant='outlined'
                                color='primary'
                                className={classes.button}
                            >
                                {start ? "Stop" : "Start"}
                            </Button>
                        )}
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <div style={{ border: '1px solid #9390FF', width: 220, marginBottom: '10px', borderRadius: '4px', padding: '5px 10px' }}>
                            {
                                start && !prediction ? (
                                    <div>
                                        <Loader
                                            type="ThreeDots"
                                            color="#9390FF"
                                            height={40}
                                            width={40}
                                            style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <ProgressBarAdapter result={result} />
                                    </div>
                                )
                            }
                        </div>
                        {/* {result.length > 0 && (
                            <div className="results">
                                <ProgressBar data={result[0]} />
                            </div>
                        )} */}
                    </CardContent>
                </Card>
            </Content>
        </Container>
    );
}

export default DiseaseDetection;

const Container = styled.div`
    padding-top: 10px;
    height: auto;
    justify-content: center;
`
const Content = styled.div`
    display: grid;
    place-items: center;
`