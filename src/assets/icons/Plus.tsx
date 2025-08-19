import type { Dispatch, SetStateAction } from "react";

interface PlusProps {
  setIsHovered?: Dispatch<SetStateAction<boolean>>;
  setInputValue: Dispatch<SetStateAction<number>>;
}

const Plus = ({ setIsHovered, setInputValue }: PlusProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered && setIsHovered(true)}
      onMouseLeave={() => setIsHovered && setIsHovered(false)}
      onClick={() => setInputValue((state) => state + 1)}
      style={{cursor:'pointer', alignSelf:'end'}}
    >
     <g clip-path="url(#clip0_172_1237)">
<rect width="40" height="40" fill="white"/>
<path d="M20 0.625C9.29688 0.625 0.625 9.29688 0.625 20C0.625 30.7031 9.29688 39.375 20 39.375C30.7031 39.375 39.375 30.7031 39.375 20C39.375 9.29688 30.7031 0.625 20 0.625ZM31.25 22.1875C31.25 22.7031 30.8281 23.125 30.3125 23.125H23.125V30.3125C23.125 30.8281 22.7031 31.25 22.1875 31.25H17.8125C17.2969 31.25 16.875 30.8281 16.875 30.3125V23.125H9.6875C9.17188 23.125 8.75 22.7031 8.75 22.1875V17.8125C8.75 17.2969 9.17188 16.875 9.6875 16.875H16.875V9.6875C16.875 9.17188 17.2969 8.75 17.8125 8.75H22.1875C22.7031 8.75 23.125 9.17188 23.125 9.6875V16.875H30.3125C30.8281 16.875 31.25 17.2969 31.25 17.8125V22.1875Z" fill="#4E9934"/>
</g>
<defs>
<clipPath id="clip0_172_1237">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>
  );
};

export default Plus;
