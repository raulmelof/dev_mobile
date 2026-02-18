import { unique, groupBy, sumBy } from './arrayUtils';

interface Aluno {
    nome: string;
    curso: string;
    semestre: number;
}

const alunos: Aluno[] = [
    { nome: 'Raul', curso: 'Engenharia', semestre: 7 },
    { nome: 'Lucas', curso: 'Engenharia', semestre: 7 },
    { nome: 'Ana', curso: 'Design', semestre: 2 },
];

console.log('--- TESTANDO TYPESCRIPT ---');

const nums = [1, 2, 2, 3];
console.log('Unique:', unique(nums)); 

const porCurso = groupBy(alunos, 'curso');
console.log('Por Curso:', JSON.stringify(porCurso, null, 2));

const totalSemestres = sumBy(alunos, 'semestre');
console.log('Soma dos Semestres:', totalSemestres);