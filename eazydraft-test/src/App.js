import './App.css';
import {useState, useEffect} from "react"
import TextItem from './component/TextItem';
import { Button, CardHeader, Container, Grid, Typography } from '@mui/material';


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
    let updateDetail = peopleDetails.filter((element,ind)=>index !== ind
    )
    setPeopleDetails(updateDetail);
  }

  return (
    <Container className="App">
        <Typography variant="h5" color={"blue"}>
         Welcome to the EazyDraft test application.
        </Typography>
        <Button  
        style={{padding:"2%",fontSize:"large",backgroundColor:"whitesmoke",borderRadius:"10px", margin:"3% 0%",borderLeft:"3px solid black",borderBottom:"3px solid black"}} 
        onClick={addItem}>Click to add a field</Button>
        <Grid container spacing={5}>
        {
          peopleDetails.map((ele, index)=>
          <Grid item key={index}>
            <TextItem name={ele.name} age={ele.age} index={index} updateDetails={updateDetails}/>
          </Grid>
          )
        }
        </Grid>
    </Container>
  );
}

export default App;
