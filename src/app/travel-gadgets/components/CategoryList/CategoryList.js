// components/CategoryList.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const CategoryList = ({ categories, handleCategoryClick }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap', gap: 2 }}>
            {categories.map((category) => (
                <Typography
                    key={category}
                    variant="body2"
                    sx={{ fontSize: { xs: '0.75rem', sm: '1rem' }, cursor: 'pointer' }}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </Typography>
            ))}
        </Box>
    );
};

export default CategoryList;
