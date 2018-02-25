import React, {PureComponent} from 'react'
//import Comments from './Comments'
import Image from './img/Hotair.jpg'
import DataParser from './DataParser'
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

		/*const coments=isOpen && this.state.openComentArticleId && <section className='card-text'>						
															<Comments comments={article.comments}/>
														</section>*/

		
		return(
				<div className='row top-buffer' >
					<div className='col-md-12'>
						<div className='row'>
							<div className='col-md-12'>
								<div  style =  {{"width":  "10%",   "height":  "40%",  "display":  "block",'position':'absolute'}}>
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
							<div className='col-md-12'>
								<div className='row form-group' >
									<div className='col-md-8'>
										<div className="input-group">										  
										  <input type="text" className="form-control" placeholder="Name" aria-describedby="basic-addon1"/>
										</div>
									</div>
									<div className='col-md-4'>
										<div className="input-group">										  
										  <input type="text" className="form-control" placeholder="e-mail" aria-describedby="basic-addon1"/>
										</div>
									</div>
								</div>
								<div className='row form-group' >
									<div className='col-md-12'>
										<textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
									</div>									
								</div>
								<div className='row form-group' >
								
									<div className='col-md-7 mx-auto'>
										<button  className='btn btn-secondary btn-lg btn-block'>
											Submit Comment
										</button>
									</div>									
								</div>
							</div>
						</div>

						<div className='row' >
							<div className='col-md-12'>
								{buttonOpenComent}
							</div>
						</div>
						{/*<div className='row' >
							<div className='col-md-12'>
								{coments}
							</div>
						</div>	
							*/}


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