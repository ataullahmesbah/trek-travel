

import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductList = ({ category, products }) => {
    const filteredProducts = category === 'All Gadgets'
        ? products
        : products.filter(product => product.category === category);

    return (
        <Grid container spacing={4}>
            {filteredProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.image}
                            alt={product.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
