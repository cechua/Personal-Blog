import { observer } from 'mobx-react';
import React, { useState }  from 'react';
import { useEffect } from 'react';
import { Button, ButtonGroup, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardItem from '../../components/CardItem';
import LoadingComponent from '../../components/LoadingComponent';
import { useStore } from '../../stores/store';


function CodeBlocks() {
    const { itemStore } = useStore();
    const {handleMenuClick,handleLoadMenu,currentMenuTab} = itemStore;
    const [sampleMenu,setSampleMenu] = useState([]);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search) // id=123
        if(params.has('menutab'))
        {
            let menutab = params.get('menutab');
            handleLoadMenu(menutab ? menutab : "All");
            
        }
        else{
            handleLoadMenu("All");
        }
        getData();
        console.log(sampleMenu);
    },[handleLoadMenu]);
    
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
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            setSampleMenu(myJson);
          });
      }
    return (
        <>
        <div className="container-fluid nopadding">
            <div className="row">
                <div className="col-sm-2 d-grid gap-2">
                    
                <ButtonGroup vertical className="verticalmenuwidth">
                    {sampleMenu.map((menu:any,i) => (
                        <Link to={"?menutab=" + menu.referenceurl} className="verticalmenubutton" key={i}>
                        <Button variant="outline-dark" onClick={() => handleMenuClick(menu.referenceurl)} 
                        className={"verticalmenubutton " + (currentMenuTab.toLocaleLowerCase() === menu.referenceurl.toLocaleLowerCase() ? 'active' : '')}
                        >{menu.menutitle}</Button>
                    </Link>
                    ))}
                </ButtonGroup>
                </div>
                <div className="col-sm-9">
                <CardColumns>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
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

export default observer(CodeBlocks);