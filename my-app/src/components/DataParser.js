import React from 'react';



const DataParser = (props) => {
	
	const dataArrey=props.data.split(" ")[0].split("/");
	let day=parseInt(dataArrey[0], 10);
	let month=parseInt(dataArrey[1], 10);
	let year=parseInt(dataArrey[2], 10);
	let date = new Date(year, month, day);
    let dayString=date.toLocaleString('en', {weekday: 'long'});
    let monthString=date.toLocaleString('en', {month: 'long'});
	

  return(		

	  	<div className='dataWraper'>
	  		<div className='dataWraperDateNumber'>{day}</div>
	  		<div className='dataWraperMonthYear'>
	  			<p className='date-rotate'>{monthString},{year}</p>
	  		</div>		  			
	  		<div className='dataWraperWeekDay'><p className='date-rotate'>{dayString}</p></div>			
	  	</div>
		
	);
}





export default DataParser;