import { makeAutoObservable,action,computed } from 'mobx';

export default class ItemStore {
    //Observables
    isLoading = false;
    currentMenuTab = "";
    customMenuSectionSearchQuery = "";
    menuSections = [];

    constructor() {
      makeAutoObservable(this)
    }


    //computed
    @computed get filteredMenuSections() {
      const lowerCasedQuery = this.customMenuSectionSearchQuery.toLowerCase();
      console.log('compute');
      return this.menuSections.filter((c : any) => {
        return !lowerCasedQuery || c.menutitle.toLowerCase().includes(lowerCasedQuery);
      });
    }

    @action getMenuSections =() => {
      fetch('menusample.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            //console.log(response)
            return response.json();
          })
          .then((myJson) => {
            console.log(myJson);
            this.menuSections = myJson;
          });
    }

    @action setCustomMenuSectionSearchQuery = (query:any) => {
      console.log('here at store change custommenusectionsearchquery');
      this.customMenuSectionSearchQuery = query;
      console.log(this.menuSections);
    };

    @action handleMenuChange = (menutab : any) => {
      this.currentMenuTab = menutab;
      
    }

}