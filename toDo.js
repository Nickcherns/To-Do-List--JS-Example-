function addToDo(event) {
    let input = document.getElementById("input").value;
    let ul = document.getElementById("list");
    let newLi = document.createElement("li");

    newLi.innerHTML = input;
    newLi.className = 'listItem';

    ul.append(newLi);

    document.getElementById('input').value = '';

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let div = this;
          div.style.backgroundColor = "pink"
          div.style.textDecoration = 'line-through';
          setTimeout( function() {div.style.display = "none"}, 1000);
        } 
      }

    if (input === '') {
    alert("You must write something!");
    } else {
        document.getElementById("list").append(newLi);
    }
}



let button = document.getElementById('button');
button.addEventListener('click', addToDo);

let close = document.getElementsByClassName("listItem");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this;
    div.style.display = "none";   
  }
}