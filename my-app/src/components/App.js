import React, {PureComponent} from 'react'
import ArticleList from './ArticleList'
import OneBigArticle from './OneBigArticle'
import PageList from './PageList.js'
import 'bootstrap/dist/css/bootstrap.css'

class App extends PureComponent{
	constructor(props){
		super(props)		
		this.state={			
			data:null,
			oneArticle:null,
			page:0
		}
	}

componentDidMount() {
	if(this.oneArticle!==null){		
 		this.getDataFromAPI();
 	}
  }


	render(){
			var content=<div className='container'><div className='col-md-12'><h1>BLOG</h1></div><h3>Загрузка</h3></div>
			
			if(this.state.data===null){
				
				
				content=<div className='container'>
							<div className='col-md-12'>
								<h1>
									BLOG								
								</h1>
							</div>
							<h3>Загрузка</h3>
						</div>
					
			}else{				
				
						if(this.state.oneArticle!==null){
							
							content=<div className='container'>
										<div className='row'>
												<div className='col-md-12'>
													
												</div>
											</div>
											<div className='row'>							
												<div className='col-md-12 headerLable'>
													<h4 className='headerText'>BLOG</h4>
												</div>
												
											</div>
											<div className='row'>
													<div className='col-md-2'>
														
													</div>
													<div className='col-md-8'>
														<OneBigArticle oneArticle={this.state.oneArticle} articl={this.state.oneArticle} isOpen={true}					
																			onButtonClick={this.getToAllArticle.bind(this)}
																			refresh={this.getDataFromAPI}					
																			/>
													</div>
													<div className='col-md-2'>
														
													</div>
												</div>
									</div>
								
						}else{
							
								content=<div className='container' >
											<div className='row'>
												<div className='col-md-12 headerLable'>
													
												</div>
											</div>
											<div className='row'>							
												<div className='col-md-12 headerLable'>
													<h4 className='headerText'>BLOG</h4>
												</div>
												
											</div>

											<div className='row'>
												<div className='col-md-1'>
													
												</div>
												<div className='col-md-9'>
													<ArticleList  articles={this.state.data.articles.slice(this.state.page,this.state.page+3)} openArticle={this.getDataFromAPI}/>
												</div>
												<div className='col-md-2'>
													
												</div>
											</div>

											<div className='row'>
												<div className='col-md-12'>
													<PageList length={this.state.data.articles.length} changePage={this.changePage}/>
												</div>												
											</div>
											
										</div>
										
										
							}
				}

				return (<div className='row'>{content}</div>)
		}
	


		changePage=(pageNumber)=>{
			console.log('jhbjhgj');
			this.setState({
				page:pageNumber
			})
		}

		getToAllArticle=()=>{
			this.setState({
				oneArticle:null
			})
		}



		getDataFromAPI=(whotYouNeed)=>{
			let qwery='?limit=15'
			
			if(whotYouNeed!==undefined){
				qwery=whotYouNeed;
			}

			
		    var xhr = new XMLHttpRequest();
		    var status = false;		  
		   xhr.open("GET", "http://api.blog.testing.singree.com/"+qwery, true);
		   xhr.onload = function (e){
		    	if (xhr.readyState === 4) {
			        if (xhr.status === 200) {
			        	
			        	if(whotYouNeed!==undefined){
			        		this.setState({oneArticle:JSON.parse(xhr.responseText)});		        		
			        		
			        	}else{
			        		
			        		this.setState({data:JSON.parse(xhr.responseText)});
			        	}

			          status = true;
			        } else {
			          console.error(xhr.statusText);
			        }
		      }
		    }.bind(this);
		    xhr.onerror = function (e) {
		      console.error(xhr.statusText);
		    };
		    xhr.send(null);
		}
	
}
export default App
