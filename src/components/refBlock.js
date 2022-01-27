import * as React from "react"
import * as refStyles from "./refBlock.module.css"

export default function RefBlock(props) {
  return (
    <div className = {refStyles.refblock}>
      <h3>{props.rheader}</h3>
      <div>  {props.children}    </div>
    </div>
  )
}
