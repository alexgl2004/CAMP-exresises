import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";
import { useState } from 'react'

let arr_of_states = {
  All : 1,
  Women : 0,
  Men : 0,
  By_name : 0,
  By_age : 0
};

export function Make_filter_sort_user(users, class_of_clicked_button){

  let a = class_of_clicked_button;

  console.log(users)

  users_out = users.map((user) => {
    return <Card key={user.email} user={user} />;
  })

}

function change_object_arr_of_states(selectedButton, arr_of_states){
  if(selectedButton=='Women'||selectedButton=='Men'){

    arr_of_states['All'] = 0;

    arr_of_states['Women'] = selectedButton=='Men'?0:arr_of_states['Women']
    arr_of_states['Men'] = selectedButton=='Women'?0:arr_of_states['Men']
  
  }

  if(selectedButton=='All'){
    arr_of_states['Women'] = arr_of_states['Men'] = 0;
  }

  if(selectedButton=='By_age'||selectedButton=='By_name'){

    arr_of_states['By_name'] = selectedButton=='By_age'?0:arr_of_states['By_name']
    arr_of_states['By_age'] = selectedButton=='By_name'?0:arr_of_states['By_age']  
    
    arr_of_states[selectedButton] = arr_of_states[selectedButton] ? 0 : 1

  }else{

    arr_of_states[selectedButton] = 1

  }
 
  return arr_of_states

}

function App() {

  const [selectedButton, setSelectedButton] = useState('all');
  
  let users_out_temp
  let users_out_temp_sort

  arr_of_states = change_object_arr_of_states(selectedButton, arr_of_states)

  //console.log(selectedButton,arr_of_states)

  //FILTER
  if(arr_of_states.All==1){
    users_out_temp = users
  }else{
    let gender = ''
    gender = arr_of_states.Women==1?'female':gender
    gender = arr_of_states.Men==1?'male':gender
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
  
  if(arr_of_states.By_name==1){
    console.log('a')
    users_out_temp_sort = users_out_temp.sort((a, b) => a.name.last - b.name.last)
  }else if(arr_of_states.By_age==1){
    users_out_temp_sort = users_out_temp.sort((a, b) => a.dob.age - b.dob.age)
    console.log('b')
  }else{
    users_out_temp_sort = users_out_temp.sort((a, b) => a.name.first - b.name.first)
    console.log('c')
  }
  

  console.log(arr_of_states.By_name+'||'+arr_of_states.By_age)
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
          <button onClick={() => setSelectedButton("All")} className={arr_of_states.All==1?"active ":"" +"filter_button"}>All</button>
          <span className="devider">&nbsp;|&nbsp;</span>
          <button onClick={() => setSelectedButton("Women")} className={arr_of_states.Women==1?"active ":"" +"filter_button"}>Women</button>
          <button onClick={() => setSelectedButton("Men")} className={arr_of_states.Men==1?"active ":"" +"filter_button"}>Men</button>
          <span className="devider">&nbsp;|&nbsp;</span>
          <button onClick={() => setSelectedButton("By_name")} className={arr_of_states.By_name==1?"active ":"" +"filter_button"}>By name</button>
          <button onClick={() => setSelectedButton("By_age")} className={arr_of_states.By_age==1?"active ":"" +"filter_button"}>By age</button>
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


