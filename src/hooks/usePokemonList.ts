import ApolloClient, { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

interface IUsePokemonList {
  ({ count, offset }: { count?: number, offset?: number }): {
    loading: boolean,
    error: Error | undefined,
    pokemons: IPokemon[]
  }
}

interface IPokemon {
  id: string
  name: string
  image: string;
  number: string;
}

const QUERY = gql`
  query GetPokemons($count: Int!) {
    pokemons(first: $count) {
      id
      name
      image
      number
    }
  }
`

const client = new ApolloClient({ uri: "https://graphql-pokemon.now.sh" })

const usePokemonList: IUsePokemonList = ({ count = 10, offset = 0 }) => {
  const { data, loading, error } = useQuery(QUERY, { client, variables: { count } })
  const pokemons = (data && data.pokemons.slice(offset, count)) || []

  return { pokemons, loading, error }
}

export default usePokemonList
