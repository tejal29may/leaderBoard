
let addButton=document.getElementById("add");
let playerList=document.getElementById("player-list");

const list=[{
    name:"Tejal Mohod",
    country:"India",
    score:80,

},
{
name:"harshada",
country:"canada",
score:90,
}]

addButton.addEventListener("click",(e)=>{
    console.log("okk");
    e.preventDefault();

    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let country=document.getElementById("country").value;
    let score=document.getElementById("score").value;
    
  
    if(fname=="" || lname=="" || country=="" || score==""){
        document.getElementById("required_data").innerText="All Fields are Required";
       alert("All fields are required")
        return;
    }

    let data={
        name:fname+" "+lname,
        country:country,
        score:parseInt(score),
    };

    list.push(data);
    list.sort((a,b)=>{
        return b.score-a.score
    });

    playerList.innerHTML='';

    for(let i=0;i<list.length;i++){
        const item=list[i];

        let div=document.createElement("div");
        let name=document.createElement("p");
        name.classList.add("name");
        name.innerText=item.name;
        

        let country=document.createElement("p");
        country.classList.add("country");
        country.innerText=item.country;
        // country.classList.add("country");

        let Score=document.createElement("p");
        Score.classList.add("score");
        Score.innerText=item.score;
        // Score.classList.add("score");

        var deletebtn = document.createElement("span");
        deletebtn.classList.add('deletbtn')

        //Add buttons for increment and decrement
        let addition = document.createElement("button");
        let minus = document.createElement("button");

        

        addition.classList.add("add_btn");
        minus.classList.add("sub_btn");

     

        addition.setAttribute("onclick", `addfuction(${i})`);
        minus.setAttribute("onclick", `minusfuction(${i})`);
        
       
        addition.innerText = "➕5";
        minus.innerText = "➖ 5";
        deletebtn.innerHTML="✖"

        div.classList.add("main_div");
        // playerList.append(div);
        div.append(name,country,Score,addition,minus,deletebtn);
        playerList.append(div);

     

    let allbtns = document.querySelectorAll('.deletbtn')
    allbtns.forEach((items,index)=>{
    items.addEventListener('click',()=>{
    items.parentNode.remove();
    arr.splice(index,1);
   
    })
})
      
        document.getElementById("fname").value='';
        document.getElementById("lname").value='';
        document.getElementById("country").value='';
        document.getElementById("score").value='';
      
       
        document.getElementById("required_data").style.display="none";

    }



});

function updatefuction() {
    let playerList=document.getElementById("player-list");
   
    
    list.sort((a,b)=>{
        return b.score-a.score
    });

    playerList.innerHTML='';

    for(let i=0;i<list.length;i++){
        const item=list[i];

        let div=document.createElement("div");
        let name=document.createElement("p");
        name.classList.add("name");
        name.innerText=item.name;
        

        let country=document.createElement("p");
        country.classList.add("country");
        country.innerText=item.country;
        // country.classList.add("country");

        let Score=document.createElement("p");
        Score.classList.add("score");
        Score.innerText=item.score;
        // Score.classList.add("score");

        var deletebtn = document.createElement("span");
        deletebtn.classList.add('deletbtn')

        // let img = document.createElement('img');
        //     img.src ='delete.png';

        //Add buttons for increment and decrement
        let addition = document.createElement("button");
        let minus = document.createElement("button");

        

        

        addition.classList.add("add_btn");
        minus.classList.add("sub_btn");

     

        addition.setAttribute("onclick", `addfuction(${i})`);
        minus.setAttribute("onclick", `minusfuction(${i})`);
        
        addition.innerText = "➕ 5";
        minus.innerText = "➖ 5";
        deletebtn.innerText="✖";
        

        div.classList.add("main_div");
        // playerList.append(div);
        div.append(name,country,Score,addition,minus,deletebtn);
        playerList.append(div);

      

    let allbtns = document.querySelectorAll('.deletbtn')
    allbtns.forEach((items,index)=>{
    items.addEventListener('click',()=>{
    items.parentNode.remove();
    arr.splice(index,1);
    console.log('saf');
    })
})
        document.getElementById("fname").value='';
        document.getElementById("lname").value='';
        document.getElementById("country").value='';
        document.getElementById("score").value='';
      
      

        // document.getElementById("required_data").style.display="none";

    }
   
}



  

function addfuction(i) {
    list[i].score += 5;
    updatefuction();
  }
  function minusfuction(i) {
    list[i].score -= 5;
    updatefuction();
  }

  window.onload=()=>updatefuction();