import React, {Component} from 'react'
class Article extends Component{
	constructor(props){
		super(props)
		this.state={
			isOpen:true
		}
		//this.handleClick=handleClick.bind(this);
	}

	

	render(){
		console.log(this.props);
		const article=this.props.articl;
		//console.log(' ',article.text);
		const body=this.state.isOpen && <section>{article.text}</section>;
		return(
				<div>
					<h2>
						{article.title}
						<button onClick={this.handleClick}>
							{this.state.isOpen? 'Close' : 'Open'}
						</button>
					</h2>
					{body}
					<h3>creation date: {(new Date(article.date)).toDateString()}</h3>
				</div>
			)
	}

	handleClick=()=>{
		console.log(this);
		this.setState({
			isOpen:!this.state.isOpen
		})
	}
}





export default Article