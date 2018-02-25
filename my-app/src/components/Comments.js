import React, {PureComponent} from 'react'
import Comment from './Coment'


class Comments extends PureComponent{
	constructor(props){
		console.log('Comments----','constructor')
		super(props)
		this.state={			
			
		}
		
	}
	/*shouldComponentUpdate(nextProps,nextState){
		console.log('Comments----','shouldComponentUpdate')
		
	}*/

	componentWillMount(){
		console.log('Comments----','componentWillMount')
	}

	

	componentWillReceiveProps(nextProps){
		console.log('Comments----','WillReceiveProps')
		
	}

	componentWillUpdate(){
		console.log('Comments---','WillUpdate')
	}

	

	render(){
		console.log('Comments---','render');		

		const comentBody=this.props.comments.map((comment,index)=>{
				
					return(
							<div key={comment._id} className='col-md-12 top-buffer' >							
								<Comment comment={comment} />
							</div>
						)
					}
				
			)

		
		
		
		return(
				<div className='row'>	
					{comentBody}
				</div >	
			);
	}




	
	

}





export default Comments