import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const FastFood = (props) => (
  <Svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M27.09 34.485h2.49c1.26 0 2.295-.96 2.445-2.19L34.5 7.575H27V1.5h-2.955v6.075H16.59l.45 3.51c2.565.705 4.965 1.98 6.405 3.39 2.16 2.13 3.645 4.335 3.645 7.935v12.075Zm-25.59-1.5V31.5h22.545v1.485c0 .825-.675 1.5-1.515 1.5H3.015c-.84 0-1.515-.675-1.515-1.5Zm22.545-10.5c0-12-22.545-12-22.545 0h22.545ZM1.53 25.5h22.5v3H1.53v-3Z"
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

export default FastFood
