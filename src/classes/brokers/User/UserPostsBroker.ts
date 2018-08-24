import User from '../../../namespaces/User';
import Subject from '../../patterns/Subject'

export default class UserPostsBroker extends Subject {
    // GET USER POSTS AND UPDATE OBSERVERS
    public async getUserPosts (userId: Number) {
        let res = await User.userPosts(userId);
        this.notifyObservers(res);
    }
}