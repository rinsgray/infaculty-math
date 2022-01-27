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
        <ol>
          <li>-</li>
          <li>Вероятности</li>
          <li>-</li>
          <li>-</li>
          <li>-</li>
          <li>-</li>
          <li>-</li>
          <li>-</li>
          <li>-</li>
          <li>-</li>
          <li>-</li>
        </ol>
        </InsideBlock>

      </div>
      right = <div>
      <InsideBlock inheader='Вторая часть'>
      <ol start='12'>
        <li>Уравнения </li>
        <li>Стереометрия </li>
        <li>Неравенства </li>
        <li>Экономика
        <ol type='a'>
          <li><a href='https://drive.google.com/file/d/1buhJ99x30lROK8Wo0N5LEtv56gdeEMki/view?usp=sharing'>Вклады-кредиты</a></li>
          <li>Оптимальный выбор
            <ol type='i'>
              <li>Линейные</li>
              <li><a href='https://drive.google.com/file/d/1ZTR0tHcJuNsVOk4FB5Az8fUOjpQWRO1c/view?usp=sharing'>Нелинейные целевые функции</a></li>
            </ol>
          </li>
        </ol>
        </li>
        <li>Планиметрия </li>
        <li>Параметр
          <ol type='a'>
            <li><a href='https://drive.google.com/file/d/1UBETa_y77iLMwuzvHU51JAcR76WuIToP/view?usp=sharing'>Линейные и сводимые к ним уравнения и неравенства с параметром </a></li>
          </ol>
        </li>
      </ol>
      </InsideBlock>
      </div>
    />

    <RowBlock
      left = <InsideBlock inheader='Алгебра'>
      <ul type='disk'>
        <li><a href = 'https://drive.google.com/open?id=1W8uWyF12oCb5e7NFzReznCdbU7qbdtXz&authuser=bjashon%40gmail.com&usp=drive_fs'>Неравенства с модулем</a></li>
        <li><a href = 'https://drive.google.com/file/d/1Zh3s5eTqJe6Ndy6hKErLIZ8YErwhAe8g/view?usp=sharing'>Логарифмические неравенства</a></li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      </InsideBlock>
      right = <InsideBlock inheader='Планиметрия'>
      <ul type='disk'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      </InsideBlock>
    />
    <RowBlock
      left = <InsideBlock inheader='Олимпиадное'>
      <ul type='disk'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      </InsideBlock>
      right = <InsideBlock inheader='Стереометрия'>
      <ul type='disk'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      </InsideBlock>
    />
    </Layout>
  )
}
