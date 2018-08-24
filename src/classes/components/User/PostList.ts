import User from '../../../namespaces/User';
import Observer from '../../patterns/Observer'

export default class PostList extends Observer {
    renderListItem (post) {
        return (
            `<li class='post-list-item'>
                ${post.title}
            </li>`
        )
    }
    public update (d: any) {
        let main = document.querySelector('.main');
        main.innerHTML = `
            <ul id='postList' class='post-list'>
                ${d.map(post => this.renderListItem(post)).join('')}
            </ul>
        `
    }
}