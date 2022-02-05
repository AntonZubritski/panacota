interface SvgProps {
  active: boolean;
}
const LinksIcons = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect
      x="0.5"
      y="0.499878"
      width="23"
      height="23"
      rx="11.5"
      stroke={props.active ? '#ffffff' : '#AF1F42'}
    />
    <path
      d="M6 11.9999H17M17 11.9999L13.8065 8.99988M17 11.9999L13.8065 14.9999"
      stroke={props.active ? '#ffffff' : '#AF1F42'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default LinksIcons;
