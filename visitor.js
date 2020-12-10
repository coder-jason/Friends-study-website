function fn1() {
  let li = document.createElement("LI");
  let text = document.createTextNode(document.getElementById("text1").value);
  li.appendChild(text)
  document.getElementById("result").appendChild(li);
  alert("Thank you!");

}

function submithandler(event) {
  event.preventDefault();
}