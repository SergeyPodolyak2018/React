import React from 'react'
import Comments from './Comments'


const Comment = (props) => {
	
	console.log('coments-reply',props.comment.replies)
	let	comentsReply=null
	if('replies' in props.comment){
	 comentsReply=props.comment.replies.length>0 && <section className='card-text'>						
						<Comments comments={props.comment.replies}/>
					</section>

	}
				

  return(
		<div className='row'>	
			<div className='col-md-12'>
				<div className='row'>
					<div className='col-md-6'>
						{props.comment.authorName}
					</div>
					<div className='col-md-6'>
						{props.comment.created}
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						{props.comment.text}
					</div>
				</div>
				<div className='row'>
					<div className='col-md-2'>

					</div>
					<div className='col-md-10'>
						{comentsReply}
					</div>
				</div>
			</div>
		</div>
	)
}





export default Comment