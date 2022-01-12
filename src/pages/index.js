// Step 1: Import React
import * as React from 'react'
import  Layout  from '../components/layout'
import  RowBlock  from '../components/twoColumnBlock'
import  InsideBlock  from '../components/insideBlock'

export default function Home(){
  return(
    <Layout header='Главная'>
    <RowBlock
      blockHeader = 'ЕГЭ'
      left = <div>
        <InsideBlock inheader='Раздел 1'>
        <ul>
          <li> <a href='https://google.com'>Пункт 1 </a></li>
          <li> Пункт 2 </li>
        </ul>
        </InsideBlock>
        <InsideBlock inheader='Раздел 2'>
        <ul>
          <li> Пункт 3 </li>
          <li> Пункт 4 </li>
        </ul>
        </InsideBlock>
      </div>
      right = <div>
        <InsideBlock>
        Просто текст
        </InsideBlock>
      </div>
    />

    <RowBlock
      blockHeader = 'Блок№2'
      left = <InsideBlock> </InsideBlock>
      right = <InsideBlock> </InsideBlock>
    />
    </Layout>
  )
}
