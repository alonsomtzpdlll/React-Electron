import Subti from '../components/Subti';
import ChartBar from '../components/ChartBar';
import {Grid} from '@material-ui/core';
import CardT from '../components/CardT';
import DataTabs from '../components/DataTabs';
export default function Rfrc(){

  return(
    <>
      <Subti text="Frecuencia y afluencia "/>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={6}>
        <DataTabs/>
        </Grid>
        <Grid item xs={6}>
          <CardT t1={<ChartBar/>}/>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={6}>
        <DataTabs/>
        </Grid>
        <Grid item xs={6}>
          <CardT t1={<ChartBar/>}/>
        </Grid>
      </Grid>
    </>
    )
}
