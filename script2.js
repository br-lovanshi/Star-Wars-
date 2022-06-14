let data = JSON.parse(localStorage.getItem("data"));
let displayed = document.getElementById("container");
display(data);
function display(el){

    let name =  document.createElement("h1");
            name.innerText  = el.name
            let personalInfo  = document.createElement("div");
            let head  =document.createElement("h3");
            head.innerText = "Personal Info"
            let birth = document.createElement("p");
            birth.innerText= `DOB: ${  el.birth_year}`;
            let gender = document.createElement("p");
            gender.innerText = `Gender: ${ el.gender }`;
            let height = document.createElement("p")
            height.innerText  = `mass: ${el.height }`;
       document.querySelector("#name").append(name)
        personalInfo.append(head,birth,gender,height);


        let anatomy  = document.createElement("div");
            let head2  =document.createElement("h3");
            head2.innerText = "Anatomy Info"
            let mass = document.createElement("p");
            mass.innerText= `mass: ${el.mass}`;
            let hear_color = document.createElement("p");
            hear_color.innerText = `Hair color: ${el.hair_color }`;
            let eye_color = document.createElement("p")
            eye_color.innerText  = `Eye color: ${ el.eye_color }`;


anatomy.append(head2,hear_color,mass,eye_color);



        displayed.append(personalInfo,anatomy);
}
    
console.log(data);

    function removefun(){
        display.innerHTML = null
        window.location.href = "index.html"
    }