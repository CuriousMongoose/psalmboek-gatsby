import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) =>{
  console.log(data)
  const huidigePsalm = data.srcYaml.psalms.find((ps) => (ps.psalm === 1));
  console.log(huidigePsalm)
  return(
    <div>
      <h1>Psalm {huidigePsalm.psalm}</h1>
      {huidigePsalm.verse.map(({vers, teks}) => (
        <div>
          <h3> {vers} </h3>
          <p> {teks} </p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query PsalmsQuery {
    srcYaml{
      psalms{
        psalm
        verse{
          vers
          teks
        }
      }
    }
  }
`;