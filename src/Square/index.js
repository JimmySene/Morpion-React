import './style.scss';

export default function Square(props) {

  return (
    <div className="square" onClick={() => props.drawInSquare(props.key)}>
      {props.value}
    </div>
  )
}