'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Grid
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import gadgetsData from '/public/gadgets.json'; // Adjust the path accordingly
import ProductList from '../ProductList/ProductList';


const categories = ["All Gadgets", "Bags", "Mats", "Travel Accessories", "More"];

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setDrawerOpen(false);
  };

  return (
    <div>
      {/* First AppBar */}
      <AppBar position="static" sx={{ justifyContent: 'space-between' }} className='bg-sky-950 shadow-md border shadow-slate-50 '>
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }} >
          <Typography variant="h6" component="div" sx={{ display: { xs: 'block' } }}>
            Trek Explore Travel
          </Typography>

          {/* Search Bar */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mx: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '0 10px',
                borderRadius: '4px',
                width: '100%',
              }}
            >
              <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ flexGrow: 1 }}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Icons and Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" component="div">
                Account Sign In
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" component="div">
                Return & Orders
              </Typography>
            </Box>
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>

        {/* Responsive Search and Menu */}
        <Drawer anchor="top" open={menuOpen} onClose={toggleMenu}>
          <List>
            <ListItem>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  padding: '0 10px',
                  borderRadius: '4px',
                  width: '100%',
                }}
              >
                <InputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{ flexGrow: 1 }}
                />
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Box>
            </ListItem>
            <ListItem>
              <IconButton aria-label="account">
                <AccountCircleIcon />
                <Typography variant="body1" sx={{ marginLeft: 1 }}>Account Sign In</Typography>
              </IconButton>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Return & Orders</Typography>
            </ListItem>
            <ListItem>
              <IconButton aria-label="cart">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
                <Typography variant="body1" sx={{ marginLeft: 1 }}>Cart</Typography>
              </IconButton>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>

      {/* Second AppBar */}
      <AppBar position="static" className='bg-sky-900'>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Categories
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {categories.map((text, index) => (
            <ListItem button key={text} onClick={() => handleCategoryClick(text)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12}>
            <ProductList category={selectedCategory} products={gadgetsData} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
