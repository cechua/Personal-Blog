import { makeAutoObservable,action } from 'mobx';

export default class ItemStore {
    //Observables
    isLoading = false;
    currentMenuTab = "";

    constructor() {
      makeAutoObservable(this)
    }

    @action handleLoadMenu = (menutab : any) => {
      this.currentMenuTab = menutab;
      console.log('loadmenu: ' + this.currentMenuTab)
    }

    @action handleMenuClick = (menutab : any) => {
      this.currentMenuTab = menutab;
      console.log(menutab);
      console.log('thiscurrentmenttabvalue: ' + this.currentMenuTab);
    }
}