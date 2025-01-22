import { FC, SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {}

const CloseIcon: FC<IProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${props.className || ""}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        className="stroke-current fill-current"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
export default CloseIcon;
