import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import ControlledAccordions from '../../components/user_Profile/info_user';
import InfoIcon from '@mui/icons-material/Info';
// import EditAccordions from '../../components/user_Profile/edit_userProfile';
import LockResetIcon from '@mui/icons-material/LockReset';
import FolderSharedRoundedIcon from '@mui/icons-material/FolderSharedRounded';
import ControlledAccordions from './accordionProfile';
import SimpleAccordion from './accordionProfile';
import BadgeAvatars from './accordionProfile';

function TabPanel({...props}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps({...index}) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProfileTabs({...userLogin}) {
  const [value, setValue] = React.useState(0);

  const handleChange = ( e:any) => {
    setValue(e);
  };

  return (
    <Box sx={{ width: '100%' }}>
      
      <TabPanel value={value} index={0}>
            <BadgeAvatars />
      </TabPanel>
  
    </Box>
  );
}