import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, Tooltip } from '@mui/material';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';





export default function CardDashboard() {
  return (
    // <Box sx={{ minWidth: 275 }}>
    <Card sx={{ maxWidth: 200, borderRadius:5, maxHeight:170 }} >
    <IconButton sx={{background:'#FE4C24', color:"black"}}  onClick={()=> window.location.pathname ='moyentemp'}>
      <Tooltip title="Moyenne" placement="top" sx={{color:"#536dfe"}}>
        <ThermostatOutlinedIcon sx={{color:'white'}}/>
      </Tooltip>
    </IconButton>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Moyenne
      </Typography>
      <Typography variant="h6" component="div" noWrap>
         Moyenne Temperature
      </Typography>
      
    </CardContent>
  </Card>
    // </Box>
  );
}
