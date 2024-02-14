onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  
    function autoPlay() {
      let currentSlide = 1;
  
      setInterval(() => {
        document.getElementById(`p${currentSlide}`).checked = true;
        currentSlide = (currentSlide % 5) + 1;
      }, 1500); 
    }
    autoPlay();
  };