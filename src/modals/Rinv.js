import Subti from '../components/Subti';
import CardT from '../components/CardT';
import ChartLi from '../components/ChartLi';
import Tabletem from '../components/Tabletem';
import {Grid} from '@material-ui/core';
export default function Rinv(){
  return(
      <>
      <Subti text="Inventarios"/>
      <Grid container spacing={2}>
      <Grid item xs={4}>
          <CardT t2={<ChartLi />}/>
        </Grid>
      <Grid item xs={8} >
       
        </Grid>
      </Grid>
      </>
    )
}
