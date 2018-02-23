import React, {Component} from 'react'
//import React from 'react'

import ArticleList from './ArticleList'
//import articles from '../fixtures'

import 'bootstrap/dist/css/bootstrap.css'

class App extends Component{
	constructor(props){
		super(props)
		this.state={
			reverted:false,
			data:null,
			isLoading: true,
			hits: [],
			dataOfone:null
		}
	}

componentDidMount() {
	
 	this.getDataFromAPI();
  }





	render(){
			console.log("class App -- render",1)
			
			if(this.state.data===null){
				return(
						<div className='container'>
							<div className='col-md-12'>
								<h1>
									BLOG								
								</h1>
							</div>
							<h3>Загрузка</h3>
						</div>
					)
			}else{
				return(
					
					<div className='container' >
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
								<ArticleList articles={this.state.reverted? this.state.data.articles.slice().reverse() : this.state.data.articles} />
							</div>
							<div className='col-md-2'>
								
							</div>
						</div>
						
					</div>
					
					)
				}
		}
	


		reversed=()=>{
			console.log("class App -- reversed",3)
			this.setState({
				reverted:!this.state.reverted
			})
			

		}


		getDataFromAPI(whotYouNeed){
			let qwery='?limit=15'
			if(whotYouNeed!==undefined){
				qwery=whotYouNeed;
			}

			console.log("class App -- componentDidMount",2);
		    var xhr = new XMLHttpRequest();
		    var status = false;
		   /* xhr.open("GET", "http://www.mocky.io/v2/5a8f252b3000004900248a49", true);*/
		   xhr.open("GET", "http://api.blog.testing.singree.com/"+qwery, true);
		   xhr.onload = function (e){
		    	if (xhr.readyState === 4) {
		        if (xhr.status === 200) {
		        	console.log(JSON.parse(xhr.responseText));

		        	this.setState({data:JSON.parse(xhr.responseText)});
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
