// Step 1: Import React
import * as React from 'react'
import  Layout  from '../components/layout'
import  RowBlock  from '../components/twoColumnBlock'
import  InsideBlock  from '../components/insideBlock'

export default function Home(){
  return(
    <Layout header='Сборник задач'>
    <RowBlock
      blockHeader = 'ЕГЭ'
      left = <div>
        <InsideBlock inheader='Первая часть'>
        <ul>
          <li>-</li>
          <li>Вероятности</li>
        </ul>
        </InsideBlock>

      </div>
      right = <div>
      <InsideBlock inheader='Вторая часть'>
      <ul>
        <li> Уравнения </li>
        <li> Стереометрия </li>
        <li> Неравенства </li>
        <li> Экономика
        <ul>
          <li>Вклады-кредиты
            <ul>
              <li>Подбираемые выплаты</li>
            </ul>
          </li>
        </ul>
        </li>
      </ul>
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
