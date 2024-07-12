const button = document.getElementById("inbt");
const input = document.getElementById("insert");
// color picker
const body = document.querySelector("body");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

function colorGradient(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
}

function createListElement(){
    const container = document.querySelector(".container");
    const div = document.createElement("div");
    div.classList.add("lists");
    container.appendChild(div);

    const ul = document.createElement("ul");
    div.appendChild(ul);

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");

    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("toggle");

    span.appendChild(document.createTextNode(input.value));
    span.classList.add("toggl");
    li.appendChild(checkbox);
    li.appendChild(span);
    input.value = "";
    ul.appendChild(li);
    
    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            span.classList.add("done");
        }else{
            span.classList.remove("done");
        }
    })

    const li2 = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("X"));
    delBtn.classList.add("delete");
    
    li2.appendChild(delBtn);
    ul.appendChild(li2);

    const deleteBtn = document.querySelectorAll(".delete");
    deleteBtn.forEach(function(listItem, index){
        listItem.addEventListener("click", function(){
            const listt = document.querySelectorAll(".lists")[index];
            listt.classList.add("remove");
            
        })
    });
    
    
}


function inputLength(){
    return input.value.length;
}

function buttonclicked(){
    if(inputLength() > 0){
        createListElement();
    }
}
function keypressed(event){
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

button.addEventListener("click", buttonclicked);
input.addEventListener("keypress", keypressed);


// add Event listner for color gradient

color1.addEventListener("input", colorGradient);
color2.addEventListener("input", colorGradient);