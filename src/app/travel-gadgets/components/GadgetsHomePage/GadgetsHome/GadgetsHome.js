'use client';

import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Container,
    Grid,
    


} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import gadgetsData from '/public/gadgets.json'; // Adjust the path accordingly
import ProductList from '../ProductList/ProductList';
import GadgetsNavbar from '../../GadgetsNavbar/GadgetsNavbar';


const categories = ["All Gadgets", "Bags", "Mats", "Travel Accessories", "More"];


export default function GadgetsHome() {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);


    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setDrawerOpen(false);
    };

    return (
        <div>

            {/* E-commerce Navbar */}

            <GadgetsNavbar />

            {/* Second AppBar  Start */}
            <AppBar position="static" className='bg-sky-900'>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        All Gadgets
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Second AppBar  End */}


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


            {/* Drawer  end */}







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
