export const innerSVG = (name: IconNameType, colorClassName: string) => {
  switch (name) {
    case "trashbin":
      return (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M7.00007 20.9988C6.4501 20.9988 5.97929 20.8029 5.58765 20.4113C5.19601 20.0196 5.00018 19.5488 5.00018 18.9989V5.99964H4.00024V3.99976H8.99995V2.99982H14.9996V3.99976H19.9993V5.99964H18.9994V18.9989C18.9994 19.5488 18.8035 20.0196 18.4119 20.4113C18.0202 20.8029 17.5494 20.9988 16.9995 20.9988H7.00007ZM16.9995 5.99964H7.00007V18.9989H16.9995V5.99964ZM8.99995 16.999H10.9998V7.99952H8.99995V16.999ZM12.9997 16.999H14.9996V7.99952H12.9997V16.999Z"
                fill="#1A1A1A"
                className={colorClassName}
              />
            </g>
          </svg>
        </>
      );

    case "plus":
      return (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M10.9995 12.9992H4.99988V10.9993H10.9995V4.99969H12.9994V10.9993H18.999V12.9992H12.9994V18.9989H10.9995V12.9992Z"
                fill="#1A1A1A"
                className={colorClassName}
              />
            </g>
          </svg>
        </>
      );

    case "minus":
      return (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M5 12.9992V10.9993H18.9992V12.9992H5Z" fill="#1A1A1A" />
            </g>
          </svg>
        </>
      );
  }
};

export type IconNameType = "trashbin" | "plus" | "minus";
