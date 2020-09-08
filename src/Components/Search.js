import React, {useState} from 'react'
import {Search, GridRow, GridColumn, Button} from 'semantic-ui-react'


export default function MovieSearch(){

  const [userInput, setUserInput] = useState('')


 const   handleChange = (evt) => {
        setUserInput(evt.target.value.toLowerCase())
 }
    
 const handleClick = () => {
       console.log(userInput)
 }

 const handleResults = () => {
     return [{title: 'what'}]
 }
  return (
        <React.Fragment>
            <GridRow centered textAlign='center'>
                <GridColumn textAlign='center' >
                    <Search onSearchChange={handleChange} size="massive" textAlign='center' icon="search"
                            results={handleResults}/>    
                </GridColumn>               
            </GridRow>
            <GridRow centered textAlign='center'>
                <Button size='huge' onClick={handleClick}>Search</Button>
            </GridRow>
           
        </React.Fragment>
    )
}

