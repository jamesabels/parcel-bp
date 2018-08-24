namespace User {
    // USER INTERFACE
    export interface UserInterface  {
        id: Number,
        name: String,
        username: String,
        phone: String,
        website: String,
        address: {
            city: String,
            geo: {
                lat: String,
                lng: String
            },
            street: String,
            suite: String,
            zipcode: String
        },
        company: {
            name: String,
            bs: String,
            catchPhrase: String
        },
        posts: any,
        comments: any
    }
    // GET ALL USERS
    export function userRequest () {
        return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(function(response) {
            return response.json();
        });
    }
    // GET ALL POSTS FROM SPECIFIC USER
    export function userPosts (userId: Number) {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(function(response) {
            return response.json();
        });
    }
    // GET ALL COMMENTS FROM SPECIFIC USER
    export function userComments (userId: Number) {
        return fetch(`https://jsonplaceholder.typicode.com/comments?userId=${userId}`)
        .then(function(response) {
            return response.json();
        });
    }
}

export default User;