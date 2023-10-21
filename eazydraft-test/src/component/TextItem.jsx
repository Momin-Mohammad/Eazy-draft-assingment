import { Container } from '@mui/material';
import Button from '@mui/material/Button';

export default function TextItem(props){
    const{name,age,index,updateDetails} = props

    return (
      <Container 
      style={{fontSize:"medium", fontWeight:"bold",paddingTop:"3%",paddingBottom:"5%", backgroundColor:"rgb(183, 200, 218)",borderTop:"3px solid black",borderLeft:"3px solid black", borderRadius:"10px"}}>
        <p>
          Name: {name}
        </p>
        <p>
          Age: {age}
        </p>
        <Button 
        style={{padding:"3% 5%",fontSize:"x-small",backgroundColor:"whitesmoke",borderRadius:"5px",borderTop:"3px solid black",borderRight:"3px solid black"}} 
        onClick={()=>updateDetails(index)}>Reset Details</Button>
      </Container>
    )
  }