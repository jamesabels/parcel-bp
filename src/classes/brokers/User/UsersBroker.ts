import User from '../../../namespaces/User';
import Subject from '../../patterns/Subject';

export default class UserBroker extends Subject {
    // GET ALL USERS, AND COMBINE DATA
    public async getUsers () {
        const allUsers = await User.userRequest();        
        this.notifyObservers(allUsers);
    }
}