import Subti from '../components/Subti';
import CardT from '../components/CardT';
import Chart from '../components/Chart';
import Tabletem from '../components/Tabletem';
import {Grid} from '@material-ui/core';
export default function Rinv(){

  return(
      <>
      <Subti text="Inventarios"/>
      <Grid container spacing={2}>
      <Grid item xs={4}>
          <CardT t2={<Chart />}/>
        </Grid>
      <Grid item xs={8} >
         <CardT t={<Tabletem/>}/>
        </Grid>
      </Grid>
      </>
    )
}
