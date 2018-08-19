import Subject from '../patterns/Subject'

interface Post {
    id: Number,
    userId: Number,
    title: String,
    body: String
}

interface User  {
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

export default class UserBroker extends Subject {  
    userRequest () {
        return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(function(response) {
            return response.json();
        });
    }
    userPosts (userId: number) {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(function(response) {
            return response.json();
        });
    }
    userComments (userId: number) {
        return fetch(`https://jsonplaceholder.typicode.com/comments?userId=${userId}`)
        .then(function(response) {
            return response.json();
        });
    }
    public async getUsers () {
        const allUsers = await this.userRequest();
        let newUserList = [];

        for (let user of allUsers) {
            let newUser: User = {
                id: user.id,
                name: user.name,
                username: user.username,
                phone: user.phone,
                website: user.website, 
                address: user.address,
                company: user.company,
                posts: await this.userPosts(user.id),
                comments: await this.userComments(user.id)
            }

            newUserList.push(newUser);
        }
        
        this.notifyObservers(newUserList);
    }

    public async getUserPosts (userId: number) {
        let res = await this.userPosts(userId);
        this.notifyObservers(res);
    }

}