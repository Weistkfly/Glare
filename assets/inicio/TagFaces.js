import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const TagFaces
 = (props) => (
  <Svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M17.985 3C9.705 3 3 9.72 3 18c0 8.28 6.705 15 14.985 15C26.28 33 33 26.28 33 18c0-8.28-6.72-15-15.015-15ZM18 30c-6.63 0-12-5.37-12-12S11.37 6 18 6s12 5.37 12 12-5.37 12-12 12Zm5.25-13.5a2.247 2.247 0 0 0 2.25-2.25A2.247 2.247 0 0 0 23.25 12 2.247 2.247 0 0 0 21 14.25a2.247 2.247 0 0 0 2.25 2.25Zm-10.5 0A2.247 2.247 0 0 0 15 14.25 2.247 2.247 0 0 0 12.75 12a2.247 2.247 0 0 0-2.25 2.25 2.247 2.247 0 0 0 2.25 2.25ZM18 26.25c3.495 0 6.465-2.19 7.665-5.25h-15.33c1.2 3.06 4.17 5.25 7.665 5.25Z"
        fill="#668AB4"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h36v36H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default TagFaces

