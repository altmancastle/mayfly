import React from 'react';
import {
  Link,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuProps,
  Switch
} from '@mui/material';
import {Link as NavLink, useNavigate} from 'react-router-dom';
import {useTheme, useToggleTheme} from '../../theme';

export function UserMenu(props: UserMenuProps): JSX.Element {
  const {PaperProps, MenuListProps, ...other} = props;
  const close = useClose(props.onClose);
  const signOut = useHandleSignOut(props.onClose);
  const toggleTheme = useToggleTheme();
  const theme = useTheme();

  return (
    <Menu
      id="user-menu"
      role="menu"
      open={Boolean(props.anchorEl)}
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      PaperProps={{...PaperProps, sx: {...PaperProps?.sx, width: 320}}}
      MenuListProps={{...MenuListProps, dense: true}}
      {...other}
    >
      <MenuItem component={NavLink} to="/settings" onClick={close}>
        <ListItemIcon sx={{minWidth: 40}} />
        <ListItemText primary="Account Details" />
      </MenuItem>

      <MenuItem>
        <ListItemIcon sx={{minWidth: 40}} />
        <ListItemText primary="Dark Mode" />
        <Switch
          name="theme"
          checked={theme?.palette?.mode === 'dark'}
          onChange={toggleTheme}
        />
      </MenuItem>

      <MenuItem onClick={signOut}>
        <ListItemIcon sx={{minWidth: 40}} />
        <ListItemText primary="Log Out" />
      </MenuItem>

      {/* Copyright and links to legal documents */}

      <MenuItem
        sx={{
          '&:hover': {background: 'none'},
          color: (x) => x.palette.grey[500],
          paddingTop: (x) => x.spacing(0.5),
          paddingBottom: (x) => x.spacing(0.5),
          fontSize: '0.75rem'
        }}
      >
        <span>&copy; 2021 Company Name</span>
        <span style={{padding: '0 4px'}}>•</span>
        <Link
          sx={{color: 'inherit'}}
          to="/privacy"
          component={NavLink}
          onClick={close}
          children="Privacy"
        />
        <span style={{padding: '0 4px'}}>•</span>
        <Link
          sx={{color: 'inherit'}}
          to="/terms"
          component={NavLink}
          onClick={close}
          children="Terms"
        />
      </MenuItem>
    </Menu>
  );
}

function useClose(onClose?: MenuProps['onClose']) {
  return React.useCallback(
    (event: React.MouseEvent) => {
      onClose?.(event, 'backdropClick');
    },
    [onClose]
  );
}

function useHandleSignOut(onClose?: MenuProps['onClose']) {
  const navigate = useNavigate();

  return React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      onClose?.(event, 'backdropClick');
    },
    [onClose, navigate]
  );
}

export type UserMenuProps = Omit<MenuProps, 'open'>;
