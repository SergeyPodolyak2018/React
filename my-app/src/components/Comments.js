import React, {PureComponent} from 'react'
import Comment from './Coment'


class Comments extends PureComponent{
		

	render(){
		
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