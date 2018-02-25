import React, {PureComponent} from 'react'
import Comments from './Comments'
import Image from './img/Hotair.jpg'
import DataParser from './DataParser'
import Form from './FormForeComment'
//import Image from './img/Satana.jpg'

class Article extends PureComponent{
	constructor(props){
		console.log('----','constructor')
		super(props)
		this.state={
			//isOpen:props.defaultOpen,
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

		/*const authorName=<section className='card-text'>{article.authorName}</section>*/

		const buttonOpenComent=isOpen && article.comments.length>0 && <section className='card-text'>
											<button onClick={this.openComments} className='btn btn-link float-right'>
												{this.state.openComentArticleId? 'close coments' : 'open coments'}
											</button>
										</section>

		const coments=isOpen && this.state.openComentArticleId && <section className='card-text'>						
															<Comments comments={article.comments}/>
														</section>

		
		return(
				<div className='row top-buffer' >
					<div className='col-md-12'>
						<div className='row'>
							<div className='col-md-12'>
								<div  style =  {{"width":  "8%",   "height":  "40%",  "display":  "block",'position':'absolute'}}>
									<DataParser data={article.created}/>
								</div>
								<img src={Image} className='img-fluid' />
							</div>
						</div>

						<div className='row' >
							<div className='col-md-6'>
								{title}
							</div>
							<div className=' mt-auto p-2 ' style = {{"paddingRight": "0"}}>										
								<button onClick={onButtonClick} className='btn btn-link'>
									back to articles
								</button>
							</div>	
						</div>

						<div className='row' >
							<div className='col-md-12'>
								{body}
							</div>
						</div>
						<div className='row' >
							<Form />							
						</div>

						<div className='row' >
							<div className='col-md-12'>
								{buttonOpenComent}
							</div>
						</div>
						<div className='row' >
							<div className='col-md-12'>
								{coments}
							</div>
						</div>	
							


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