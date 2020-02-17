import React from "react"

interface IPokemonListItem {
  id: string
  name: string
  image: string
  number: string
}

interface IPokemonListProps {
  pokemon: IPokemonListItem[]
  loading?: boolean
  onLoadMore?: () => void
}

interface IPokemonListItemProps extends IPokemonListItem {}

const PokemonListItem = ({ name, number, image }: IPokemonListItemProps) => {
  return (
    <li style={{ margin: "10px", padding: 0, width: "160px", height: "160px", display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", border: "1px solid #ddd" }}>
      <span style={{ position: "absolute", left: "-8px", top: "-8px", background: "blue", color: "#fff", padding: "3px" }}>#{number}</span>
      <img src={image} alt={name} style={{ maxHeight: "80px" }} />
      <strong style={{ display: "flex", marginTop: "18px" }}>{name}</strong>
    </li>
  )
}

export default ({ pokemon, onLoadMore, loading = false }: IPokemonListProps) => {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, fontFamily: "sans-serif" }}>
      {pokemon.map(pokemon => <PokemonListItem {...pokemon} />)}
      {!loading && <li onClick={onLoadMore} style={{ margin: "10px", padding: 0, width: "160px", height: "160px", display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", background: "blue", color: "#fff", border: "1px solid blue" }}>
        MORE!
      </li>}
      {loading && <li style={{ margin: "10px", padding: 0, width: "160px", height: "160px", display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", background: "green", color: "#fff", border: "1px solid green" }}>
        ...
      </li>}
    </ul>
  )
}
