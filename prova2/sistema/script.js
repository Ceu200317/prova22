
let idade = parseInt(prompt("Digite sua idade:"));
let status = prompt("Digite seu status (registrado / não registrado):").toLowerCase();


let maioridade = idade >= 18 ? "maior de idade" : "menor de idade";
console.log(`Você é ${maioridade}.`);


switch (status) {
  case "registrado":
    console.log("Bem-vindo de volta!");
    break;
  case "não registrado":
    console.log("Por favor, complete seu registro.");
    break;
  default:
    console.log("Status desconhecido.");
    break;
}

if (idade >= 18 && status === "registrado") {
  console.log("Acesso completo concedido.");
} else if (idade < 18 || status !== "registrado") {
  console.log("Acesso limitado.");
}
