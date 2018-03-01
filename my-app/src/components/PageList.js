import React, {PureComponent} from 'react';



export default class PageList extends PureComponent{

	render(){	
	let howManyPages=Math.floor(this.props.length/3);
	let lastArticles=this.props.length%3;	
	let rows = [];
	const onButtonClick=this.props.changePage;	
	var temp=0;
	for (let i = 1; i !== howManyPages+lastArticles; i++) {
	    
	    rows.push(<li key={i+1} className='page-item'><a className='page-link' href="#" onClick={onButtonClick.bind(this,temp)} >
												{i}
											</a></li>);
	    temp=temp+3;
	}



  return(		
	  	
	  	<nav aria-label="Page navigation example" >
	  		<ul className='pagination calendar_day_list'>
	  			<li className='page-item'><a className='page-link' href="#">&laquo;</a></li>
	  			{rows}
	  			<li className='page-item'><a className='page-link' href="#">&raquo;</a></li>
	  		</ul>
	  	</nav>
	  

  		
	)
  }
}





