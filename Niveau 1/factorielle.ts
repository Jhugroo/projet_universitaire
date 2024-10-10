import * as readlineSync from 'readline-sync';

function trouverFactorielle(num: number): number {
  if (num === 0) return 1;
  return num * trouverFactorielle(num - 1);
}

let factorielleResult: number = Number(readlineSync.question("Entrez un nombre: "));
console.log(`La factorielle ${factorielleResult} est: ${trouverFactorielle(factorielleResult)}`);
