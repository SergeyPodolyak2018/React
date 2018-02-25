import React, {PureComponent} from 'react'


import ArticleList from './ArticleList'

import OneBigArticle from './OneBigArticle'

import 'bootstrap/dist/css/bootstrap.css'

class App extends PureComponent{
	constructor(props){
		super(props)
		//this.getDataFromAPI=this.getDataFromAPI.bind(this)
		this.state={
			reverted:false,
			data:null,
			isLoading: true,
			hits: [],
			dataOfone:null,
			oneArticle:null
		}
	}

componentDidMount() {
	if(this.oneArticle!==null){
		console.log("class App -- componentDidMount",1)
 		this.getDataFromAPI();
 	}
  }


	render(){
			var content=<div className='container'><div className='col-md-12'><h1>BLOG</h1></div><h3>Загрузка</h3></div>
			
			if(this.state.data===null){
				console.log("class App -- render",1)
				
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
							console.log("class App -- render",2);
							console.log(this.state.oneArticle);
							content=<div className='container'>
										<div className='row'>
												<div className='col-md-12'>
													
												</div>
											</div>
											<div className='row'>							
												<div className='col-md-12' style={{ height:'10%', background :'#acac90',}}>
													<h4 style={{marginTop : '20px', marginLeft  : '100px'}}>BLOG</h4>
												</div>
												
											</div>
											<div className='row'>
													<div className='col-md-2'>
														
													</div>
													<div className='col-md-8'>
														<OneBigArticle oneArticle={this.state.oneArticle} articl={this.state.oneArticle} isOpen={true}					
																			onButtonClick={this.getToAllArticle.bind(this)}
																								
																			/>
													</div>
													<div className='col-md-2'>
														
													</div>
												</div>
									</div>
								
						}else{
							console.log("class App -- render",3);
								content=<div className='container' >
											<div className='row'>
												<div className='col-md-12'>
													
												</div>
											</div>
											<div className='row'>							
												<div className='col-md-12' style={{ height:'10%', background :'#acac90',}}>
													<h4 style={{marginTop : '20px', marginLeft  : '100px'}}>BLOG</h4>
												</div>
												
											</div>

											<div className='row'>
												<div className='col-md-1'>
													
												</div>
												<div className='col-md-9'>
													<ArticleList  articles={this.state.data.articles.slice()} openArticle={this.getDataFromAPI}/>
												</div>
												<div className='col-md-2'>
													
												</div>
											</div>
											
										</div>
										
										
							}
				}

				return (<div className='row'>{content}</div>)
		}
	


		

		getToAllArticle=()=>{
			console.log("class App -- getToAllArticle",3)
			this.setState({
				oneArticle:null
			})
		}



		getDataFromAPI=(whotYouNeed)=>{
			let qwery='?limit=15'
			
			if(whotYouNeed!==undefined){
				qwery=whotYouNeed;
			}

			console.log("class App -- getDataFromAPI",2);
		    var xhr = new XMLHttpRequest();
		    var status = false;
		   /* xhr.open("GET", "http://www.mocky.io/v2/5a8f252b3000004900248a49", true);*/
		   xhr.open("GET", "http://api.blog.testing.singree.com/"+qwery, true);
		   xhr.onload = function (e){
		    	if (xhr.readyState === 4) {
			        if (xhr.status === 200) {
			        	console.log(JSON.parse(xhr.responseText));

			        	if(whotYouNeed!==undefined){
			        		this.setState({oneArticle:JSON.parse(xhr.responseText)});
			        		console.log('whotYouNeed!==undefined')
			        		//this.forceUpdate()
			        	}else{
			        		console.log('whotYouNeed==undefined')
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
