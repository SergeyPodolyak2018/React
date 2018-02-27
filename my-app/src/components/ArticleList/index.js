import React, {Component} from 'react'
import Article from '../Article'
import './style.css'



export default class ArticleList extends Component{
	

	render(){
			
				const articleElements=this.props.articles.map((article,index)=>
					{
						return(
								<div key={article._id} className='col-md-12 top-buffer' >
									<Article articl={article} 
										onButtonClick={this.props.openArticle.bind(this,article._id)}						
										/>
								</div>
							)
						
					}
				)
			
		return(

				<div className='row'>				
					{articleElements}
				</div>
		)
	}

}



