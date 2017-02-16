import '../scss/component-specific.scss';

import React from 'react';
import { DatePicker } from 'react-toolbox/lib/date_picker';

class ComponentOwner extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      text: ''
    };
  }

  render() {

    return (
      <section>
        <DatePicker label="Pick a date" />
      </section>
    )
  }

}

export default ComponentOwner;
