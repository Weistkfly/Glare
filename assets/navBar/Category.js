import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Category = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#989898">
      <Path d="M15 2.5 8.125 13.75h13.75L15 2.5ZM21.875 27.5a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25ZM3.75 16.875h10v10h-10v-10Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h30v30H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default Category
