import React, {PureComponent} from 'react'
import Comments from './Comments'
//import Image from './img/Hotair.jpg'
import Image from './img/Satana.jpg'
import DataParser from './DataParser'


class Article extends PureComponent{
	constructor(props){
		console.log('----','constructor')
		super(props)
		this.state={
			
			counter:0,
			openComentArticleId:false

		}
		
	}
	
	componentWillMount(){
		console.log('----','componentWillMount')
	}

	

	componentWillUpdate(){
		console.log('----','WillUpdate')
	}

	

	render(){
		console.log('----','render');

		const article=this.props.articl;


		const isOpen=this.props.isOpen;

		const onButtonClick=this.props.onButtonClick;

		console.log(' isOpen',isOpen);

		const title = <h4><section className='card-text'>{article.title}</section></h4>
		const body=<section className='card-text'>{this.htmlIntegrator(article.body)}</section>

		/*const authorName=<section className='card-text'>{article.authorName}</section>

		const buttonOpenComent=isOpen && article.comments.length>0 && <section className='card-text'>
											<button onClick={this.openComments} className='btn btn-link float-right'>
												{this.state.openComentArticleId? 'close coments' : 'open coments'}
											</button>
										</section>

		const coments=isOpen && this.state.openComentArticleId && <section className='card-text'>						
															<Comments comments={article.comments}/>
														</section>
*/
		
		return(
				<div className='row' >
					<div className='col-md-12'>
						<div className='row' style = {{"borderBottom": "solid #acac90", "borderWidth": "0px 0px 1px 0px" }}>
							<div className='col-md-4' style = {{"paddingLeft": "0"}}>
								<div  style =  {{"width":  "15%",   "height":  "60%",  "display":  "block",'position':'absolute',"fontSize": "60%"}}>
									<DataParser data={article.created}/>
								</div>
								<img src={Image} className='img-fluid'/>
							</div>
							<div className='col-md-8 ' tyle = {{"paddingLeft": "0"}}>
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
										
									</div>
								</div>
								<div className='col align-self-bottom' >
									<div className=' mt-auto p-2 ' tyle = {{"paddingRight": "0"}}>										
											<button onClick={onButtonClick} className='btn btn-link'>
												continue riding
											</button>
									</div>										
								</div>										
							</div>
						</div>
						{/*<div className='row' >
							<div className='col-md-6'>
								<h6 className='card-text'>
									{<p>creation date: {article.created}</p>}									
								</h6>
							</div>
							<div className='col-md-6'>
								<button onClick={onButtonClick} className='btn btn-link float-right'>
									{isOpen? 'back to aticles' : 'continue riding'}
								</button>
								
							</div>
						</div>*/}
						{/*<div className='row' >
							<div className='col-md-6'>
								<h6 className='card-subtitle text-muted'>
																	
								</h6>
							</div>
							<div className='col-md-6'>
								{buttonOpenComent}
							</div>
						</div>*/}
						{/*<div className='row' >
							<div className='col-md-12'>
								{coments}
							</div>						
						</div>*/}
					</div>
				</div>

				
			)
	}




	componentDidUpdate(){
		console.log('----','DidUpdate')
	}
	componentDidMount(){
		console.log('----','mountingFinished')
	}

	handleClick=()=>{
		console.log(this)
		/*this.setState({
			isOpen:!this.state.isOpen
		})*/
		console.log(this)
		
	}

	counterClick=()=>{
		console.log('counterClick')
		this.setState({
			counter: this.state.counter+1
		})
		
	}

	openComments=()=>{
		console.log('openComments')
		this.setState({
			openComentArticleId: this.props.isOpen && !this.state.openComentArticleId,

		})
		
	}

	htmlIntegrator(text){

		return (
	      <div dangerouslySetInnerHTML={{ __html: text }} />
	    );
	}



}





export default Article