type iconProps = {
  width: string;
  height: string;
};

export default function AddIcon(props: iconProps) {
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
    >
      <g transform="matrix(1.03596,0,0,1.04383,-19.1939,-25.0968)">
        <path
          d="M790.761,98.237C790.761,57.288 757.263,24.043 716.003,24.043L93.286,24.043C52.026,24.043 18.528,57.288 18.528,98.237L18.528,716.258C18.528,757.207 52.026,790.453 93.286,790.453L716.003,790.453C757.263,790.453 790.761,757.207 790.761,716.258L790.761,98.237Z"
          fill="rgb(61,112,0)"
        />
      </g>
      <g transform="matrix(0.309289,0.30914,-0.30914,0.309289,399.94,152.628)">
        <path
          d="M800.235,0.235L0,800"
          fill="none"
          stroke="white"
          strokeWidth="115"
        />
      </g>
      <g transform="matrix(-0.309289,-0.30914,-0.30914,0.309289,647.372,399.94)">
        <path
          d="M799.765,-0.235L0,800"
          fill="none"
          stroke="white"
          strokeWidth="115"
        />
      </g>
    </svg>
  );
}
