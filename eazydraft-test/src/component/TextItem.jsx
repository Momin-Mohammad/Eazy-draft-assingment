import Button from '@mui/material/Button';

export default function TextItem(props){
    const{name,age,index,updateDetails} = props

    return (
      <div>
        <p>
          Name: {name}
        </p>
        <p>
          Age: {age}
        </p>
        <Button onClick={()=>updateDetails(index)}>Reset Details</Button>
      </div>
    )
  }