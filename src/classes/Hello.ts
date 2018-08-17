import HelloNS from '../namespaces/HelloNS'

interface options {
    message: String;
}

export default class Hello {
    message: String;
    constructor (options: options) {
        this.message = options.message;
    }
    print (message: String) {
        return `Hello ${message}!`;
    }
    printFromNS (message: String) {
        HelloNS.setMessage(message);
        return `Hello ${HelloNS.data.message}!`;
    }
}