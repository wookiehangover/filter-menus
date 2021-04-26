export default function SearchIcon(props) {
  const path = `M10.09 0a5.207 5.207 0 00-5.2 5.2c0 1.223.443 2.338 1.156
  3.228l-5.75 5.75.812.822 5.755-5.755a5.142 5.142 0 003.228 1.155c2.866 0
  5.2-2.333 5.2-5.2 0-2.866-2.334-5.2-5.2-5.2zm0 1.156A4.038 4.038 0 0114.136
  5.2a4.038 4.038 0 01-4.044 4.045A4.038 4.038 0 016.046 5.2a4.038 4.038 0
  014.045-4.044z`
  
  return (
    <svg
      width={16}
      height={15}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current text-blue-500`}
      {...props}
    >
      <path d={path} />
    </svg>
  );
}
