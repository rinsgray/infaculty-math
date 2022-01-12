import * as React from "react"
import * as insideStyles from "./insideBlock.module.css"

export default function InsideBlock(props) {
  return (
    <div className = {insideStyles.inblock}>
      <h3>{props.inheader}</h3>
      <div>  {props.children}    </div>
    </div>
  )
}
