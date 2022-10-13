import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M21.667 14.083H8.482l6.056 6.056L13 21.667 4.333 13 13 4.333l1.527 1.528-6.045 6.056h13.185v2.166Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="matrix(1 0 0 -1 0 26)" d="M0 0h26v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
