// definindo os tipos para os resultados possíveis
type Sucesso = { tipo: "sucesso"; dados: string[] };
type Erro = { tipo: "erro"; mensagem: string };

type Resultado = Sucesso | Erro;

// criando a função que recebe um resultado e exibe a mensagem apropriada
function exibirResultado(r: Resultado): void {
  if (r.tipo === "sucesso") {
    // r é do tipo Sucesso, então r.dados existe e é um array de strings
    console.log("Operação bem-sucedida!");
    console.log("Dados recebidos:", r.dados);
  } else if (r.tipo === "erro") {
    // r é do tipo Erro, então r.mensagem existe e é uma string
    console.log("Ocorreu um problema!");
    console.log("Motivo:", r.mensagem);
  }
}

// teste com simulações de sucesso e erro
console.log("--- TESTE DE SUCESSO ---");
const simulacaoSucesso: Resultado = {
  tipo: "sucesso",
  dados: ["Laravel", "React Native", "TypeScript", "Verilog"]
};
exibirResultado(simulacaoSucesso);

console.log("\n--- TESTE DE ERRO ---");
const simulacaoErro: Resultado = {
  tipo: "erro",
  mensagem: "Falha ao conectar com o servidor do banco de dados."
};
exibirResultado(simulacaoErro);