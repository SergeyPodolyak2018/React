const TextRedactor = function(props){
	let redacktText=props.replace(/<.*?>/g, "");	
	redacktText=redacktText.split(' ', 25);
	redacktText=redacktText.join(' ')+'...';	
  return(		
  		redacktText		
	);
}

export default TextRedactor;