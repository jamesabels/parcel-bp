import Global from '../../namespaces/Global';

export default class Observer implements Global.Observer {
  private subject: Global.Subject; 

  constructor (subject: Global.Subject) {
    this.subject = subject;
    subject.registerObserver(this);
  }

  public update (d: any) {
      console.log('OBSERVED ', d);
   }


 }