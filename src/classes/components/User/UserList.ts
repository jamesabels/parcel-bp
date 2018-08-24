import UserPostsBroker from '../../brokers/User/UserPostsBroker';
import Observer from '../../patterns/Observer'

let postBroker = new UserPostsBroker();

export default class UserList extends Observer {

    
    // public onInit (observer: Observer) {
    //     this.subject.registerObserver(observer);
    // }

    setId (id) {
        console.log('id', id.target.value);
        postBroker.getUserPosts(2);
    }
    renderListItem (user) {
        return (
            `<li class='user-list-item' value=${user.id}>
                ${user.name} - ${user.company.name}
            </li>`
        )
    }
    public update (d: any) {
        let sidebar = document.querySelector('.sidebar');
        
        // Set innerHTML
        sidebar.innerHTML = `
            <ul id='userList' class='user-list'>
                ${d.map(user => this.renderListItem(user)).join('')}
            </ul>
        `;

        // Register Event Handlers
        let userlistItems = document.getElementsByClassName('user-list-item');

        for (let user of userlistItems) {
            user.addEventListener('click', this.setId);
        }
    }
}