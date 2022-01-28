import * as React from "react"
import * as blockStyles from "./threeColumnBlock.module.css"

export default function ImageBlock(props) {
  return (
    <div>
      <h2>{props.blockHeader}</h2>
      <div className = {blockStyles.row}>
        <div className = {blockStyles.column}>{props.left}</div>
        <div className = {blockStyles.column}>{props.mid}</div>
        <div className = {blockStyles.column}>{props.right}</div>
      </div>
    </div>

  )
}
