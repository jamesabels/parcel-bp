import Global from '../../namespaces/Global';

export default class Subject implements Global.Subject {
    private observers: Global.Observer[] = [];
    private data: any = null;

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
    public notifyObservers () {
        for (let observer of this.observers) {
            observer.update(this.data);
        }
    }

    // Set the new value of the data
    public setData (d: any) {
        this.data = d;
        this.notifyObservers();
    }
 }