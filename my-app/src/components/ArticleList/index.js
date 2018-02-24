import React, {Component} from 'react'
import Article from '../Article'
import './style.css'



export default class ArticleList extends Component{
	constructor(props){
		super(props)
	this.state={
		openArticl:null


	}
}





	render(){
			
				const articleElements=this.props.articles.map((article,index)=>
					{
						return(
								<div key={article._id} className='col-md-12 top-buffer' >
									<Article articl={article} 
										isOpen={this.state.openArticleId===article._id}
										
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



