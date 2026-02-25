// interface livro
interface Livro {
  titulo: string;
  autor: string;
  ano: number;
  disponivel: boolean;
}

// array biblioteca
const biblioteca: Livro[] = [
  {
    titulo: "Neuromancer",
    autor: "William Gibson",
    ano: 1984,
    disponivel: true,
  },
  {
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    ano: 2008,
    disponivel: false,
  },
  {
    titulo: "Memórias do Subsolo",
    autor: "Fiódor Dostoiévski",
    ano: 1864,
    disponivel: true,
  }
];

// função para listar títulos disponíveis
function listarTitulosDisponiveis(livros: Livro[]): string[] {
  return livros
    // filtamos apenas os livros disponíveis
    .filter((livro) => livro.disponivel)
    // mapeamos para retornar apenas os títulos
    .map((livro) => livro.titulo);
}

// teste da função
console.log("--- Títulos Disponíveis ---");
console.log(listarTitulosDisponiveis(biblioteca));