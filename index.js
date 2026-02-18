import { unique, groupBy, sumBy } from './arrayUtils';

console.log('--- INÍCIO DOS TESTES ---');

console.log('\n1. Testando unique (remover duplicatas):');

const numeros = [1, 2, 2, 3, 4, 4, 5];
const numerosUnicos = unique(numeros);
console.log('Entrada: [1, 2, 2, 3, 4, 4, 5]');
console.log('Saída:', numerosUnicos); // Esperado: [1, 2, 3, 4, 5]

const setores = ['Automação', 'Telecom', 'Automação', 'Energia'];
console.log('Entrada:', setores);
console.log('Saída:', unique(setores)); // Esperado: ['Automação', 'Telecom', 'Energia']


console.log('\n2. Testando groupBy (agrupar por chave):');

const alunos = [
  { nome: 'Raul', curso: 'Engenharia' },
  { nome: 'Ana', curso: 'Design' },
  { nome: 'Carlos', curso: 'Engenharia' },
];
const alunosPorCurso = groupBy(alunos, 'curso');
console.log('Agrupado por curso:', alunosPorCurso); // Esperado: { Engenharia: [...], Design: [...] }

const inventario = [
  { item: 'FPGA', tipo: 'Hardware' },
  { item: 'Laravel', tipo: 'Software' },
  { item: 'Sensor', tipo: 'Hardware' },
];
console.log('Agrupado por tipo:', groupBy(inventario, 'tipo'));


console.log('\n3. Testando sumBy (somar valores):');

const compras = [
  { item: 'Multímetro', preco: 250 },
  { item: 'Protoboard', preco: 50 },
  { item: 'Resistores', preco: 10 },
];
const totalCompras = sumBy(compras, 'preco');
console.log('Total da compra (R$):', totalCompras); // Esperado: 310

const projetos = [
  { nome: 'Projeto A', horas: 100 },
  { nome: 'Projeto B' },
  { nome: 'Projeto C', horas: 50 },
];
console.log('Total de horas:', sumBy(projetos, 'horas')); // Esperado: 150

console.log('\n--- FIM DOS TESTES ---');