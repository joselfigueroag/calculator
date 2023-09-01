import "../styles/Clear.css";

export default function Clear(props) {
  return (
    <>
      <div className="clear" onClick={props.handleClick}>
        {props.children}
      </div>
    </>
  );
}
