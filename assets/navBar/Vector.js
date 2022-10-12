import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Vector = (props) => (
  <Svg
    width={63}
    height={63}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M34.65 15.75h-6.3v12.6h-12.6v6.3h12.6v12.6h6.3v-12.6h12.6v-6.3h-12.6v-12.6ZM31.5 0C14.112 0 0 14.112 0 31.5 0 48.888 14.112 63 31.5 63 48.888 63 63 48.888 63 31.5 63 14.112 48.888 0 31.5 0Zm0 56.7c-13.892 0-25.2-11.309-25.2-25.2 0-13.892 11.308-25.2 25.2-25.2s25.2 11.308 25.2 25.2-11.309 25.2-25.2 25.2Z"
      fill="#fff"
    />
  </Svg>
)

export default Vector
