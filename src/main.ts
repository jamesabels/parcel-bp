import 'babel-polyfill';
import UserBroker from './classes/brokers/UserBroker';
import UserList from './classes/components/UserList';

let broker = new UserBroker();
let userlist = new UserList(broker);

broker.getUsers();

