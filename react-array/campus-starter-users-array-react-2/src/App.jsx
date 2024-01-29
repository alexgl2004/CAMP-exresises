import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";
import { useState } from 'react'

/*
export function Make_filter_sort_user(users, class_of_clicked_button){

  let a = class_of_clicked_button;

  console.log(users)

  users_out = users.map((user) => {
    return <Card key={user.email} user={user} />;
  })

}
*/

function App() {

  const [selectedButton, setSelectedButton] = useState('all');

  const [obj_of_states, setObj_of_states] = useState({
    All : 1,
    Women : 0,
    Men : 0,
    By_name : 0,
    By_age : 0
  })
  
  let users_out_temp
  let users_out_temp_sort

  function change_object_obj_of_states(selectedButton, obj_of_states){
    console.log(1)
    if(selectedButton=='Women'||selectedButton=='Men'){
  
      obj_of_states['All'] = 0;
  
      obj_of_states['Women'] = selectedButton=='Men'?0:obj_of_states['Women']
      obj_of_states['Men'] = selectedButton=='Women'?0:obj_of_states['Men']
    
    }
  
    if(selectedButton=='All'){
      obj_of_states['Women'] = obj_of_states['Men'] = 0;
    }
  
    if(selectedButton=='By_age'||selectedButton=='By_name'){
  
      obj_of_states['By_name'] = selectedButton=='By_age'?0:obj_of_states['By_name']
      obj_of_states['By_age'] = selectedButton=='By_name'?0:obj_of_states['By_age']  
      
      obj_of_states[selectedButton] = obj_of_states[selectedButton]==1 || obj_of_states[selectedButton]==0 ? -1 : 1
  
    }else{
  
      obj_of_states[selectedButton] = 1
  
    }
   
    return obj_of_states
  
  }
  
  obj_of_states = change_object_obj_of_states(selectedButton, obj_of_states)

  console.log(selectedButton,obj_of_states)

  //FILTER
  if(obj_of_states.All==1){
    users_out_temp = users
  }else{
    let gender = ''
    gender = obj_of_states.Women==1?'female':gender
    gender = obj_of_states.Men==1?'male':gender
    if(gender){
      users_out_temp = users.filter((user) => {
        return user.gender == gender
      });
//      users_out_temp.sort((a, b) => a.name.last - b.name.last)
    }else{
      users_out_temp = users
    }
  }

//  users_out_temp.sort((a, b) => b.gender - a.gender)
//  users_out_temp.sort((a, b) => b.dob.date - a.dob.date)
//  users_out_temp.sort((a, b) => b.dob.age - a.dob.age)
//  users.sort((a, b) => a.dob.age - b.dob.age)
//  users.sort((a, b) => b.name.last - a.name.last)
//  users.sort((a, b) => b.dob.age - a.dob.age)

  //SORT
  
  if(obj_of_states.By_name!=0){
    if(obj_of_states.By_name==1){
      users_out_temp_sort = users_out_temp.sort((a, b) => a.name.last.localeCompare(b.name.last))
    }else{
      users_out_temp_sort = users_out_temp.sort((a, b) => b.name.last.localeCompare(a.name.last))
    }
  }else if(obj_of_states.By_age!=0){
    if(obj_of_states.By_age==1){
      users_out_temp_sort = users_out_temp.sort((a, b) => a.dob.age - b.dob.age)
    }else{
      users_out_temp_sort = users_out_temp.sort((a, b) => b.dob.age - a.dob.age)
    }
  }else{
    users_out_temp_sort = users_out_temp.sort((a, b) => a.name.first.localeCompare(b.name.first))
  }
  

  console.log(obj_of_states.By_name+'||'+obj_of_states.By_age)
  //console.log(users_out_temp)

  //OUTPUT
  const users_out = users_out_temp_sort.map((user) => {
    return <Card key={user.email} user={user} />;
  })
  

  return (
    <>
      <header>
        <h1>Array function magic ({selectedButton})</h1>
      </header>
      <main>
        <section className="filters-button">
          <button onClick={() => setSelectedButton("All")} className={obj_of_states.All==1?"active ":"" +"filter_button"}>All</button>
          <span className="devider">&nbsp;|&nbsp;</span>
          <button onClick={() => setSelectedButton("Women")} className={obj_of_states.Women==1?"active ":"" +"filter_button"}>Women</button>
          <button onClick={() => setSelectedButton("Men")} className={obj_of_states.Men==1?"active ":"" +"filter_button"}>Men</button>
          <span className="devider">&nbsp;|&nbsp;</span>
          <button onClick={() => setSelectedButton("By_name")} className={obj_of_states.By_name!=0?"active ":"" +"filter_button"}>By name</button>
          <button onClick={() => setSelectedButton("By_age")} className={obj_of_states.By_age!=0?"active ":"" +"filter_button"}>By age</button>
        </section>
        <div>
          <section className="card-list">
            {users_out}
          </section>     
        </div>
      </main>
    </>
  );
}

export default App;


