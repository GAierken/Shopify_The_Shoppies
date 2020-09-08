import React from 'react';
import { Header, Grid, GridRow, GridColumn } from 'semantic-ui-react'
import Search from './Components/Search'


function App() {
  return (
   <React.Fragment>
     <Grid centered>
        <GridRow>
          <GridColumn>
            <Header as='h1' style={{color: 'navy', 'text-align':'center'}}> The Shoppies </Header>
          </GridColumn>
        </GridRow>
     <Search/>
     </Grid>
   </React.Fragment>
  );
}

export default App;
