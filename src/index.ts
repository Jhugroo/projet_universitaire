import LevelOne from "./Level_0/levelOneClass";
import * as readlineSync from 'readline-sync';

let selectedFunction: string = readlineSync.question('Select function(uses "add" by default) ')

const levelOne = new LevelOne(selectedFunction.length ? selectedFunction : 'add')

while (!levelOne.functionExists()) {
    console.log('function does not exist')
    selectedFunction = readlineSync.question('Select function(uses "add" by default) ') ?? 'add'
    levelOne.setSelectedMethod(selectedFunction.length ? selectedFunction : 'add')
}

levelOne.setInputParameters({
    a: Number(readlineSync.question('input 1: '))
})

const input2: string | undefined = (readlineSync.question('input 2(leave empty if not needed): '))
input2 && levelOne.setInputParameters({
    b: parseInt(input2)
})

const input3: string | undefined = (readlineSync.question('input 3(leave empty if not needed): '))
input3 && levelOne.setInputParameters({
    c: parseInt(input3)
})

console.log(levelOne.runSelected())