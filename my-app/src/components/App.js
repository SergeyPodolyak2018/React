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
			hits: []
		}
	}

componentDidMount() {
	console.log("class App -- componentDidMount",2)
    var xhr = new XMLHttpRequest();
    var status = false;
    xhr.open("GET", "http://www.mocky.io/v2/5a8f252b3000004900248a49", true);
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





	render(){
			console.log("class App -- render",1)
			
			if(this.state.data===null){
				return(
						<div className='container'>
						<div className='jumbotron'>
							<h1 className='display-3'>
								App name								
							</h1>
						</div>
							<h3>Загрузка</h3>
						</div>
					)
			}else{
				return(
					
					<div className='container'>
					<div className='jumbotron'>
						<h1 className='display-3'>
							App name
							<button className="btn" onClick={this.reversed}>Реверс</button>
						</h1>
						</div>
							<ArticleList articles={this.state.reverted? this.state.data.slice().reverse() : this.state.data} />
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
	
}
export default App
