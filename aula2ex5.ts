// definindo a interface para as props
interface PropsBotao {
  titulo: string;
  ativo?: boolean;
}

// implementando a funcao simulando um componente
function renderizarBotao({ titulo, ativo = true }: PropsBotao): string {
  return ativo ? `[ ${titulo} ]` : `( ${titulo} )`;
}

// testes com diferentes cenários de props
console.log("--- TESTANDO RENDERIZAÇÃO DE BOTÃO ---");

// cenário 1: apenas o título, ativo por padrão
console.log("Cenário 1 (Apenas título):", renderizarBotao({ titulo: "Salvar Dados" }));

// cenário 2: título com ativo explícito
console.log("Cenário 2 (Ativo explícito):", renderizarBotao({ titulo: "Avançar", ativo: true }));

// cenário 3: título com ativo definido como false
console.log("Cenário 3 (Inativo):", renderizarBotao({ titulo: "Excluir Conta", ativo: false }));