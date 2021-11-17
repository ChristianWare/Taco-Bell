import Link from "next/link";

function Button2(props) {
  const className = `a ${props.type}`;

  return (
    <Link href={props.href}>
      <p className={className}>
        <div className='btnInner'>
          <span className='btnSlide'></span>
          <span className='btnContent'>{props.label}</span>
        </div>
      </p>
    </Link>
  );
}

Button2.defaultProps = {
  type: "primaryBtn",
};

export default Button2;
