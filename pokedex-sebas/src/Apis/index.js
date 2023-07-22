// obtenemo los datos ramdon de perfles en el server

useEffect(() => {
  const getPokemonData = async () => {
    const reponse = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    const data = await reponse.json();
    console.log(data);
  };
  getPokemonData()
  return data;

});

export { getUserData };
