import { observer } from 'mobx-react';
import React, { useState }  from 'react';
import { useEffect } from 'react';
import { Button, ButtonGroup, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardItem from '../../components/CardItem';
import LoadingComponent from '../../components/LoadingComponent';
import SearchBar from '../../components/SearchBar';
import { useStore } from '../../stores/store';


function MainPage() {
    const { itemStore } = useStore();
    const {handleMenuChange,currentMenuTab,setCustomMenuSectionSearchQuery,getMenuSections,filteredMenuSections} = itemStore;
    const [sampleMenu,setSampleMenu] = useState([]);
    const [cards,setCards] = useState([]);
    const [filteredCards,setFilteredCards] = useState([]);
    
   

    useEffect(() => {
        console.log('getdata?');
        getMenuSections();
        getData();
        getCards();
        const params = new URLSearchParams(window.location.search) // id=123
        if(params.has('menutab'))
        {
            let menutab  = params.get('menutab');
            let menus = sampleMenu.find((i:any) => i.referenceurl.toLocaleLowerCase() === menutab);
            if(menus !== undefined)
            {
                handleChangeBrowserTitle(menus!['menutitle']);
            }
            else
            {
                document.title = 'Main Page';
            }
            handleMenuChange(menutab ? menutab : "All");
        }
        else{
            handleMenuChange("all");
            handleChangeBrowserTitle("All");
        }
    },[]);
    
    function handleChangeBrowserTitle(title:any) {
        document.title = 'Main Page | ' + title;
    }

    function handleGetCards(type:string,id? : number){
        var filtered = cards.filter((e:any) => e.id === "1")
        setFilteredCards(filtered);
    }

    const getData=()=>{
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
          .then(function(myJson) {
            setSampleMenu(myJson);
          });
      }
    const getCards = () => {
        fetch('Cardsdatasample.json'
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
          .then(function(myJson) {
            setCards(myJson);
            setFilteredCards(myJson);
          });
    }  

    const onSearchChangeHandler = (event:any) => {
        console.log('here')
        event.preventDefault();
        const {
          target: { value },
        } = event;
        setCustomMenuSectionSearchQuery(value);
        console.log(value);
      };
    return (
        <>
        <div className="container-fluid nopadding">
            <div className="row">
                <div className="col-sm-2 d-grid gap-2">
                <SearchBar
                    className="search__custom-sections--template-editor"
                    onChange={onSearchChangeHandler}
                    onKeyUp={onSearchChangeHandler}
                    placeholder="Search"
                />    
                <ButtonGroup vertical className="verticalmenuwidth">
                    {filteredMenuSections.map((menu:any,i) => (
                        <Link to={"?menutab=" + menu.referenceurl} className="verticalmenubutton" key={i}>
                        <Button variant="outline-dark" onClick={() => {handleMenuChange(menu.referenceurl); handleChangeBrowserTitle(menu.menutitle); handleGetCards(menu.menutitle);}} 
                        className={"verticalmenubutton " + (currentMenuTab.toLocaleLowerCase() === menu.referenceurl.toLocaleLowerCase() ? 'active' : '')}
                        >{menu.menutitle}</Button>
                    </Link>
                    ))}
                </ButtonGroup>
                </div>
                <div className="col-sm-9">
                <CardColumns>
                    {filteredCards.map((card:any,i) => (
                        <CardItem key={i}/>
                    ))}
                </CardColumns>
                </div>
                <div className="col-sm-1">
                    <LoadingComponent/>
                </div>
            </div>  
        </div>
        </>
    )
}

export default observer(MainPage);