class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
  }

  render() {
    return <h1>Hello, {this.state.name}</h1>;
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <h1>Hello, {this.state.name}</h1>;
  }
}

componentDidMount() {
  something.subscribe('newPerson', (newPerson) => {
    this.setState({
      name: newPerson
    });
  });
}

componentWillUnmount() {
  something.unsubscribe('newPerson');
}

