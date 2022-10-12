import * as React from "react"
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg"

const recent1 = (props) => (
  <Svg
    width={65}
    height={65}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={65} height={65} rx={15} fill="url(#a)" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.005)" />
      </Pattern>
      <Image
        id="b"
        width={200}
        height={200}
        xlinkHref="data:image/jpeg;base64,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"
      />
    </Defs>
  </Svg>
)

export default recent1