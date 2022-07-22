function calcular() {
  let n1 = document.querySelector("input#num1");
  let n2 = document.querySelector("input#num2");
  let tab = document.querySelector("#selTab");

  if (n1.value.length == 0 || n2.value.length == 0) {
    alert("Verifique os campos");
  } else {
    let c = 1;
    tab.innerHTML = "";
    while (c <= n2.value) {
      let multiplicador = document.createElement("option");
      multiplicador.text = `${n1.value} x ${c} = ${n1.value * c}`;
      tab.appendChild(multiplicador);
      c++;
    }
    if (n1.value % 2 == 0) {
      document.getElementById("background").style.backgroundColor = "green";
    } else if (n1.value % 2 != 0) {
      document.getElementById("background").style.backgroundColor = "#9f9f19";
    }
  }
}
