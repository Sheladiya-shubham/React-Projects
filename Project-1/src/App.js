import React from 'react';
import UserProfileCardFunc from './components/UserProfileCardComp';
import './components/UserProfileCard.css';
import './App.css';
import user1 from './Assets/user1.jpeg';
import user2 from './Assets/user-2.jpg';
import user3 from './Assets/user3.jpeg';
import user4 from './Assets/user4.avif';
function App(){
  return (
    <div className='App'>
      <div className='card-container'>
        <UserProfileCardFunc image={user1} name="Krish Joy" skill="FrontEnd Devloper" hobby="Music" location="Kenya" language="Swahili"  email="Krishjoy07@gmail.com"/>
        <UserProfileCardFunc image={user2} name="Trepher Levis" skill="BackEnd Devloper " hobby="Cooking" location="Azerbaijan" language="Azerbaijani"  email="Trepher65@gmail.com"/>
        <UserProfileCardFunc image={user3} name="Kamolina Gader" skill="FullStack Devloper" hobby="Crafting" location="Rio" language="Portuguese"  email="Kamolina90@gmail.com"/>
        <UserProfileCardFunc image={user4} name="Brush Layer" skill="Career Xi" hobby="Dancing" location="Luxembourg" language="German" email="Brush5@gmail.com" />
      </div>
    </div>
  )
}
export default App;
