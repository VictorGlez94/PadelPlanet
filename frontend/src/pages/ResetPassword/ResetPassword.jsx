import { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (newPassword !== confirmPassword) {
            alert("Las nuevas contraseñas no coinciden.");
            return;
        }

        try {
            const response = await axios.post('/api/reset-password', {
                currentPassword,
                newPassword
            });

            if (response.status === 200) {
                alert("Contraseña actualizada correctamente.");
                navigate('/perfil');
            }
        } catch (error) {
            alert("Hubo un error al actualizar la contraseña.");
            console.error(error);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Cambio de contraseña
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="currentPassword"
                        label="Contraseña Actual"
                        name="currentPassword"
                        type="password"
                        autoComplete="current-password"
                        autoFocus
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="newPassword"
                        label="Nueva Contraseña"
                        name="newPassword"
                        type="password"
                        autoComplete="new-password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="confirmPassword"
                        label="Confirmar Nueva Contraseña"
                        name="confirmPassword"
                        type="password"
                        autoComplete="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: "#04233A", }}
                    >
                        Cambiar Contraseña
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ResetPassword;