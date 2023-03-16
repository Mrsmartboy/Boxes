const Box = (props) => {
  const { content, classNames } = props;
  return (
    <div className={`box ${classNames} `}>
      <p className="para">{content}</p>
    </div>
  );
};

const element = (
  <div className="main-container">
    <h1 className="head">Boxes</h1>
    <div className="box-container">
      <Box content="Small" classNames="small" />
      <Box content="Medium" classNames="medium" />
      <Box content="Large" classNames="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
