import Global from '../../namespaces/Global';

export default class Subject implements Global.Subject {
    public observers: Global.Observer[] = [];
    
    // Add an observer to the array of registed observers
    public registerObserver (o: Global.Observer) {
        this.observers.push(o);
    }
    
    // Remove an observer from the array of registed observers
    public removeObserver (o: Global.Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    // Updated all registered observers
    public notifyObservers (d: any) {
        for (let observer of this.observers) {
            observer.update(d);
        }
    }

    // Set the new value of the data
    public setData (d: any) {
        this.notifyObservers(d);
    }
 }