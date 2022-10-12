import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Vector1 = (props) => (
  <Svg
    width={20}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 .75 0 8.25v15h6.25V14.5h7.5v8.75H20v-15L10 .75Z"
      fill="#989898"
    />
  </Svg>
)

export default Vector1
