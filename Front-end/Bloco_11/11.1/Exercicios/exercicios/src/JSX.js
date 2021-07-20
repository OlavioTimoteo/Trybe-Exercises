const JSX = <h1>Hello JSX!</h1>;

const JSX2 = (
  <div>
    <h1>my h1</h1>
    <p>my p</p>
    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
    </ul>
  </div>
);

const JSX3 = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/*comment*/}
  </div>
);

const JSX4 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line

//ReactDOM.render(JSX, document.getElementById("challenge-node"));

const JSX5 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

const JSX6 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

const MyComponent = () => {
  // change code below this line
  return (
    <div>
      <p>Some string of text</p>
    </div>
  )
  // change code above this line
};

/* 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // change code below this line
    return(
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
};

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
*/