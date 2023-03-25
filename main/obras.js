const get = async () => {
    try {
      const res = await fetch("http://localhost:5000/obras"); 
      const resJson = await res.json();
      //  console.log(resJson);
      return resJson;
    } catch (error) {
      console.log(error);
    }
  };


const drawObras = (obras) => {
  const divPadre$$ = document.querySelector(".divPadreObras");
  for (let i = 0; i < obras.length; i++) {
    const obra = obras[i];
    // console.log(obra);
    const divHijo$$ = document.createElement("div");
    divHijo$$.className = "divPadreObras__divHijoObras";
    divHijo$$.innerHTML = `
    <div class="divPadreObras__divHijoObras--arriba">
      <img class="divPadreMuseos__divHijoObras--arriba--img" src="${obra.image}" alt="${obra.title}">
    </div>
    <div class="divPadreObras__divHijoObras--abajo">
        <h1 class="divPadreObras__divHijoObras--abajo--titulo">${obra.title}</h1>
        <h2 class="divPadreObras__divHijoObras--abajo--artista">${obra.artist}</h2>
        <p class="divPadreObras__divHijoObras--abajo--año">${obra.year}</p>
        <a href=""><p class="divPadreObras__divHijoObras--abajo--año">${obra.location.name}</p></a>
        <p class="divPadreObras__divHijoObras--abajo--movimiento">${obra.movement}</p>
        <p class="divPadreObras__divHijoObras--abajo--medio">${obra.medium}</p>
        <p class="divPadreObras__divHijoObras--abajo--dimensiones">${obra.dimensions}</p>
    </div>
    `;
    divPadre$$.appendChild(divHijo$$);
  }
}

  
  
  const init = async () => {
    const infoResult = await get();
    const obras = infoResult.results;
  console.log(obras);
   drawObras(obras);
  };
  
  init();