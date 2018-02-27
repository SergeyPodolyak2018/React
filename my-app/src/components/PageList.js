import React, {PureComponent} from 'react';



export default class PageList extends PureComponent{

	render(){	
	let howManyPages=Math.floor(this.props.length/3);
	let lastArticles=this.props.length%3;	
	let rows = [];
	const onButtonClick=this.props.changePage;	
	var temp=0;
	for (let i = 1; i !== howManyPages+lastArticles; i++) {
	    
	    rows.push(<li key={i+1}><button onClick={onButtonClick.bind(this,temp)} className='btn btn-link'>
												{i}
											</button></li>);
	    temp=temp+3;
	}



  return(		
	  	<div>
	  		<ul className='calendar_day_list'>
	  			{rows}
	  		</ul>
	  	</div>

  		
	)
  }
}





