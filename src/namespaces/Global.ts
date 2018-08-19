namespace Global {
    export interface Subject {
        registerObserver(o: Observer);
        removeObserver(o: Observer);
        notifyObservers(d: any);
    }

    export interface Observer {
        update(d: any);
    }
}

export default Global;