let ptn = document.getElementById("ptn");
let inp = document.getElementById("inp");
let box = document.querySelectorAll(".box");
let drag = null ;
ptn.onclick = function(){
    if(inp.value != ""){
        box[0].innerHTML += `
        <p class="item" draggable="true" >${inp.value}</p>
        `
        inp.value = "";
    }
    items();
}
function items(){
    let items = document.querySelectorAll(".item");
    items.forEach(item=>{
        item.addEventListener("dragstart",function(){
            drag = item ;
            item.style.opacity  = "0.5";
        })
        item.addEventListener("dragend",function(){
            drag = null ;
            item.style.opacity = '1';
        })
        box.forEach(b=>{
            b.addEventListener("dragover",function(e){
                e.preventDefault();
                b.style.background = "green";
            })
            b.addEventListener("dragleave",function(){
                b.style.background = "#fff";
            })
            b.addEventListener("drop",function(){
                b.appendChild(drag);
                b.style.background = "#fff";
            })
        })
    })
}

let btn2 = document.querySelector(".btn2");
let inp2 = document.querySelector(".inp2");
let nw  = document.querySelector(".new");

btn2.onclick = function(){
    if(inp2.value.length == 0 ){
        alert("Please input value");
    }else{
        nw.innerHTML += `
        <div class="sub-new">
        <p class="n-p">${inp2.value}</p>
        <button class="n-bu">
            <i class="fa-regular fa-trash-can"></i>
        </button>
    </div>
        `
    }
    inp2.value = '';

    let nbu  = document.querySelectorAll(".n-bu");
for (const x of nbu) {
    x.onclick = function(){
        x.parentNode.remove();
    }
}
    let p = document.querySelectorAll(".n-p");
    p.forEach(np=>{
        np.onclick = function(){
            np.classList.toggle("lis");
        }
    });
}

let sq = document.querySelectorAll(".squa");
let gh = document.querySelector(".g-h");
let role = "X";
let ar2 = [];
function f3(o,t,th){
    for (let i = 0; i < 9; i++) {
        ar2[i] = document.querySelector(`.squa:nth-of-type(${i + 1})`);
    }
    ar2[o].style.background = "black";
    ar2[t].style.background = "black";
    ar2[th].style.background = "black";
}

let ar = [];
function f1(){
    for (let i = 0; i < 9; i++) {
        ar[i] = document.querySelector(`.squa:nth-of-type(${i + 1})`).innerHTML;
        if(ar[i] == ar[i + 1] && ar[i + 1] == ar[i + 2] && ar[i] != ""){
            f3(i,i + 1,i + 2)
            gh.innerHTML = `${ar[i]} winner`;
            setTimeout(function(){location.reload()},500)
        }else if(ar[i] == ar[i + 3] && ar[i + 3] == ar[i + 6] && ar[i] != ""){
            f3(i,i + 3,i + 6)
            gh.innerHTML = `${ar[i]} winner`;
            setTimeout(function(){location.reload()},500)
        }else if(ar[i] == ar[i + 4] && ar[i + 4] == ar[i + 8] && ar[i] != ""){
            f3(i,i + 4 ,i + 8)
            gh.innerHTML = `${ar[i]} winner`;
            setTimeout(function(){location.reload()},500)
        }else if(ar[i] == ar[i + 2] && ar[i + 2] == ar[i + 4] && ar[i] != ""){
            f3(i,i + 2,i + 4)
            gh.innerHTML = `${ar[i]} winner`;
            setTimeout(function(){location.reload()},500)
        }
    }
}
sq.forEach(i=>{
    i.onclick = function(){
        if(i.innerHTML == "" && role == "X"){
            i.innerHTML = "X"
            role = "O"
            gh.innerHTML = "O"
        }else if(i.innerHTML == "" && role == "O"){
            i.innerHTML = "O"
            role = "X"
            gh.innerHTML = "X"
        }
        f1();
    }
})

let text = document.querySelector(".text");
let rabtn = document.querySelector(".ra-btn");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";

let f4 = () =>{
    fetch(url)
    .then(data => data.json())
    .then(item => text.textContent = `${item.joke}`)
}
rabtn.addEventListener("click",f4);
f4();