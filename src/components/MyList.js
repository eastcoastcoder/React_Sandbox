class MyList extends React.Component {
  render() {
    const lis = this.props.data.map((text, idx) => <li key={idx}>{text}</li>);
    return (
      <ul>
        {lis}
      </ul>
    );
  }
}
