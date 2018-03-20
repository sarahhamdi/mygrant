import React from 'react';

import addLight from './assets/icon-add-light.svg';
import Header from './components/Header/Header';
import ButtonWithIcon from './components/ButtonWithIcon/ButtonWithIcon';
import FormGrant from './components/FormGrant/FormGrant';

class PageGrants extends React.Component {
  state = {
    grants: ['test 1', 'test 2']
  }

  refresh = () => {
    // get statement
    // if successful
    // setstate to new/all data
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <main className="page__grants">
      <Header />
      <ButtonWithIcon type={addLight} text="Add a Grant" />
      <FormGrant name="form-grants" id="form-grants" />

      {this.state.grants.map((grant, i) => (
        <div key="i">
          {grant}
        </div>
      ))}


    </main>
    )
  }
}




export default PageGrants;