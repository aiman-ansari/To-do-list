import React,{useState, useEffect, useRef} from 'react';
function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.newValue : '');
    const inputRef = useRef(null);
    
    useEffect(()=>{
        inputRef.current.focus();
    });

    const handleChange=e=>{
        setInput(e.target.value);
    };
    
    const handleSubmit = e =>{
        e.preventDefault();
        props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text : input
        })
        setInput('');
    };
return(
    <form className="todo-form" onSubmit={handleSubmit}>
         {props.edit ? 
         (
         <>
         <input type='text' 
             placeholder='Update todo'
             value={input}
             className='todo-input edit'
             name='text'
             onChange={handleChange}
             ref={inputRef}/>
             
             <button className="todo-button edit">Update</button>
             </>)
              :
              (
              <>
              <input type='text' 
             placeholder='Enter Todo'
             value={input}
             className='todo-input'
             name='text'
             onChange={handleChange}
             ref={inputRef}/>
             <button className="todo-button">Add</button>
             </> ) 
            }
    </form>
); 
}
export default TodoForm;