import React, { useState } from "react"
import PokemonLogo from "../PokemonLogo"
import PokemonList from "../PokemonList"
import usePokemonList from "../../hooks/usePokemonList"

export default () => {
  const [pokemonCount, setPokemonCount] = useState(10);
  const { pokemons, loading } = usePokemonList({ count: pokemonCount })

  const handleFetchMore = () => setPokemonCount(pokemonCount + 10)

  return (
    <>
      <PokemonLogo height={80} />
      <PokemonList pokemon={pokemons} onLoadMore={handleFetchMore} loading={loading} />
    </>
  )
}
