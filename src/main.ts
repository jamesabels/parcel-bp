import 'babel-polyfill';
import UserBroker from './classes/brokers/User/UsersBroker';
import UserPostsBroker from './classes/brokers/User/UserPostsBroker';
import UserList from './classes/components/User/UserList';
import PostList from './classes/components/User/PostList';

// Declare Brokers
let userBroker = new UserBroker();
let postBroker = new UserPostsBroker();

// Declare Components
let userlist = new UserList(userBroker);
let postlist = new PostList(postBroker);

userBroker.getUsers();
postBroker.getUserPosts(1);