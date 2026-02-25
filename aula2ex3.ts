// criando a interface usuário
interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

// criando variáveis usando os utility types

// omit: cria um novo tipo, mas remove "senha"
type UsuarioSemSenha = Omit<Usuario, "senha">;

// partial: cria um novo tipo onde todos os campos são opcionais
type UsuarioAtualizacao = Partial<Usuario>;

// funções para exibir perfil e atualizar usuário

function exibirPerfil(u: UsuarioSemSenha): void {
  console.log(`\nPerfil do Usuário [ID: ${u.id}]`);
  console.log(`Nome: ${u.nome}`);
  console.log(`E-mail: ${u.email}`);
}

function atualizarUsuario(id: number, dados: UsuarioAtualizacao): void {
  console.log(`\nAtualizando usuário [ID: ${id}]...`);
  console.log("Dados recebidos para o PATCH (atualização):", dados);
  
  // simulação de atualização
  if (dados.nome) {
    console.log(`-> O nome será alterado para: ${dados.nome}`);
  }
  if (dados.senha) {
    console.log(`-> A senha foi alterada com sucesso!`);
  }
}

// testando as funções
console.log("--- TESTANDO UTILITY TYPES ---");

// teste 1: exibindo perfil sem senha
const perfilPublico: UsuarioSemSenha = {
  id: 101,
  nome: "Raul",
  email: "raul@engenharia.com"
};

exibirPerfil(perfilPublico);

// teste 2: atualizando usuário com dados parciais
const novosDados: UsuarioAtualizacao = {
  senha: "novaSenhaSegura123",
  nome: "Raul (Dev Mobile)"
};

atualizarUsuario(101, novosDados);