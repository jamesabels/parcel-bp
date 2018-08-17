import Hello from './classes/Hello';

const hello = new Hello({message: 'World'});

console.log(hello.print('World!'));

console.log(hello.printFromNS('Namespace'));