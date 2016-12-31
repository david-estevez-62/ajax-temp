var xmlHttp = createXMLhttpRequest();

function createXMLhttpRequest(){
  var xmlHttp;

  if(window.XMLHttpRequest){
    try{
      xmlHttp = new XMLHttpRequest();
    }catch(e){
      xmlHttp = false;
    }
  }

  if (!xmlHttp) {
    alert("Something went wrong");
  }else{
    return xmlHttp;
  }
}



function process(){
  if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4){
    var partInp = document.getElementById("partInp").value;

    xmlHttp.open("GET", "carparts?parts="+partInp, true);
    xmlHttp.onreadystatechange = handleServerCom;
    xmlHttp.send(null);
  }else{
    setTimeout("process()", 1000);
  }
}



function handleServerCom(){
    if(xmlHttp.readyState == 4){
      if(xmlHttp.status == 200){
          document.getElementById("textResp").innerHTML = xmlHttp.response;
          setTimeout("process()", 1000);
      }else{
        alert("Something went wrong");
      }
    }
}

