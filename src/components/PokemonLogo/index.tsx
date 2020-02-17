import React from "react"

export default ({ height = 100 }: { height?: number }) => {
  return (
    <img src="https://seeklogo.com/images/P/Pokemon-logo-7714F3CEA6-seeklogo.com.png" alt="Pokémon" style={{ height: `${height}px` }} />
  )
}
