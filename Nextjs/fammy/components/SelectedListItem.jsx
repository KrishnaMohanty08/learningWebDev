import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.gray-300' }}>
      <List component="nav" aria-label="main mailbox folders" >
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="DMs" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder" className='m-3 p-3'>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List>
      
    </Box>
  );
}
