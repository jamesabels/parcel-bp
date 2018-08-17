import Subject from './classes/patterns/Subject';
import Observer from './classes/patterns/Observer';

let weatherStation = new Subject();

let tempDisplay = new Observer(weatherStation);

weatherStation.setData(1);
weatherStation.setData(2);
weatherStation.setData(3);

