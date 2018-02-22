import React, {PureComponent} from 'react'

class Article extends PureComponent{
	constructor(props){
		console.log('----','constructor')
		super(props)
		this.state={
			//isOpen:props.defaultOpen,
			counter:0
		}
		//this.handleClick=handleClick.bind(this);
	}
	/*shouldComponentUpdate(nextProps,nextState){
		console.log('----','shouldComponentUpdate')
		return (this.state.isOpen !== nextState.isOpen || this.state.counter !== nextState.counter)
	}
*/
	componentWillMount(){
		console.log('----','componentWillMount')
	}

	
/*
	componentWillReceiveProps(nextProps){
		console.log('----','WillReceiveProps')
		if (nextProps.defaultOpen !== this.props.defaultOpen){
			this.setState({
				isOpen:nextProps.defaultOpen
			})
		}
	}
*/
	componentWillUpdate(){
		console.log('----','WillUpdate')
	}

	

	render(){
		console.log('----','render');
		const article=this.props.articl;
		const isOpen=this.props.isOpen;
		const onButtonClick=this.props.onButtonClick;
		console.log(' isOpen',isOpen);
		const body=isOpen && <section className='card-text'>{article.text}</section>
		return(
				<div className='card mx-auto' style={{width:'50%'}}>
					<div className='card-header'>
						<h2 onClick={this.counterClick}>
							{article.title} clicked {this.state.counter}
							<button onClick={onButtonClick} className='btn btn-primary btn-lg float-right'>
								{isOpen? 'Close' : 'Open'}
							</button>
						</h2>
					</div>
					<div className='card-body'>
						<h6 className='card-subtitle text-muted'>
							creation date: {(new Date(article.date)).toDateString()}
						</h6>
						{body}
					</div>
				</div>
			)
	}




	componentDidUpdate(){
		console.log('----','DidUpdate')
	}
	componentDidMount(){
		console.log('----','mountingFinished')
	}

	handleClick=()=>{
		console.log(this)
		/*this.setState({
			isOpen:!this.state.isOpen
		})*/
		console.log(this)
		
	}

	counterClick=()=>{
		console.log(this)
		this.setState({
			counter: this.state.counter+1
		})
		console.log(this)
	}
}





export default Article