export const innerSVG = (
  name: IconNameType,
  colorClassName: string,
  size: number = 16
) => {
  switch (name) {
    case "trashbin":
      return (
        <>
          <svg
            width={size}
            height={size}
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M3.00007 17.9988C2.4501 17.9988 1.97929 17.8029 1.58765 17.4113C1.19601 17.0196 1.00018 16.5488 1.00018 15.9989V2.99964H0.000244141V0.999758H4.99995V-0.000183105H10.9996V0.999758H15.9993V2.99964H14.9994V15.9989C14.9994 16.5488 14.8035 17.0196 14.4119 17.4113C14.0202 17.8029 13.5494 17.9988 12.9995 17.9988H3.00007ZM12.9995 2.99964H3.00007V15.9989H12.9995V2.99964ZM4.99995 13.999H6.99983V4.99952H4.99995V13.999ZM8.99971 13.999H10.9996V4.99952H8.99971V13.999Z"
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
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M7.33356 8.66627H3.3338V7.33302H7.33356V3.33325H8.66682V7.33302H12.6666V8.66627H8.66682V12.666H7.33356V8.66627Z"
                fill="white"
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
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M3.33334 8.66668V7.33334H12.6667V8.66668H3.33334Z"
                fill="#1A1A1A"
                className={colorClassName}
              />
            </g>
          </svg>
        </>
      );
  }
};

export type IconNameType = "trashbin" | "plus" | "minus";
