function checkAnswer() {
    let answer = "'" + document.querySelector("input").value + "'";
    for (let node of document.querySelectorAll("td")) {
        if (node.className.indexOf(answer) >=0) {
            node.style = "color: black;";
        }
    }
}