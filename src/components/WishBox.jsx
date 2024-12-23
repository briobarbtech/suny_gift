import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

function WishBox() {
  const [message, setMessage] = useState("");
  const [showStar, setShowStar] = useState(false);
  const [shrink, setShrink] = useState(false);

  const sendEmail = (message) => {
    const templateParams = {
      to_name: "Suny", // Nombre del destinatario
      message: message,
      from_name: "SunyGift",
      reply_to: "brian.barquesi@gmail.com", // Tu correo de respuesta
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log("Envío exitoso");
      })
      .catch((error) => {
        console.log(`Error al enviar: ${error}`);
      });
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    setShrink(true); // Iniciar el proceso de reducir el cuadro
    setTimeout(() => setShowStar(true), 500); // Mostrar la estrella después de un pequeño retraso
    sendEmail(message);
  };

  return (
    <WishBoxStyled>
      <div className="container">
        {!showStar ? (
          <div className={`message-box ${shrink ? "shrink" : ""}`}>
            <input
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Escribe un deseo..."
            />
            <button onClick={handleSubmit}>Enviar</button>
          </div>
        ) : (
          <div className="star">
            {/* Imagen de la estrella que se moverá hacia arriba */}
            <img
              src="src/assets/images/star.png"
              alt="Estrella"
              className="star-img"
            />
          </div>
        )}
      </div>
    </WishBoxStyled>
  );
}

const WishBoxStyled = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgba(240, 240, 240, 0);
    position: relative;
  }

  /* Cuadro donde se escribe el mensaje */
  .message-box {
    background-color: #ffffff;
    border: 2px solid #ccc;
    border-radius: 15px;
    padding: 20px;
    width: 300px;
    height: 150px; /* Añadido para altura fija */
    text-align: center;
    transition: all 0.5s ease; /* Animación para reducir el cuadro */
    transform-origin: center; /* Asegura que se reduzca desde el centro */
  }

  .message-box.shrink {
    transform: scale(0.1); /* Escala el cuadro al 10% de su tamaño original */
    opacity: 0; /* Hace el cuadro invisible mientras se reduce */
  }

  /* Estilo del input */
  .message-box input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  /* Estilo del botón */
  .message-box button {
    width: 100%;
    padding: 10px;

    background-color: rgb(22, 27, 71);
    background-image: url("src/assets/images/paper_bg1.png");
    color: white;
    border: 2px solid rgb(141, 62, 172);
    border-radius: 15px;
    cursor: pointer;
    font-size: 1rem;
  }

  .message-box button:hover {
    background-color: #45a049;
  }
  /* Estrella en el centro */
  .star {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 32px;
    transform: translateX(-50%);
    animation: moveUp 3s forwards; /* Mueve la estrella hacia arriba */
  }
  .star-img {
    width: 40px; /* Establece el tamaño de la estrella */
    height: 40px;
    object-fit: contain; /* Mantiene la proporción de la estrella */
  }

  /* Animación de movimiento hacia arriba */
  @keyframes moveUp {
    0% {
      bottom: 0;
      opacity: 1;
    }
    90% {
      bottom: 80vh; /* La estrella se mueve hasta la parte superior de la pantalla */
      opacity: 1; /* La estrella desaparece al final */
    }
    100% {
      bottom: 120vh; /* La estrella se mueve hasta la parte superior de la pantalla */
      opacity: 0; /* La estrella desaparece al final */
    }
  }
`;

export default WishBox;
