import * as React from "react"
import { Link } from "gatsby"
import * as layoutStyles from "./layout.module.css"
import Header from "./header"
import RowBlock from "./twoColumnBlock"

export default function Layout(props) {
  const [menuActive, setMenuActive] = React.useState(false)
  const [hamClass, setHamClass] = React.useState(layoutStyles.hamburger)
  const [menuClass, setMenuClass] = React.useState(layoutStyles.navmenu)
  const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (menuActive){
      setHamClass(layoutStyles.cross)
      setMenuClass(layoutStyles.activemenu)
    }
    else {
      setHamClass(layoutStyles.hamburger)
      setMenuClass(layoutStyles.navmenu)
    }
  }
  const closeMenu = () =>{
    setHamClass(layoutStyles.hamburger)
    setMenuClass(layoutStyles.navmenu)
  }


    return (
    <div>

    <nav className={layoutStyles.navbar}>


      <Header headerText="InfacultyMath" />
      <ul className={menuClass}>
      <li><Link to = '/' onClick={closeMenu}><p>Главная</p></Link></li>
      <li><Link to = '/articles/' onClick={closeMenu}><p>Статьи</p></Link></li>
      <li><Link to = '/tasks/' onClick={closeMenu}><p>Сборник задач</p></Link></li>
      <li><Link to = '/materials/' onClick={closeMenu}><p>Материалы</p></Link></li>


      </ul>
      <div className={hamClass} onClick={toggleMenu}>
        <span className={layoutStyles.bar}></span>
        <span className={layoutStyles.bar}></span>
        <span className={layoutStyles.bar}></span>
      </div>
    </nav>

    <div className={layoutStyles.children}>
      <h1>{props.header}</h1>
      {props.children}
    </div>
    <div className={layoutStyles.bottom_page}>

    </div>
    </div>
  )
}
