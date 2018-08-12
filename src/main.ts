import Hello from './classes/Hello';

const hello = new Hello({message: 'World'});

hello.print();

hello.printFromNS('Namespace');