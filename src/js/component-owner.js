import '../scss/component-specific.scss';

import React from 'react';
import { Button } from 'react-toolbox/lib/button';

class ComponentOwner extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      text: ''
    };
  }

  render() {

    return (
      <div>
        <Button label="test" />
      </div>
    )
  }

}

export default ComponentOwner;
