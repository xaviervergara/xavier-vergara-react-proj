import "./ContactoPage.css";
import { useForm } from "react-hook-form";

const ContactoPage = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="mainFormulario">
      <h1 className="main-title">Contacto</h1>
      <form
        onSubmit={handleSubmit(enviar)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <input
          className="form-input"
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        />
        <input
          className="form-input"
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        />

        <input
          className="form-input"
          type="phone"
          placeholder="Ingresá tu telefono"
          {...register("telefono")}
        />
        <button className="boton-formulario" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactoPage;
