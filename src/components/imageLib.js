import * as React from "react"
import * as imStyles from "./imageLib.module.css"

export default function ImageLib(props) {
  return (
    <div className={imStyles.children}>
      <h1>{props.header}</h1>
      {props.children}
    </div>
  )
}
