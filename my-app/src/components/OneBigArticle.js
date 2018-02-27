import React, {PureComponent} from 'react'
import Comments from './Comments'
import Image from './img/Hotair.jpg'
import DataParser from './DataParser'
import Form from './FormForeComment'

class Article extends PureComponent{
	constructor(props){		
		super(props)
		this.state={			
			openComentArticleId:false,
			redact:false,
			bodyOfarticle:props.articl.body
		}		
	}	

	render(){
		
		const article=this.props.articl;
		const redactOpen=this.state.redact;
		const isOpen=this.props.isOpen;
		const onButtonClick=this.props.onButtonClick;
		
		const title = <h4><section className='card-text'>{article.title}</section></h4>
		
		const body=<section className='card-text'>{this.htmlIntegrator(this.state.bodyOfarticle)}</section>

		const redactor=redactOpen &&<div className='col-md-12'>
										<textarea className="form-control" rows="3" value={this.state.bodyOfarticle} onChange={this.textChange}></textarea>
										<button  className='btn' onClick={this.sendForm}>
												save
										</button>
									</div>		

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
								<div  className='dataLableMax'>
									<DataParser data={article.created}/>
								</div>
								<img src={Image} className='img-fluid' alt="from static folder"/>
							</div>
						</div>

						<div className='row' >
							<div className='col-md-6'>
								{title}
							</div>
							<div className=' mt-auto p-2 colPadMinRight'>										
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


	
	redact=()=>{
		this.setState({
			redact:!this.state.redact,
			bodyOfarticle:this.props.articl.body
		});				
	}

	textChange=(event)=>{		
		this.setState({bodyOfarticle: event.target.value});	
	}



	openComments=()=>{
		this.setState({
			openComentArticleId: this.props.isOpen && !this.state.openComentArticleId,
		});		
	}




//Добавить коментарий	
	sendForm=()=>{
		
		let tempJson={body:''};
		tempJson.body=this.state.bodyOfarticle;		
		let sendData=JSON.stringify(tempJson);		
		let url='http://api.blog.testing.singree.com/'+this.props.articl._id;		
		let xhr = new XMLHttpRequest();
		xhr.open("PUT", url, true)
		xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		xhr.onreadystatechange =function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
		            
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