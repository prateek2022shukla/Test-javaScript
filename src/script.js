
function submit(){
    var namee = document.getElementById("name").value;
    var mob = document.getElementById("mobile").value;

    var msg = " <p> This is a required field </p>";

   var message = msg.fontcolor("red");
 

    if(namee == "" && mob == ""){

        document.getElementById("result1").innerHTML = message;
        document.getElementById("name").style.border = "1px solid red";
        document.getElementById("result2").innerHTML = message;
        document.getElementById("mobile").style.border = "1px solid red";
        
    }
    if(namee == "" || !isNaN(namee)){
        document.getElementById("result1").innerHTML = message
        document.getElementById("name").style.border = "1px solid red";

    }
    if(mob == "" || isNaN(mob) ){
        document.getElementById("result2").innerHTML = message;
        document.getElementById("mobile").style.border = "1px solid red";
        
    }
    
    if(mob.length!=10){
        document.getElementById("result2").innerHTML = message;
        document.getElementById("mobile").style.border = "1px solid red";
    }
  
}

