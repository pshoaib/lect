import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text , setText] = useState("")
  const [todo , setTodo] = useState([])

  const handleChange =(e)=>{   setText(e.target.value) }
  const handleAdd =()=>
        {
             setTodo(     [...todo, {id:Date.now(), value:text }]    )
             setText("")
        }
        const handleClear =()=>
        {
          setText("")
        }

  return (
    <div className='Body'>
            <div className="App">
                            <h1>Todo List </h1>


                  <div className='Input'>
                            <input placeholder='Enter Task'
                                  value={text}
                                  onChange={handleChange}
                            />
                      
                            <button style={{height:'35px',width:'80px',backgroundColor:'rgb(239,237,237)',borderRadius:'30px',marginLeft:"10px"}}onClick={handleAdd}>Add</button>
                            <button style={{height:'35px',width:'80px',backgroundColor:'rgb(239,237,237)',borderRadius:'30px',marginLeft:"10px"}} onClick={handleClear}>Clear</button>
                  </div> 
                  <div className='container'>
                    {
                      todo.map((elem)=>
                      (
                        <div className='Todo' key={elem.id}>
                        {console.log(todo)}
                        <ul>
                          <ol >
                              <h3><li type='square' style={{fontSize:'28px'}}> {elem.value} </li> </h3>
                          </ol>
                        
                        </ul>
                        </div>
                        
                      ))
                    }
                  </div>

                </div>
                        
         </div>
  );
}

export default App;
