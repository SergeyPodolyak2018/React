import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'



export default class ArticleList extends PureComponent{
	state={
		openArticleId:null
		

	}

	render(){
			console.log('class ArticleList--render',2)

			const articleElements=this.props.articles.map((article,index)=>
				{if(this.state.openArticleId===null){
					return(
							<div key={article._id} className='col-md-12'>
								<Article articl={article} 
									isOpen={this.state.openArticleId===article._id}
									onButtonClick={this.handleClick.bind(this,article._id)}							
									/>
							</div>
						)
					}else{
						if(this.state.openArticleId===article._id){
							return(
								<div key={article._id} className='col-md-12'>
									<Article articl={article} 
										isOpen={this.state.openArticleId===article._id}
										onButtonClick={this.handleClick.bind(this,article._id)}							
									/>
								</div>
							)
						}
					}
				}
			)
		return(

				<div className='row'>				
					{articleElements}
				</div>
			)
		}
		handleClick=(openArticleId)=>{
			console.log('handleClick',openArticleId )
			console.log('handleClick2',this)
			this.setState({ openArticleId:this.state.openArticleId===openArticleId?null:openArticleId})
			console.log('handleClick',openArticleId )
		}
/*
		handleClick=()=>{
		console.log(this)

		this.setState({
			openArticleId:article.id
		})
		console.log(this)
		
	}
	*/

}



/*

export default function ArticleList({articles}){
	const articleElements=articles.map((article,index)=>
			<li key={article.id} className='article-list__li'>
				<Article articl={article} defaultOpen={index===0}/>
			</li>
		)
	return(
			<ul>				
				{articleElements}
			</ul>
		)
}
*/