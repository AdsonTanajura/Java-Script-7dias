const  movies = [
    { id: 1, movieName: "O Senhor dos Anéis: A Sociedade do Anel" },
    { id: 2, movieName: "Interestelar" },
    { id: 3, movieName: "Inception" },
    { id: 4, movieName: "Matrix" },
    { id: 5, movieName: "O Poderoso Chefão" },
    { id: 6, movieName: "Clube da Luta" },
    { id: 7, movieName: "Forrest Gump" },
    { id: 8, movieName: "A Origem" },
    { id: 9, movieName: "Pulp Fiction" },
    { id: 10, movieName: "Gladiador" },
    { id: 11, movieName: "Avatar" },
    { id: 12, movieName: "Titanic" },
    { id: 13, movieName: "Os Vingadores" },
    { id: 14, movieName: "Corra!" },
    { id: 15, movieName: "Django Livre" },
    { id: 16, movieName: "O Lobo de Wall Street" },
    { id: 17, movieName: "Coringa" },
    { id: 18, movieName: "Parasita" },
    { id: 19, movieName: "Pantera Negra" },
    { id: 20, movieName: "Mad Max: Estrada da Fúria" }
  ];

  console.log(movies.find(movie => movie.movieName == 'Titanic'));