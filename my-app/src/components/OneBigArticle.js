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
			
			counter:0,
			openComentArticleId:false,
			redact:false,
			bodyOfarticle:props.articl.body,

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

		const redactOpen=this.state.redact;
		const isOpen=this.props.isOpen;

		const refresh=this.props.refresh;

		const onButtonClick=this.props.onButtonClick;

		console.log(' isOpen',isOpen);

		const title = <h4><section className='card-text'>{article.title}</section></h4>
		const body=<section className='card-text'>{this.htmlIntegrator(this.state.bodyOfarticle)}</section>

		const redactor=redactOpen &&<div className='col-md-12'>
							<textarea className="form-control" rows="3" value={this.state.bodyOfarticle} onChange={this.textChange}></textarea>
							<button  className='btn' onClick={this.sendForm}>
									save
							</button>
						</div>
						

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

						<div className='row ' >
							<div className='col-md-12'>
								{body}
								{redactor}
							</div>
							<div className='col-md-2  '>
								<button  className='btn' onClick={this.redact}>
									{redactOpen? 'back':'to redact'}
								</button>
							</div>
						</div>
						<div className='row top-buffer' >
							<Form articl={article} refreshFunc={this.props.refresh.bind(this,article._id)}/>							
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

	redact=()=>{
		console.log(this)
		this.setState({
			redact:!this.state.redact,
			bodyOfarticle:this.props.articl.body
		})
		
		console.log(this)
		
	}

	textChange=(event)=>{		
		this.setState({bodyOfarticle: event.target.value})		
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




//Добавить коментарий	
	sendForm=()=>{
		
		let tempJson={body:''};
		tempJson.body=this.state.bodyOfarticle;
		console.log(tempJson);
		
		let sendData=JSON.stringify(tempJson);

	//Добавить коментарий	
		/*let huy=JSON.stringify({ articleId: '59ca071425e591001fc56480',
								 text: '>:-)',
								 author: '55f6c168b8229d2744d7172b',
								 authorName: 'SP' })*/

//Добавить статью
		/*let huy1=JSON.stringify({ 
								 title: 'test article SP',
								 status: 'active',
								 metaTitle: 'title',
								 metaDescription: 'descsription',
								 metaKeywords: 'keywords',
								 body: '<p>text text121121212121221212121 text<br /></p>',
								})

		let huy2=JSON.stringify({ 
								 body: '<p>Change this dsfvdsfvdsfvdsfvd dfvasasasasvvvvvvvvvvvvvv vvvvvvvvvvvvvvvvv  vvvvvvvvvvvv<br /></p>',
								})*/
		console.log(sendData)


		
		let url1='http://api.blog.testing.singree.com/' //добавить статью
		let url='http://api.blog.testing.singree.com/'+this.props.articl._id; //Изменить тело вместо POST вставить PUT


		console.log('sendForm')

		var xhr = new XMLHttpRequest();
		xhr.open("PUT", url, true)
		xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		xhr.onreadystatechange =function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
		            console.log(xhr.responseText);
		            this.props.refresh(this.props.articl._id);//обновить родителя
		            this.props.refresh();//обновить родителя
		            this.redact();//сбросить текст коментария
		        };
		    }.bind(this);		
		xhr.send(sendData);		
	}




	htmlIntegrator(text){
		return (
	      <div dangerouslySetInnerHTML={{ __html: text }} />
	    );
	}



}





export default Article