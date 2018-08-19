import Observer from '../patterns/Observer'

export default class UserList extends Observer {
    renderListItem (user) {
        return (
            `<li class='user-list-item'>
                ${user.name} - ${user.company.name}
            </li>`
        )
    }
    public update (d: any) {
        let main = document.querySelector('.sidebar');
        
        main.innerHTML = `
            <ul id='userList' class='user-list'>
                ${d.map(user => this.renderListItem(user)).join('')}
            </ul>
        `
    }
}