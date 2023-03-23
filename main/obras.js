const get = async () => {
    try {
      const res = await fetch("http://localhost:5000/obras");
      const resJson = await res.json();
      console.log(resJson);
      return resJson;
    } catch (error) {
      console.log(error);
    }
  };

  
  
  
  
  
  
  
  
  
  
  
  
  const init = async () => {
    const obras = await get();
  
  //  drawObras(obras);
  };
  
  init();