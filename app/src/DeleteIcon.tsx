type deleteIconProps = {
  width: string;
  height: string;
  className: string;
  deleteFunction: (index: string) => void;
  todoName: string;
};

export default function deleteIcon(props: deleteIconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 800 800"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      className={props.className}
      onClick={() => props.deleteFunction(props.todoName)}
    >
      <g transform="matrix(1.03596,0,0,1.04383,-19.1939,-25.0968)">
        <path
          d="M790.761,98.237C790.761,57.288 757.263,24.043 716.003,24.043L93.286,24.043C52.026,24.043 18.528,57.288 18.528,98.237L18.528,716.258C18.528,757.207 52.026,790.453 93.286,790.453L716.003,790.453C757.263,790.453 790.761,757.207 790.761,716.258L790.761,98.237Z"
          fill="rgb(249,49,0)"
        />
      </g>
      <g transform="matrix(0.572558,0,0,0.572558,170.977,170.977)">
        <path d="M800,0L0,800" fill="none" stroke="white" strokeWidth="75" />
      </g>
      <g transform="matrix(-0.572558,0,0,0.572558,629.023,170.977)">
        <path d="M800,0L0,800" fill="none" stroke="white" strokeWidth="75" />
      </g>
    </svg>
  );
}
