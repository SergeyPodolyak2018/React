var xhr = new XMLHttpRequest();
var status = false;
var data=null;
xhr.open("GET", "http://www.mocky.io/v2/5a8ea0182f0000113e4f2775", true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {

        	console.log(xhr.responseText);
          data=xhr.responseText;
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
  


export default data;

  


