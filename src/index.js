import React from "react";
import ReactDOM  from "react-dom";

import AppHeader  from "./components/AppHeader";
import ItemStatusFilter from "./components/ItemStatusFilter";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";


const App =() =>  {
  const todoData = [
    {label: 'Drink Coffee', important:false, id:'dc' },
    {label: 'Make Awesome App', important:true, id:'maa' },
    {label:'Build React App ', important:false, id:'bra'}
  ];
  const log = <log>Log in please</log>
  const isLogin = false;
  return (
<div>
  
  {isLogin ? null: log}
   <AppHeader/>
   <ItemStatusFilter></ItemStatusFilter>
    <SearchPanel></SearchPanel>
    <TodoList todos = {todoData}></TodoList>
    <TodoListItem></TodoListItem>
  </div>
  )
}


ReactDOM.render(<App></App>, 
document.getElementById('root'));