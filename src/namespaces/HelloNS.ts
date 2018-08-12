namespace HelloNS {
    export let data = {
        message: null
    }
    export function setMessage (message) {
        this.data.message = message;
    }
}

export default HelloNS;