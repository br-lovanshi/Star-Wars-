async function searchName(query) {
    let url = `https://swapi.dev/api/people/?search=${query}`;
    let res = await fetch(url);
    let data = await res.json();
    display(data.results)
    console.log(data.results);
}
searchName()

function display(data) {
    if (data === undefined) {
        return false;
    }

    let append = document.getElementById("display");
    append.innerHTML = null;
    data.forEach(function (el) {
        let box = document.createElement("div");
        box.addEventListener("click", function () {
            localStorage.setItem("data", JSON.stringify(el));
            window.location.href = "charInfo.html";
        })
        let name = document.createElement("p");
        name.innerText = el.name;
        let gender = document.createElement("p");
        gender.innerText = el.gender;
        box.append(name, gender);
        append.append(box)
    });


}

async function main() {

    let query = document.getElementById("query").value;
    let res = searchName(query);

    let data = await res;

}
let id;
function debauncing(fun, delay) {
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(function () {
        fun()
    }, delay);
}