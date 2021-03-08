import React, { useState } from 'react';
import TodoList from './TodoList';
const App=()=>
{
  const [inputList,setInputList]=useState("");
  const [Items,setItems]=useState([]);
  
  
  const itemEvent=(event)=>{
    //Whenever we clidd on button 
    setInputList(event.target.value);
  }; 
  const listOfItems=()=>
  {
    setItems((oldvalues)=>{

      return [...oldvalues,inputList];
    });
    
  };
  const deleteItems=(id)=>
  {
      setItems((oldvalues)=>{
        return oldvalues.filter((arrayEle,index)=>{
              return index!==id;



        })
      })
  }
  
return(
    <div className="main_div">
        <div className="center_div">
            <br/>
            <h1>TODO LIST!</h1>
            <br/>
            <input type="text" placeholder="Add item"  onChange={itemEvent}/>
            <button onClick={listOfItems}>Add</button>
            <ol>
              <div>
                
             {
               Items.map((itemval,index)=>{
                 
                 
                 return <TodoList
                 text={itemval}
                 key={index}
                 id={index}
                 onSelect={deleteItems}
                 
                 
                 
                 />
                 
                 
                 
                 
                 
               }
               
               )
             }
             </div>

            </ol>

        </div>

    </div>




)
}
export default App;