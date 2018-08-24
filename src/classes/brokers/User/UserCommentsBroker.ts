import User from '../../../namespaces/User';
import Subject from '../../patterns/Subject'

export default class UserPostsBroker extends Subject {
    // GET USER POSTS AND UPDATE OBSERVERS
    public async getUserComments (userId: Number) {
        let res = await User.userComments(userId);
        this.notifyObservers(res);
    }
}