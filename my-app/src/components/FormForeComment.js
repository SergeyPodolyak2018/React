import React, {PureComponent} from 'react'



class Form extends PureComponent{
	constructor(props){
		console.log('----','constructor')
		super(props)
		this.state={		
			

		}
		
	}
	
	componentWillMount(){
		console.log('----','componentWillMount')
	}

	

	componentWillUpdate(){
		console.log('----','WillUpdate')
	}

	

	render(){
		
		
		return(
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
							<button  onClick={this.sendForm} className='btn btn-secondary btn-lg btn-block'>
								Submit Comment
							</button>
						</div>									
					</div>
				</div>

				
			)
	}

	sendForm=()=>{
		
		let huy=JSON.stringify({title: 'test 1111111article',
									 status: 'active',
									 metaTitle: 'title123',
									 metaDescription: 'descsription',
									 metaKeywords: 'keywo111rdsrds',
									 body: '<p>text text text<br /></p>'})
		console.log(huy)


		let url='http://api.blog.testing.singree.com/'
		console.log('sendForm')
		fetch(url, {  
		    method: 'post',  
		    headers: {'Content-Type':'application/x-www-form-urlencoded'},  
		    body: huy
		  })
		  .then(function (response) {  
				  console.log('----',response)

				  return response.json()  
				})  
		  .then(function (data) {  
		    console.log('Request succeeded with JSON response', data);  
		  })  
		  .catch(function (error) {  
		    console.log('Request failed', error);  
		  });
		
	}


	componentDidUpdate(){
		console.log('----','DidUpdate')
	}
	componentDidMount(){
		console.log('----','mountingFinished')
	}

	


}





export default Form