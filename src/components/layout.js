import * as React from "react"
import { Link } from "gatsby"
import * as layoutStyles from "./layout.module.css"
import Header from "./header"
import RowBlock from "./twoColumnBlock"

export default function Layout(props) {
  function isActive( {isCurrent} ) {
    return isCurrent ? {className: "layoutStyles.active"} : null
  }
  return (
    <div>
    <RowBlock
    left =
    <div class={layoutStyles.topmenu}>
    <Header headerText="infacultyMath" />
    </div>
    right =
    <div className={layoutStyles.topmenu}>
    <ul>

    <li><Link to = '/materials/' getProps={isActive}><p>Материалы</p></Link></li>
    <li><Link to = '/schedule/' getProps={isActive}><p>Занятия</p></Link></li>
    <li><Link to = '/tasks/' getProps={isActive}><p>Сборник задач</p></Link></li>
    <li><Link to = '/articles/' getProps={isActive}><p>Статьи</p></Link></li>


    </ul>
    </div>
    />
    <div className={layoutStyles.children}>
      {props.children}
    </div>
    <div className={layoutStyles.bottom_page}>

    </div>
    </div>
  )
}
