const colors = [
    "red", 
    "blue", 
    "green", 
    "yellow", 
    "purple", 
    "orange", 
    "pink", 
    "brown", 
    "black", 
    "white", 
    "gray", 
    "cyan", 
    "magenta", 
    "lime", 
    "olive", 
    "navy", 
    "teal", 
    "maroon", 
    "violet", 
    "indigo"
  ];
  const body = document.getElementById('body');

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[randomIndex];
  };