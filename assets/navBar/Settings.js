import * as React from "react"
import { Settings } from "react-native"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Settings = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M23.925 16.175c.05-.375.075-.763.075-1.175 0-.4-.025-.8-.087-1.175l2.537-1.975a.613.613 0 0 0 .15-.762l-2.4-4.15c-.15-.276-.462-.363-.738-.276l-2.987 1.2a8.83 8.83 0 0 0-2.025-1.175L18 3.513A.605.605 0 0 0 17.4 3h-4.8c-.3 0-.537.212-.588.513l-.45 3.175c-.737.3-1.412.712-2.024 1.175l-2.988-1.2a.597.597 0 0 0-.737.274l-2.388 4.15c-.15.263-.1.588.15.763l2.538 1.975A7.336 7.336 0 0 0 6 15c0 .387.025.8.088 1.175L3.55 18.15a.613.613 0 0 0-.15.763l2.4 4.15c.15.274.463.362.738.274l2.987-1.2a8.83 8.83 0 0 0 2.025 1.175l.45 3.175c.063.3.3.513.6.513h4.8c.3 0 .55-.212.588-.512l.45-3.175c.737-.3 1.412-.7 2.024-1.175l2.988 1.2c.275.1.588 0 .738-.276l2.4-4.15c.15-.274.087-.587-.15-.762l-2.513-1.975ZM15 19.5a4.513 4.513 0 0 1-4.5-4.5c0-2.475 2.025-4.5 4.5-4.5s4.5 2.025 4.5 4.5-2.025 4.5-4.5 4.5Z"
        fill="#989898"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h30v30H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default Settings