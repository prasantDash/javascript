var xmlhttp = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts";


let increment = (
	function(){
		var count = 0;
		return function(){
			count = count + 1;
			return count;
		}
	}
)();



xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText),createTR = "",createid="";
        var table = document.getElementById("createTable");
       	for(let i = 0; i < myArr.length; i++){
       		createTR = document.createElement("tr");

       		createCount = document.createElement("td");
       		createCountTextNode = document.createTextNode(increment());
       		createCount.appendChild(createCountTextNode);
       		createCount.setAttribute("class","idcolcss");
       		
       		createid = document.createElement("td");
       		createTextNode = document.createTextNode(myArr[i].id);
       		createid.appendChild(createTextNode);
       		createid.setAttribute("class","idcolcss");
       		
       		createuserId = document.createElement("td");
       		useridTextNode = document.createTextNode(myArr[i].userId);
       		createuserId.appendChild(useridTextNode);
       		createuserId.setAttribute("class","idcolcss");


       		createTitle = document.createElement("td");
       		titleTextNode = document.createTextNode(myArr[i].title);
       		createTitle.appendChild(titleTextNode);
       		createTitle.setAttribute("class","idcolcss");

       		createBody = document.createElement("td");
       		bodyTextNode = document.createTextNode(myArr[i].body);
       		createBody.appendChild(bodyTextNode);
       		createBody.setAttribute("class","idcolcss");

       		createTR.appendChild(createCount);
       		createTR.appendChild(createid);
       		createTR.appendChild(createuserId);
       		createTR.appendChild(createTitle);
       		createTR.appendChild(createBody);
       		
       		table.appendChild(createTR);

       	}

    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();