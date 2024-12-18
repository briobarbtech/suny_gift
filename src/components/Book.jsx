import styled from "styled-components";
import HTMLFlipBook from "react-pageflip";
import React, { useState, useRef, useEffect } from "react";
import { textos } from "../assets/text";
import Reproductor from "./SongPlayer";
import WishBox from "./WishBox"
function Book() {
  const pages = textos;
  const bookRef = useRef(null);
  const [onLastPage, setOnLastPage] = useState(false);
  const videoRef = useRef(null);
 




  function createPage(list) {
    let elements = [];
    for (let i = 0; i < list.length; i++) {
      elements.push(
        <div key={i} className="page">
          <div className="text-content">{list[i]}</div>
        </div>
      );
    }
    return elements;
  }

  const [showBook, setShowBook] = useState(true);

  const handleLastPage = (e) => {
    const currentPage = e.data;
    const totalPages = bookRef.current.pageFlip().getPageCount();

    // Verifica si estás en la última página
    setOnLastPage(currentPage === 0);

    if (currentPage === totalPages -1) {
      setTimeout(() => setShowBook(false), 3000); // Esconde el libro con un pequeño retraso
    }
  };
  const [onEnded, setOnEndend] = useState(false);

  const handleVideoEnd = () => {
    setOnEndend(true)
  }
  return (
    <BookStyled>
      

      

        {showBook ? (
          <div className="book-container">
          <HTMLFlipBook
            width={333}
            height={500}
            className="flip-book"
            showCover={true} // Mostrar portada como página inicial
            drawShadow={true} // Sombra para realismo
            ref={bookRef}
            onFlip={handleLastPage}
          >
          <><Reproductor/></>  
            {/* Portada */}
            <div className="page cover"></div>
            
            {/* Contenido del libro */}
            {createPage(pages)}
            
            <div className="page cover back-cover"></div>
          </HTMLFlipBook>
          </div> ) : (
              <>
              
              {
              !onEnded ? (<video ref={videoRef} autoPlay onEnded={handleVideoEnd} className="background-video" >
                
                <source src="src/assets/videos/video.mp4" type="video/mp4"  />
                Tu navegador no soporta videos HTML5.
              </video>):
              <WishBox/>}
              </>
            
        )}
      
    </BookStyled>
  );
}

const BookStyled = styled.div`
  .book-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    background-color:rgba(245, 245, 245, 0);
  }

  .flip-book .page {
    display: flex;
    justify-content: center;
    align-content: center;
    background: white;
    border: 1px solid #ddd;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-height: 500px;
    width: 100%;
    max-width: 333px;
    background-image: url("src/assets/images/paper_bg1.png");
  }
  @font-face {
    font-family: "MyFont";
    src: url("src/assets/fonts/PIXY.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  .flip-book .text-content {
    color: rgb(215, 224, 238);
    margin: 5%;
    font-size: 0.75em;
    font-family: "MyFont", sans-serif;
    line-height: 2;
  }

  /* Estilo de la portada */
  .flip-book .cover {
  
    background-image: url("src/assets/images/cover_book.png");
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    left: 32.5px;
    top: 49px;
  }
 

  .flip-book .back-cover {
    background: linear-gradient(45deg, #2196f3, #4caf50);
    color: white;
    font-size: 1.5rem;
    text-transform: uppercase;
    border: none;
  }

/* Video de fondo */
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Asegura que el video cubra toda la pantalla */
   /* Envía el video al fondo */
}

`;

export default Book;
