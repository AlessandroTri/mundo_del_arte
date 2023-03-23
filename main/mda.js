// aqui esta nuestro fetch
const get = async () => {
  try {
    const res = await fetch("http://localhost:5000/museos");
    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  } catch (error) {
    console.log(error);
  }
};

const drawMuseos = (museos) => {
  const divPadre$$ = document.querySelector(".divPadre");
  for (let i = 0; i < museos.length; i++) {
    const museo = museos[i];

    const divHijo$$ = document.createElement("div");
    divHijo$$.className = "divHijo";
    divHijo$$.innerHTML = `
        <div class="divPadre__hijo--arriba">
        <img class="divPadre__hijo--arriba--img"/>
        </div>
        <div class="divPadre__hijo--abajo">
            <a href=""><h1 class="divPadre__hijo--abajo--nombre"></h1></a>
            <h2 class="divPadre__hijo--abajo--localizacion"></h2>
            <h3 class="divPadre__hijo--abajo--fecha"></h3>
            <p class="divPadre__hijo--abajo--descripcion"></p>
        </div>
        `;
    divPadre$$.appendChild(divHijo$$);
  }
};

// aqui esta nuestra funcion init
const init = async () => {
  const museos = await get();

  drawMuseos(museos);
};

init();
