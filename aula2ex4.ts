// implementando funcao generica
function obterPrimeiro<T>(lista: T[]): T {
  return lista[0];
}

// uso com lista de string
const ferramentas: string[] = ["Alicate", "Chave de Fenda", "Multímetro"];
const primeiraFerramenta = obterPrimeiro(ferramentas);
console.log("Primeira ferramenta (string):", primeiraFerramenta);

// uso com lista de number
const tensoes: number[] = [5, 12, 24];
const primeiraTensao = obterPrimeiro(tensoes);
console.log("Primeira tensão (number):", primeiraTensao);

// uso com tipo personalizado

interface Produto {
  nome: string;
  preco: number;
}

const inventario: Produto[] = [
  { nome: "Osciloscópio", preco: 2500 },
  { nome: "Fonte de Bancada", preco: 600 }
];

const primeiroItem = obterPrimeiro(inventario);
console.log("Primeiro item do inventário (Produto):", primeiroItem.nome, "-", primeiroItem.preco);