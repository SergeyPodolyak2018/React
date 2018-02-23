import React from 'react';
const Comment = (props) => {
  return(
			<div>
				<div>
					{props.comment.authorName}
				</div>
				<div>
					{props.comment.created}
				</div>
				<div>
					{props.comment.text}
				</div>
			</div>
	);
}





export default Comment;