function generate(){
    l = document.getElementById("source").value
    l = l.split(",")
    c = document.getElementById("count").value
    if(c>l.length||c<1){
        alert("Please input a number between 1 and " + l.length)
    }else{
        t = []
        
        while(c != 0){
            temp=l[Math.floor(Math.random()*l.length)]
            if(t.includes(temp)){   
                
            } else {
                t.push(temp)
                c=c -1
            }
        }
        
        document.getElementById("gen").value = t
    }
    
}

function theme(){
    localStorage.setItem("theme",document.getElementById("nymode").checked)
    if(document.getElementById("nymode").checked){
        document.body.style.backgroundColor = "red";
        document.body.style.color = "gold";
        document.getElementById("b").style.backgroundColor = "red";
        document.getElementById("b").style.color = "gold";
        document.getElementById("save").style.backgroundColor = "red";
        document.getElementById("save").style.color = "gold";
        document.getElementById("count").style.backgroundColor = "red";
        document.getElementById("count").style.color = "gold";
        document.getElementById("gen").style.backgroundColor = "red";
        document.getElementById("gen").style.color = "gold";
        document.getElementById("source").style.backgroundColor = "red";
        document.getElementById("source").style.cXolor = "gold";
        document.getElementById("sep").style.color = "black";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("b").style.backgroundColor = "white";
        document.getElementById("b").style.color = "black";
        document.getElementById("save").style.backgroundColor = "white";
        document.getElementById("save").style.color = "black";
        document.getElementById("count").style.backgroundColor = "white";
        document.getElementById("count").style.color = "black";
        document.getElementById("gen").style.backgroundColor = "white";
        document.getElementById("gen").style.color = "black";
        document.getElementById("source").style.backgroundColor = "white";
        document.getElementById("source").style.color = "black";
        document.getElementById("sep").style.color = "black";
    }
}

function check(){
    if(localStorage.getItem("theme")=="true"){
        document.getElementById("nymode").checked = true
        theme()
    }

}

function save(){
    localStorage.setItem("def",document.getElementById("source").value)
}
