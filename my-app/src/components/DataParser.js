import React from 'react';



const DataParser = (props) => {
	console.log(props.data)
	const dataArrey=props.data.split(" ")[0].split("/")
	let day=parseInt(dataArrey[0], 10)
	let month=parseInt(dataArrey[1], 10)
	let year=parseInt(dataArrey[2], 10)
	let date = new Date(year, month, day) // 3 января 2014
    let dayString=date.toLocaleString('en', {weekday: 'long'})
    let monthString=date.toLocaleString('en', {month: 'long'})
	console.log(dayString)		
	console.log(monthString)	

  return(		

	  	<div style = {{"width": "100%", "height": "100%", "display": "block", "float": "left", "background":"#acac90","fontSize": "100%"}}>
	  		<div style = {{"width": "70%", "height": "20%", "float": "left","borderBottom": "solid beige","marginLeft": "15%","fontSize": "1.5em"}}>{day}</div>
	  		<div style = {{"width": "40%", "height": "80%", "float": "left","marginLeft": "10%","marginTop": "10%"}}><p className='date-rotate'>{monthString},{year}</p></div>
		  			
	  		<div style = {{"width": "40%", "height": "80%", "float": "left","marginTop": "10%"}}><p className='date-rotate'>{dayString}</p></div>
			
	  	</div>
		
	);
}





export default DataParser;