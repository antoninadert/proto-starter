//Run the ViewModelExplorer in DEV mode only
  // const ViewModelExplorer = process.env.NODE_ENV === 'production' ?
  //   (() => null)
  //   : require('viewmodel-react-explorer').ViewModelExplorer;

App({
  render() {
    <div>
      <h1>It Works!</h1>
      <Person />
      <Big/>
    </div>
  }
})