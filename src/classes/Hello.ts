import HelloNS from '../namespaces/HelloNS'

interface options {
    message: String;
}

export default class Hello {
    message: String;
    constructor (options: options) {
        this.message = options.message;
    }
    print () {
        console.log(`Hello ${this.message}!`);
    }
    printFromNS (message: String) {
        HelloNS.setMessage(message);
        console.log(`Hello ${HelloNS.data.message}!`);
    }
}