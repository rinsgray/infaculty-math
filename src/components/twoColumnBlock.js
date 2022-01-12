import * as React from "react"
import * as blockStyles from "./twoColumnBlock.module.css"

export default function RowBlock(props) {
  return (
    <div>
      <h2>{props.blockHeader}</h2>
      <div className = {blockStyles.row}>
        <div className = {blockStyles.column}>{props.left}</div>
        <div className = {blockStyles.column}>{props.right}</div>
      </div>
    </div>

  )
}
