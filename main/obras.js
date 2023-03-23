const get = async () => {
    try {
      const res = await fetch("http://localhost:5000/obras");
      const resJson = await res.json();
      // console.log(resJson);
      return resJson;
    } catch (error) {
      console.log(error);
    }
  };

const drawObras = (obras) => {
  const divPadre$$ = document.querySelector(".divPadreObras");
  for (let i = 0; i < obras.length; i++) {
    const obra = obras[i];
    console.log(obra);
    const divHijo$$ = document.createElement("div");
    divHijo$$.className = "divPadreObras__divHijoObras";
    divHijo$$.innerHTML = `
    <div class="divPadreObras__divHijo--arriba">
      <img class="divPadreMuseos__divHijo--arriba--img" src="${obra.image}" alt="${obra.title}">
    </div>
    <div class="divPadreObras__divHijo--abajo">
        <h1 class="divPadreObras__divHijo--abajo--titulo">${obra.title}</h1>
        <h2 class="divPadreObras__divHijo--abajo--artista">${obra.artist}</h2>
        <p class="divPadreObras__divHijo--abajo--año">${obra.year}</p>
        <p class="divPadreObras__divHijo--abajo--movimiento">${obra.movement}</p>
        <p class="divPadreObras__divHijo--abajo--medio">${obra.medium}</p>
        <p class="divPadreObras__divHijo--abajo--dimensiones">${obra.dimensions}</p>
    </div>
    `;
    divPadre$$.appendChild(divHijo$$);
  }
}

  
  
  
  
  
  
  
  
  
  
  
  
  const init = async () => {
    const obras = await get();
  
   drawObras(obras);
  };
  
  init();