
import { observe } from 'rxjs-observe';

export class MobxService {
    _proxy;
    _observables;

    instance;
    state;

    FUNC;
    constructor(func) {
           this.FUNC = func; 
    }

   watch(instance) {
     this.instance = instance;
    const { observables, proxy } = observe(instance);
    this._proxy = proxy;
    this._observables = observables;
    return this;
   }

   seeChanges(prop, obsProp, callback) {
    this.instance[prop] = obsProp;
    obsProp.subscribe((value) => {
        this.instance[prop] = value; 
      console.log(value);
      this.FUNC();
      // if(callback) {
      //   callback();
      // }
      // this.ref.markForCheck();
    });

   }
   subscribe(listOfProperties,callback = null) {
     const props = listOfProperties.split(',');
     props.forEach(prop => {
       const obsProp = this._observables[prop];
       if(obsProp) {
           this.seeChanges(prop, obsProp, callback);
                }
     })

     return this._proxy;
   }

}