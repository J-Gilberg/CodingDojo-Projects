import React, { useState } from "react";

const Tabs = (props) =>{
    const [tabs, setTabs] = useState([{tabName: "Tab 1", tabMessage: "elo governer"}
    ,{tabName: "Tab 2", tabMessage: "good day governer"}
    ,{tabName: "Tab 3", tabMessage: "good night governer"}]);
    const [tabCount, setTabCount] = useState(3);

    const addTab = (m) => {
        setTabCount(tabCount + 1)
        setTabs([...tabs,{
            tabName: `Tab ${tabCount}`
            ,tabMessage: m
        }])
    }
    const addNewTab = () => {
        addTab("new tab, good job!!");
    }
    const showMessage = (event) => {
        event.preventDefault();
        console.log();
        return props.getMessage(event.target.value);
    }
    

    return(
        <div>
            {
            tabs.map( 
                (
                (tab,i) =>
                {
                    console.log(tab);
                    return(<button data-toggle="button" className="btns btn btn-dark" name={i} value={tab.tabMessage} onClick={showMessage}>{tab.tabName}</button>)}
                )
                )
            }
            <button className="btns btn btn-dark" type="sumbit" onClick={addNewTab}>+</button>
        </div>
    )

}
export default Tabs;