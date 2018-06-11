import React from 'react';
import Link from 'gatsby-link';
import PsalmSelector from '../components/psalm-selector'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      huidigePsalmNo: 1
    }
  }

  onKiesPsalm(nuwePsalmNo) {
    this.setState({huidigePsalmNo: nuwePsalmNo});
  }
  
  render() {
    const psalmLys = this.props.data.srcYaml.psalms.reduce((psLys, ps) => {
      psLys.push(ps.psalm);
      return psLys;
    }, [])
    //console.log(psalmLys);
    const huidigePsalm = this.props.data.srcYaml.psalms.find((ps) => (ps.psalm === this.state.huidigePsalmNo));
    console.log(huidigePsalm);

    return(
      <div>
        <PsalmSelector 
          psalmLys = {psalmLys} 
          huidigePsalmNo={this.state.huidigePsalmNo} />
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