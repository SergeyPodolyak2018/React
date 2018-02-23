import React, {PureComponent} from 'react'
import Comments from './Comments'

class Article extends PureComponent{
	constructor(props){
		console.log('----','constructor')
		super(props)
		this.state={
			//isOpen:props.defaultOpen,
			counter:0,
			openComentArticleId:false

		}
		//this.handleClick=handleClick.bind(this);
	}
	/*shouldComponentUpdate(nextProps,nextState){
		console.log('----','shouldComponentUpdate')
		return (this.state.isOpen !== nextState.isOpen || this.state.counter !== nextState.counter)
	}
*/
	componentWillMount(){
		console.log('----','componentWillMount')
	}

	
/*
	componentWillReceiveProps(nextProps){
		console.log('----','WillReceiveProps')
		if (nextProps.defaultOpen !== this.props.defaultOpen){
			this.setState({
				isOpen:nextProps.defaultOpen
			})
		}
	}
*/
	componentWillUpdate(){
		console.log('----','WillUpdate')
	}

	

	render(){
		console.log('----','render');

		const article=this.props.articl;

		const isOpen=this.props.isOpen;

		const onButtonClick=this.props.onButtonClick;

		console.log(' isOpen',isOpen);

		
		const body=<section className='card-text'>{this.htmlIntegrator(article.body)}</section>

		const authorName=<section className='card-text'>{article.authorName}</section>

		const buttonOpenComent=isOpen && article.comments.length>0 && <section className='card-text'>
											<button onClick={this.openComments} className='btn btn-link float-right'>
												{this.state.openComentArticleId? 'close coments' : 'open coments'}
											</button>
										</section>

		const coments=isOpen && this.state.openComentArticleId && <section className='card-text'>						
															<Comments comments={article.comments}/>
														</section>

		
		return(
				<div className='row' >
					<div className='col-md-12'>
						<div className='row' >
							<div className='col-md-6'>
								<h2>Picture</h2>
							</div>
							<div className='col-md-6'>
								{body}
							</div>
						</div>
						<div className='row' >
							<div className='col-md-6'>
								<h6 className='card-subtitle text-muted'>
									{<p>creation date: {article.created}</p>}									
								</h6>
							</div>
							<div className='col-md-6'>
								<button onClick={onButtonClick} className='btn btn-link float-right'>
									{isOpen? 'back to aticles' : 'continue riding'}
								</button>
							</div>
						</div>
						<div className='row' >
							<div className='col-md-6'>
								<h6 className='card-subtitle text-muted'>
																	
								</h6>
							</div>
							<div className='col-md-6'>
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

				// <div className='row' >
				// 	<div className='col-md-12'>
				// 		<div className='row' >
				// 			<div className='col-md-12'>
				// 				<h2 onClick={this.counterClick}>
				// 					{article.title} 
				// 					<button onClick={onButtonClick} className='btn btn-link float-right'>
				// 						{isOpen? 'Close' : 'Open'}
				// 					</button>
				// 				</h2>
				// 			</div>
				// 		</div>	
					
				// 		<div className='row'>
				// 			<div className='col-md-12'>
				// 				<h5 className='card-subtitle text-muted'>
				// 					{<p>Author: {article.authorName}</p>}
									
				// 					{/*<p>creation date: {(new Date(article.date)).toDateString()}</p>*/}
				// 				</h5>
				// 				<h6 className='card-subtitle text-muted'>
				// 					{<p>creation date: {article.created}</p>}

				// 					{/*<p>creation date: {(new Date(article.date)).toDateString()}</p>*/}
				// 				</h6>
				// 				{body}
				// 				{buttonOpenComent}						
				// 				{coments}
				// 			</div>
				// 		</div>
				// 	</div>
				// </div>
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