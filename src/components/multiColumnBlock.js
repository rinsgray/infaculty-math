import * as React from "react"
import * as blockStyles from "./multiColumnBlock.module.css"

export default function ImageBlock(props) {
  return (
    <div>
      <h3>{props.blockHeader}</h3>
      <div className = {blockStyles.row}>
        <div className = {blockStyles.column}>{props.c1}</div>
        <div className = {blockStyles.column}>{props.c2}</div>
        <div className = {blockStyles.column}>{props.c3}</div>
        <div className = {blockStyles.column}>{props.c4}</div>
      </div>
    </div>

  )
}
