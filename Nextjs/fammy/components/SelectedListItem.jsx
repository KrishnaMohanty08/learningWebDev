import * as React from 'react';
import {Button,Box,List,ListItemButton,ListItemIcon,ListItemText} from '@mui/material';
import Divider from '@mui/material/Divider';
import { signOut } from 'next-auth/react';

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
      <Button
        onClick={() => signOut({ callbackUrl: '/login' })}
        className="fixed top-35 rounded-full absolute signout-button"
        variant='contained'
      >
        Sign Out
      </Button>
    </Box>
  );
}
