import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Nature = (props) => (
  <Svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M19.5 24.18c5.205-.615 9.255-5.04 9.255-10.425 0-5.805-4.695-10.5-10.5-10.5s-10.5 4.695-10.5 10.5c0 5.205 3.78 9.51 8.745 10.335V30h-9v3h21v-3h-9v-5.82Z"
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

export default Nature
