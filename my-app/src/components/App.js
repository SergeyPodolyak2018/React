import React, {Component} from 'react'
//import React from 'react'

import ArticleList from './ArticleList'
import articles from '../fixtures'
//import data from '../otherAPI'
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
/*
componentDidMount() {
	console.log('herhehr',1)
    var xhr = new XMLHttpRequest();
    var status = false;
    xhr.open("GET", "http://www.mocky.io/v2/5a8ea0182f0000113e4f2775", true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {

        	console.log(xhr.responseText);
        	console.log(alfha);
        	
        	this.insertData.bind(this,xhr.responseText);
          //this.setState({ data: xhr.responseText });
          status = true;
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }
*/


componentDidMount() {
	fetch("http://www.mocky.io/v2/5a8ea0182f0000113e4f2775")
      .then(response => {console.log(response);response.json()}).then(data => this.setState({ hits: data.hits, isLoading: false }));
  
}





	render(){
			console.log("class App -- render",1)
			console.log(this.data)
			

			return(
				
				<div className='container'>
				<div className='jumbotron'>
					<h1 className='display-3'>
						App name
						<button className="btn" onClick={this.reversed}>Реверс</button>
					</h1>
					</div>
						<ArticleList articles={this.state.reverted? articles.slice().reverse() : articles} />
					</div>
				
			)
		}


		insertData=(piska)=>{
			console.log(this)
			this.setState({
				data:piska
			})
			

		}


		reversed=()=>{
			console.log(this)
			this.setState({
				reverted:!this.state.reverted
			})
			console.log('',this.state.reverted)

		}
	
}
export default App
