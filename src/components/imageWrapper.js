import * as React from "react"
import * as wrapStyles from "./imageWrapper.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function ImageWrap(props) {
  return (
    <div className = {wrapStyles.inblock}>
      <div>  {props.children}   </div>
    </div>
  )
}
