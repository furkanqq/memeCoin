import { IconType } from '@/types/icon.types';

export const IconChevronLeft: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-left"
      {...props}
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
};
