import React from 'react';
import Link from 'gatsby-link';
import PsalmSelector from '../components/psalm-selector'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      huidigePsalmNo: 1
    }
  }

  onKiesPsalm(nuwePsalmNo) {
    this.setState({huidigePsalmNo: nuwePsalmNo});
  }
  
  render() {
    const huidigePsalm = this.props.data.srcYaml.psalms.find((ps) => (ps.psalm === this.state.huidigePsalmNo));
    console.log(huidigePsalm);
    return(
      <div>
        <PsalmSelector huidigePsalmNo={this.state.huidigePsalmNo} />
        {huidigePsalm.verse.map(({vers, teks}) => (
          <div>
            <h4> {vers} </h4>
            <p> {teks} </p>
          </div>
        ))}
      </div>
    )
  }
}

export default App;

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