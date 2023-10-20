import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import TextItem from './component/TextItem';


function App() {
  // const [names,setNames] = useState(['Hello'])
  // const [ages, setAges] = useState([23])
  const [peopleDetails, setPeopleDetails] = useState([{name:"Hello",age:23}])


  function addItem(){
    let newPerson ={
      name : Math.random().toString(36).substring(2,7),
      age : Math.floor(Math.random() * 100)
    }
    let addItem = [...peopleDetails,newPerson];
    setPeopleDetails(addItem)
    
  }

  function updateDetails(index){
    let updateDetail = peopleDetails.map((element,ind)=>
      index === ind? {...element,name:""} : element
    )
    setPeopleDetails(updateDetail);
  }

  //Whenever name is updated, print it
  console.log(peopleDetails)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to the EazyDraft test application.
        </p>
        <div onClick={addItem}>Click to add a field</div>
        {
          peopleDetails.map((ele, index)=>
          <div key={index}>
            <TextItem name={ele.name} age={ele.age} index={index} updateDetails={updateDetails}/>
          </div>
          )
        }
      </header>
    </div>
  );
}

export default App;
