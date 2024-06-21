
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';


const PaymentMethods = () => {
  const paymentMethods = [
    {
      id: 1,
      name: 'Tarjeta de crédito',
      description: 'Paga con tu tarjeta de crédito.',
      icon: '💳',
    },
    {
      id: 2,
      name: 'Bitcoin',
      description: 'Paga con Bitcoin desde tu wallet.',
      icon: <CurrencyBitcoinIcon />,
    },
    {
      id: 3,
      name: 'Transferencia bancaria',
      description: 'Realiza una transferencia a nuestra cuenta bancaria.',
      icon: '🏦',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, mb: 20 }}>
    <h1>Métodos de pago disponibles</h1>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {paymentMethods.map((method) => (
            <Grid item key={method.id} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={method.name}
                  subheader={method.description}
                  avatar={<span role="img" aria-label={method.name}>{method.icon}</span>}
                  sx={{ backgroundColor: '#CCFF00', color: '#04233A' }}
                />
                <CardContent>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PaymentMethods;
