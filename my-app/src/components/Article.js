import React, {PureComponent} from 'react'
import DataParser from './DataParser'
import TextRedactor from './TextCutter'
import Image from './img/Hotair.jpg'
//import Image from './img/Satana.jpg'

class Article extends PureComponent{
	
	render(){
		const article=this.props.articl;		

		const onButtonClick=this.props.onButtonClick;		

		const title = <h4><section className='card-text'>{article.title}</section></h4>
		
		const body=<section className='card-text'>{TextRedactor(article.body)}</section>		
		
		return(
				<div className='row' >
					<div className='col-md-12'>
						<div className='row rowWraper'>
							<div className='col-md-4 colPadMin' >
								<div className='dataLableMin'>
									<DataParser data={article.created}/>
								</div>
								<img src={Image} className='img-fluid' alt="from static folder"/>
							</div>
							<div className='col-md-8 colPadMin' >
								<div className='row' >
									<div className='col-md-12'>
										{title}
									</div>
								</div>
								<div className='row' >
									<div className='col-md-12'>
										{body}
									</div>
								</div>
								<div className='row' >
									<div className='col-md-12'>
										<div className='colPadMinRight'>										
											<button onClick={onButtonClick} className='btn btn-link'>
												continue riding
											</button>
										</div>
									</div>
								</div>																		
							</div>
						</div>						
					</div>
				</div>

				
			)
	}

	
}

export default Article