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

				<li key={article.id} className='article-list__li'>
					<Article articl={article} 
						isOpen={this.state.openArticleId===article.id}
						onButtonClick={this.handleClick.bind(this,article.id)}
						
						/>
				</li>
			)
		return(
				<ul>				
					{articleElements}
				</ul>
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