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
							<li key={comment._id} className='article-list__li'>
								<Comment comment={comment}/>
							</li>
						)
					}
				
			)

		
		
		
		return(
				<div className='card mx-auto' style={{width:'100%'}}>
					<ul>
						{comentBody}
					</ul>
				</div>
			)
	}




	componentDidUpdate(){
		console.log('Comments----','DidUpdate')
	}
	componentDidMount(){
		console.log('Comments----','mountingFinished')
	}

}





export default Comments