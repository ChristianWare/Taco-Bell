import Link from "next/link";

function Button(props) {
  const className = `a ${props.type}`;

  return (
    <Link href='/'>
      <a className={className} href={props.href}>
        <div className='btnInner'>
          <span className='btnSlide'></span>
          <span className='btnContent'>{props.label}</span>
        </div>
      </a>
    </Link>
  );
}

Button.defaultProps = {
  type: "primaryBtn",
};

export default Button;
