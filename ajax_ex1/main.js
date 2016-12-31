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

    xmlHttp.open("GET", "plaindoc.txt", true);
    xmlHttp.onreadystatechange = handleServerCom;
    xmlHttp.send(null);
  }
}



function handleServerCom(){
    if(xmlHttp.readyState == 4){
      if(xmlHttp.status == 200){
          document.getElementById("headline").innerHTML = xmlHttp.response;
      }else{
        alert("Something went wrong");
      }
    }
}

function clearHeadline(){
    document.getElementById("headline").innerHTML = "";
}


document.getElementById("getFile").onclick       = process;
document.getElementById("clearHeadline").onclick = clearHeadline;

