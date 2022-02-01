// Step 1: Import React
import * as React from 'react'
import  RowBlock  from '../components/twoColumnBlock'
import  InsideBlock  from '../components/insideBlock'
import  Layout  from '../components/layout'
import  ImageBlock  from '../components/multiColumnBlock'
import  ImageLib  from '../components/imageLib'
import  ImageWrap  from '../components/imageWrapper'
import { StaticImage } from "gatsby-plugin-image"

export default function Home(){
  return(
    <Layout header='Статьи'>
        Статьи — сборник лекций, которые написаны для улучшение понимания принципов и идей.
        <RowBlock
          left = <InsideBlock inheader='Алгебра'>
          <ul type='disk'>
            <li><a href = 'https://infacultymath.notion.site/2d87b201c3344c0893a8bee5e01810c5'>Система vs Совокупность</a></li>
            <li><a href = 'https://infacultymath.notion.site/6b8bc36f14d84d48b8a7217b6ef9fc40'>Метод областей</a></li>
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
            <li><a href='https://infacultymath.notion.site/3ebd8bbc8138468dbbfcf1e3696838e6'>Комбинаторика</a></li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
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
        <h2>Памятки</h2>
        <p>Листочки - краткие яркие памятки. К некоторым из их прилагаются лекции. Памятками стоит пользоваться, если всё что написанно на них понятно. </p>
        <ImageLib
        header = 'Планиметрия'>
          <ImageBlock
            c1 = <ImageWrap><StaticImage src = '../images/углы.png' /></ImageWrap>
            c2 = <ImageWrap><StaticImage src = '../images/равенство_треугольников.png' /></ImageWrap>
            c3 = <ImageWrap><StaticImage src = '../images/подобие_треугольников.png' /></ImageWrap>
            c4 = <ImageWrap><StaticImage src = '../images/четырёхугольники.png' /></ImageWrap>
          />
          <ImageBlock
            c1 = <ImageWrap><StaticImage src = '../images/замечательные точки.png' /></ImageWrap>
            c2 = <ImageWrap><StaticImage src = '../images/окружность.png' /></ImageWrap>
            c3 = <ImageWrap><StaticImage src = '../images/Прямоугольный треугольник.png' /></ImageWrap>
            c4 = <ImageWrap><StaticImage src = '../images/Площади треугольников.png' /></ImageWrap>
          />
          <ImageBlock
            c1 = <ImageWrap><StaticImage src = '../images/Теорема Синусов и Косинусов.png' /></ImageWrap>
          />
        </ImageLib>
        <ImageLib
        header = 'Алгебра'>
          <ImageBlock
            c1 = <ImageWrap><StaticImage src = '../images/квадраты.png' /></ImageWrap>
            c2 = <ImageWrap><StaticImage src = '../images/прогрессии.png' /></ImageWrap>
            c3 = <ImageWrap><StaticImage src = '../images/Квадратные уравнения.png' /></ImageWrap>
            c4 = <ImageWrap><StaticImage src = '../images/Графики. Парабола.png' /></ImageWrap>
          />
          <ImageBlock
            c1 = <ImageWrap><StaticImage src = '../images/Графики. Прямая.png' /></ImageWrap>
            c2 = <ImageWrap><StaticImage src = '../images/степени.png' /></ImageWrap>
            c3 = <ImageWrap><StaticImage src = '../images/ОДЗ.png' /></ImageWrap>
            c4 = <ImageWrap><StaticImage src = '../images/Параметр1.png' /></ImageWrap>
          />
          <ImageBlock
            c1 = <ImageWrap><StaticImage src = '../images/Логарифм1новые.png' /></ImageWrap>
            c2 = <ImageWrap><StaticImage src = '../images/Логарифм-2.png' /></ImageWrap>
            c3 = <ImageWrap><StaticImage src = '../images/проиводная 1.png' /></ImageWrap>
            c4 = <ImageWrap><StaticImage src = '../images/проиводная 2.png' /></ImageWrap>
          />
          <ImageBlock
            c1 = <ImageWrap><StaticImage src = '../images/Тригонометрия 1.png' /></ImageWrap>
            c2 = <ImageWrap><StaticImage src = '../images/Тригонометрия 2.png' /></ImageWrap>
            c3 = <ImageWrap><StaticImage src = '../images/Подбираемые выплаты.png' /></ImageWrap>
            c4 = <ImageWrap><StaticImage src = '../images/модуль.png' /></ImageWrap>
          />
        </ImageLib>
        <ImageLib
        header = 'Стереометрия'>
        <ImageBlock

          c2 = <ImageWrap><StaticImage src = '../images/Правильные многогранники.png' /></ImageWrap>
          c3 = <ImageWrap><StaticImage src = '../images/Стереометрия_большие файлы.png' /></ImageWrap>

        />
        </ImageLib>
    </Layout>
  )
}
