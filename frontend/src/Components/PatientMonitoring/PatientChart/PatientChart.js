import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';


const MultiAxisLine = () => {
  var [updatespo2, setUpdatespo2] = useState([]);
  var [updatepulse, setUpdatepulse] = useState([]);
  const {details, loading} = useSelector(state => state.firebase)
  useEffect(() => {
    
    console.log(details);
    if( details && details.type === 's'){
      setUpdatespo2 ( details.data);
    }
    else if (details && details.type === 'p') {
      setUpdatepulse(details.data);
    }  
    
  }, [setUpdatespo2, setUpdatepulse, details])
  
  const chartData1 = {
    labels: ['0', '1', '2', '2', '4', '5'],
    datasets: [
      {
        label: 'Pulse rate',
        data: updatepulse,
        fill: true,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
    ],
  };
  const chartData2 = {
    labels: ['0', '1', '2', '2', '4', '5'],
    datasets: [
      {
        label: 'SpO2',
        data: updatespo2,
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
    ],
  };
  
  const options = {
    responsive: true,
    legend: {
      display: false
    }
  }
  // console.log(data1);
  return (
    <React.Fragment>
      <div className='header mt-4'>
        <h1 className='title'>Biological parameters of patient</h1>
      </div>
      <Line data={chartData1} options={options} />
      <Line data={chartData2} options={options} />

    </React.Fragment>
  )

};

export default MultiAxisLine;



// setInterval(function () {
  
  //   var currentState = spo2;
  //   if (currentState.length < 6){
  //     var SPO2 = [...currentState, 19];
  //     setSpo2(SPO2);
  //   } else{
  //     currentState.shift();
  //     currentState.push(15);
  //     setSpo2(currentState);
      
  //   }
  //   console.log(currentState);
  // }, 5000);

  // firebase.database().ref("sensor/SpO2").on("value", datasnap => {
  //   datasnap.forEach(snap => {
  //     spo2.push(parseInt(snap.val()));
  //   });

  //   console.log(spo2)
  // });