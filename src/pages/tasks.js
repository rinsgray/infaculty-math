// Step 1: Import React
import * as React from 'react'
import  Layout  from '../components/layout'
import  RowBlock  from '../components/twoColumnBlock'
import  InsideBlock  from '../components/insideBlock'

export default function Home(){
  return(
    <Layout header='Сборник&nbsp;задач'>
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
        <li>Неравенства
        <ol type='a'>
          <li><a href = 'https://drive.google.com/open?id=1W8uWyF12oCb5e7NFzReznCdbU7qbdtXz&authuser=bjashon%40gmail.com&usp=drive_fs'>Неравенства с модулем</a></li>
          <li><a href = 'https://drive.google.com/file/d/1Zh3s5eTqJe6Ndy6hKErLIZ8YErwhAe8g/view?usp=sharing'>Логарифмические неравенства</a></li>
          <li><a href='https://drive.google.com/file/d/1YiPzwjN9t5FbjFwYH1iaO5NtFXOHxfTT/view?usp=sharing'>Иррациональные неравенства</a></li>
        </ol>
        </li>
        <li>Экономика
        <ol type='a'>
          <li><a href='https://drive.google.com/file/d/1buhJ99x30lROK8Wo0N5LEtv56gdeEMki/view?usp=sharing'>Вклады-кредиты</a></li>
          <li><a href='https://drive.google.com/file/d/1hTdkc2wWfdYSxo1BsrO-QaR5O6UN6fd6/view?usp=sharing'>Подбираемые выплаты</a></li>
          <li>Оптимальный выбор
            <ol type='i'>
              <li>Линейные</li>
              <li><a href='https://drive.google.com/file/d/11x2_jnAQBcsA-y9RZKBGyTta-QFDVaI8/view?usp=sharing'>Нелинейные целевые функции</a></li>
            </ol>
          </li>
        </ol>
        </li>
        <li>Планиметрия </li>
        <li>Параметр
          <ol type='a'>
            <li><a href='https://drive.google.com/file/d/1UBETa_y77iLMwuzvHU51JAcR76WuIToP/view?usp=sharing'>Линейные и сводимые к ним уравнения и неравенства с параметром </a></li>
            <li><a href='https://drive.google.com/file/d/1_DT6q9RqhzCGq_xeVOPunOGdjQsXGFuZ/view?usp=sharing'>Квадратные уравнения</a></li>
            <li><a href='https://drive.google.com/file/d/1ovExKcWu53geRFSaRtf19dnLoVxxtrAG/view?usp=sharing'>Геометрические идеи. Формула расстояния между точками</a> </li>
          </ol>
        </li>
      </ol>
      </InsideBlock>
      </div>
    />

    <RowBlock
      left = <InsideBlock inheader='Планиметрия'>
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
    <RowBlock
      blockHeader = 'Олимпиадное'
      left = <InsideBlock inheader='Алгебра и алгоритмы'>
      <ul type='disk'>
        <li><a href = 'https://drive.google.com/file/d/1kWF3LjOF_4mtkv4HCusNaU9LlWaDr3AG/view?usp=sharing'>Чётность</a></li>
        <li><a href = 'https://drive.google.com/file/d/1mrpFTWbYWY9xU1ZZxNhLBVNErYbJwXeK/view?usp=sharing'>Принцип Дирихле</a></li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      </InsideBlock>
      right = <InsideBlock inheader='Планиметрия'>
      <ul type='disk'>
        <li><a href = 'https://drive.google.com/file/d/1nZT2SlpRMlwADbM2G3GBJxEEaAQqv1Xg/view?usp=sharing'>Прямая Симсона и Теорема Птолемея</a></li>
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
