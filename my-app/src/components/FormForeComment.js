import React, {PureComponent} from 'react'



class Form extends PureComponent{
	constructor(props){
		super(props)
		this.state={		
			articleId:props.articl._id,			
			text:'',
			author:'',
			authorName:''
		}		
	}
	
	
	render(){	
		
		return(
				<div className='col-md-12'>
					<div className='row form-group' >
						<div className='col-md-8'>
							<div className="input-group">										  
							  <input type="text" className="form-control" placeholder="Name" aria-describedby="basic-addon1" value={this.state.authorName} onChange={this.nameChange}/>
							</div>
						</div>
						<div className='col-md-4'>
							<div className="input-group">										  
							  <input type="text" className="form-control" placeholder="e-mail" aria-describedby="basic-addon1" value={this.state.author} onChange={this.emailChange}/>
							</div>
						</div>
					</div>
					<div className='row form-group' >
						<div className='col-md-12'>
							<textarea className="form-control" id="exampleTextarea" rows="3" value={this.state.text} onChange={this.textChange}></textarea>
						</div>									
					</div>
					<div className='row form-group' >
					
						<div className='col-md-7 mx-auto'>
							<button  onClick={this.sendForm} className='btn btn-secondary btn-lg btn-block'>
								Submit Comment
							</button>
						</div>									
					</div>
				</div>
				
			)
	}

	nameChange=(event)=>{
		 this.setState({authorName: event.target.value})
	}
	emailChange=(event)=>{
		 this.setState({author: event.target.value})
	}
	textChange=(event)=>{
		 this.setState({text: event.target.value})
	}




//Добавить коментарий	
	sendForm=()=>{
		let tempJson=Object.assign({}, this.state);
		let crypto = require('crypto');
		tempJson.author = crypto.createHash('md5').update(this.state.author).digest('hex');		
		let sendData=JSON.stringify(tempJson)



//Добавить статью
		/*let huy1=JSON.stringify({ 
								 title: 'test article SP',
								 status: 'active',
								 metaTitle: 'title',
								 metaDescription: 'descsription',
								 metaKeywords: 'keywords',
								 body: '<p>text text121121212121221212121 text<br /></p>',
								})
*/
//let url1='http://api.blog.testing.singree.com/' //добавить статью
		
				
		let url='http://api.blog.testing.singree.com/comment/'  //добавить коментарий		
		var xhr = new XMLHttpRequest();
		xhr.open("POST", url, true)
		xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		xhr.onreadystatechange =function () {
	        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {			            
			            this.props.refreshFunc();//обновить родителя
			            this.setState({text:''});//сбросить текст коментария
			};
		    }.bind(this);		
		xhr.send(sendData);		
	}


	
}





export default Form