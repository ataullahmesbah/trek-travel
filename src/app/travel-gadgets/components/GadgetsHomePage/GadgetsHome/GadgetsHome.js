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
    Box,



} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import gadgetsData from '/public/gadgets.json'; // Adjust the path accordingly
import ProductList from '../ProductList/ProductList';
import GadgetsNavbar from '../../GadgetsNavbar/GadgetsNavbar';
import ContainerPage from '@/app/container/page';


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
            <AppBar position="static" sx={{ backgroundColor: 'rgb(12 74 110)' }}>
                <ContainerPage>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'start', gap: 2 }}>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                All Categories
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                Electronic Accessories
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                Travel Tech
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                Luggage & Organization
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                Photography Gear
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                Comfort Accessories
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                Outdoor Gear
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                Help Center
                            </Typography>
                        </Box>
                    </Toolbar>
                </ContainerPage>
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
