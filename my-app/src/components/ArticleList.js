import React, {Component} from 'react'
import Article from './Article'

export default function ArticleList({articles}){
	const articleElements=articles.map(article=>
			<li key={article.id}><Article articl={article}/></li>
		)
	return(
			<ul>				
				{articleElements}
			</ul>
		)
}