// aqui esta nuestro fetch
const get = async () => {
  try {
    const res = await fetch("http://localhost:5000/museos");
    const resJson = await res.json();
    //console.log(resJson);
    return resJson;
  } catch (error) {
    console.log(error);
  }
};

const drawMuseos = (museos) => {
  const divPadre$$ = document.querySelector(".divPadreMuseos");
  for (let i = 0; i < museos.length; i++) {
    const museo = museos[i];
    console.log(museo);
    const divHijo$$ = document.createElement("div");
    divHijo$$.className = "divPadreMuseos__divHijo";
    divHijo$$.innerHTML = `
        <div class="divPadreMuseos__divHijo--arriba">
        <img class="divPadreMuseos__divHijo--arriba--img" src="${museo.image}" alt="${museo.name}">
        </div>
        <div class="divPadreMuseos__divHijo--abajo">
            <a href=""><h1 class="divPadreMuseos__divHijo--abajo--nombre">${museo.name}</h1></a>
            <h2 class="divPadreMuseos__divHijo--abajo--localizacion">${museo.location}</h2>
            <h3 class="divPadreMuseos__divHijo--abajo--fecha">${museo.foundation}</h3>
            <p class="divPadreMuseos__divHijo--abajo--descripcion">${museo.description}</p>
        </div>
        `;
    divPadre$$.appendChild(divHijo$$);
  }
};

// aqui esta nuestra funcion init
const init = async () => {
  const infoResult = await get();
  const museos = infoResult.results;
//console.log(museos.results);
  drawMuseos(museos);

};

init();
