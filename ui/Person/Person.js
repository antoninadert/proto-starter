Person({
  name: 'Bobby', 
  render(){
    <div>
      Name: <input b="value: name" /><br />
      <label b="text: 'Hello ' + name"/>
      <a href="/about" b="click:Go">About Us</a>
    </div>
  }
});