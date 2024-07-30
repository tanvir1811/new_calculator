 const dis = document.getElementById("display")


function display(input){

dis.value+= input;
console.log(dis.value);
    
}
 
function cleardis(input){
    dis.value = dis.value.slice(0, -1);
}

function cal(){
    dis.value= eval(dis.value);
}

function call(input){

    dis.value = input;
}
