import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';

import Hello from '../src/classes/Hello';
import HelloNS from '../src/namespaces/HelloNS'

const  hello = new Hello({message: 'World'});


describe('Hello', function() {
    describe('print()', function() {
        it('Should print the passed message to the console.', function() {
            expect(hello.print('World')).to.equal('Hello World!');
        });
    });

    describe('printFromNS()', function() {
        it('Should print the passed message to the console, after it is stored in the namespace.', function() {
            expect(hello.printFromNS('World')).to.equal('Hello World!');
            expect(HelloNS.data.message).to.equal('World');
        });
    });
});