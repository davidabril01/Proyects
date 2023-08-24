import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function MenuDesplegable({ opcionesMenu }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleMenuClick}
      >
        Home
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {opcionesMenu.map((opcion) => (
          <MenuItem key={opcion.nombre} onClick={handleMenuClose}>
            <a href={opcion.url}>{opcion.nombre}</a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default MenuDesplegable;

