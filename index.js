let screen = document.getElementById('outputScreen');



cler = () =>{
    screen.value = "";
}

function display(num){
    screen.value += num;
}

calculate = () =>{
    try{
        screen.value = eval(screen.value);
    }
    catch{
        alert("invalid");
    }
}

dele = () =>{
    screen.value = screen.value.slice(0,-1);
}