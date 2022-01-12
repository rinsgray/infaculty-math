import * as React from "react"
import { Link } from "gatsby"
import * as layoutStyles from "./layout.module.css"
import Header from "./header"


export default function Layout(props) {
  return (
    <div>
    <div className={layoutStyles.topmenu}>
    <ul>
    <li><Header headerText="infacultyMath" /></li>
    <li><Link to = '/articles/'><p>Статьи</p></Link></li>
    <li><Link to = '/tasks/'><p>Сборник задач</p></Link></li>
    <li><Link to = '/schedule/'><p>Занятия</p></Link></li>
    <li><Link to = '/materials/'><p>Материалы</p></Link></li>
    </ul>
    </div>
    <div className={layoutStyles.children}>
      {props.children}
    </div>
    <div className={layoutStyles.bottom_page}>

    </div>
    </div>
  )
}
