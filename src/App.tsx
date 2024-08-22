import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';
import UserDemo from './components/UserDemo';
import DataFetch from './components/DataFetch';

//   const users = [
//     {
//       id: 1,
//       name: "Md. Mominur Rhaman",
//       email: "mominrhaman007@gmail.com",
//       age: 28
//     },
//     {
//       id: 2,
//       name: "Md. Piash Rhaman",
//       email: "piashrhaman007@gmail.com",
//       age: 29
//     },
//   ];



// const user1 = {
//         name: "MD. Mominur Rhaman", 
//         department :'Jr. Software Engineer' ,
//         age :  28,
//         isregistered: false, 
//         lang: ["Bangla", "English"]
// };
// const user2 = {
//         name: "MD. Piash Rhaman", 
//         department :'Jr. Software Engineer' ,
//         age :  28,
//         isregistered: true, 
//         lang: ["Bangla", "English"]
// };

function App() {
  return (
    <div className="App">
      <h1>React TypeScript</h1>

      <DataFetch status ="loading" />



      {/* <UserDemo users={users}/> */}


      {/* <User 
           user={user1}
        name = "MD. Mominur Rhaman" 
        department='Jr. Software Engineer' 
        age =  {28} isregistered={true} 
        lang= {["Bangla", "English"]}
      />

      <User user={user2}/> */}

    </div>
  );
}

export default App;
