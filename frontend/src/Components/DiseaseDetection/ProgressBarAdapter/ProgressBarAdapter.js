import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'

function hashCode() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function ProgressBarAdapter(props) {
    const progressBars = props.result.map((item) => {
       let color = hashCode(item.label);
       return(  <ProgressBar color={color} key={item.label} data={item} />)
    })
    return (
        <div>
            {progressBars}
        </div>
    )
}

export default ProgressBarAdapter
