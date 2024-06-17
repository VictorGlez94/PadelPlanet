import React from 'react';
import { useCart } from '../../context/cartContext';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, removerCarrito, actualizarCantidad, createOrder } = useCart();
    const navigate = useNavigate();
    const subtotal = cart.reduce((acumulado, item) => acumulado + (item.cantidad * (item.precio || 0)), 0);
    const total = subtotal;

    async function sendOrder() {
        const response = await createOrder(cart);
        navigate('/perfil');
    }

    return (
        <Box sx={{ flexGrow: 1, padding: 30 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <Card sx={{ padding: 2, border: '1px solid #e0e0e0', boxShadow: 1 }}>
                        <Typography variant='h4' align='center' sx={{ marginBottom: 2 }}>Carrito</Typography>
                        {cart.map((item, index) => (
                            <Box key={index} sx={{ display: 'flex', marginBottom: 2 }}>
                                <CardMedia
                                    component='img'
                                    sx={{ width: 151 }}
                                    image={item.imagen}
                                    alt={item.nombre}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component='div' variant='h5'>
                                            {item.nombre}
                                        </Typography>
                                        <Typography variant='subtitle1' color='text.secondary' component='div'>
                                            {`${item.precio.toFixed(2)} €`}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <IconButton onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>
                                            <ArrowDropUpIcon />
                                        </IconButton>
                                        <TextField
                                            size='small'
                                            value={item.cantidad}
                                            onChange={(e) => actualizarCantidad(item.id, parseInt(e.target.value))}
                                        />
                                        <IconButton onClick={() => actualizarCantidad(item.id, Math.max(1, item.cantidad - 1))}>
                                            <ArrowDropDownIcon />
                                        </IconButton>
                                        <IconButton onClick={() => removerCarrito(item.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardActions>
                                </Box>
                            </Box>
                        ))}

                        <Button component={Link} to="/" variant='contained' startIcon={<ShoppingCartIcon />} sx={{ width: '100%', marginTop: 2, backgroundColor: '#637E51', color: '#FFFFFF', '&:hover': { backgroundColor: '#F8FFFB', color: '#637E51' } }}>
                            Continuar Comprando
                        </Button>

                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ padding: 2, border: '1px solid #e0e0e0', boxShadow: 1 }}>
                        <Typography variant='h6'><strong>Resumen del pedido:</strong></Typography>
                        <Typography>Artículos: {subtotal.toFixed(2)} €</Typography>
                        <Typography>Total (impuestos inc.): {total.toFixed(2)} €</Typography>
                        <Button variant='contained' sx={{ width: '100%', marginTop: 2, backgroundColor: '#637E51', color: '#FFFFFF', '&:hover': { backgroundColor: '#F8FFFB', color: '#637E51' } }}
                            onClick={sendOrder}>
                            Finalizar Compra
                        </Button>
                    </Card>
                    <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                        <Typography variant='caption'><strong>Pago seguro garantizado</strong></Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                        <Typography variant='caption'><strong>Envío en 24/72h</strong></Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Cart;
