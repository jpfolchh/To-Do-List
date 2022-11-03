function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  function hover (index) {
    document.getElementById(index).className = "todoOn";
  }

  return <div className="todo" key={index} id={index} onClick={handle} onmouseover={hover}>[ - ] &nbsp; {todo.text}</div>
}
