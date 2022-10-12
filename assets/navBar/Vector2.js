import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Vector2 = (props) => (
  <Svg
    width={20}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.5.5h-15A2.507 2.507 0 0 0 0 3v20c0 1.375 1.125 2.5 2.5 2.5h15c1.375 0 2.5-1.125 2.5-2.5V3C20 1.625 18.875.5 17.5.5ZM2.5 3h6.25v10l-3.125-1.875L2.5 13V3Zm0 18.75 3.75-4.825 2.675 3.225 3.75-4.825L17.5 21.75h-15Z"
      fill="#989898"
    />
  </Svg>
)

export default Vector2
