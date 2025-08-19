import type { Dispatch, SetStateAction } from "react";

interface DeleteProps {
  setIsHovered?: Dispatch<SetStateAction<boolean>>;
  setInputValue?: Dispatch<SetStateAction<number>>;
}

const Delete = ({ setIsHovered, setInputValue }: DeleteProps) => {
  return (
    <svg
      width="32"
      height="32s"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered&&setIsHovered(true)}
      onMouseLeave={() => setIsHovered&&setIsHovered(false)}
      onClick={() => setInputValue&&setInputValue((state) => state>=2? state - 1:state)} style={{cursor:'pointer'}}
    >
      <g clip-path="url(#clip0_172_1240)">
        <path
          d="M20 0.625C9.29688 0.625 0.625 9.29688 0.625 20C0.625 30.7031 9.29688 39.375 20 39.375C30.7031 39.375 39.375 30.7031 39.375 20C39.375 9.29688 30.7031 0.625 20 0.625ZM9.6875 23.125C9.17188 23.125 8.75 22.7031 8.75 22.1875V17.8125C8.75 17.2969 9.17188 16.875 9.6875 16.875H30.3125C30.8281 16.875 31.25 17.2969 31.25 17.8125V22.1875C31.25 22.7031 30.8281 23.125 30.3125 23.125H9.6875Z"
          fill="#FF0000"
        />
      </g>
      <defs>
        <clipPath id="clip0_172_1240">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Delete;
