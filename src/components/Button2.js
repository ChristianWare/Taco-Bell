import Link from "next/link";

function Button2(props) {
  const className = `a ${props.type}`;

  return (
    <div className='btn2Container'>
      <a className={className} onClick={props.onClick}>
        <div className='btnInner'>
          <span className='btnSlide'></span>
          <span className='btnContent'>{props.label}</span>
        </div>
      </a>
    </div>
  );
}

Button2.defaultProps = {
  type: "primaryBtn",
};

export default Button2;
