import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Form = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "400px",
  margin: "auto",
}));

const TextFieldStyled = styled(TextField)(() => ({
  width: "100%",
}));

const Contact = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Contáctanos</h1>
      <Form
        noValidate
        autoComplete="off"
        sx={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <TextFieldStyled label="Nombre" variant="outlined" />
        <TextFieldStyled label="Correo Electrónico" variant="outlined" />
        <TextFieldStyled
          label="Mensaje"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ alignSelf: "center", backgroundColor: "#04233A", marginTop: '20px' }}
        >
          Enviar
        </Button>
      </Form>
    </>
  );
};

export default Contact;
