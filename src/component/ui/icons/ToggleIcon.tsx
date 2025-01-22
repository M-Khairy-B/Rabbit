import { FC, SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {}

const ToggleIcon: FC<IProps> = (props) => {
  return (
    <svg
      {...props}
      className={`w-5 h-5 ${props.className || ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 14"
    >
      <path
        className="stroke-current fill-current"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  );
};

export default ToggleIcon;
