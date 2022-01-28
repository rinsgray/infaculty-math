// Step 1: Import React
import * as React from 'react'
import  RowBlock  from '../components/twoColumnBlock'
import  InsideBlock  from '../components/insideBlock'
import  Layout  from '../components/layout'
import  ImageBlock  from '../components/threeColumnBlock'
import  ImageLib  from '../components/imageLib'

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
        <ImageLib>
        <ImageBlock
          left = <p></p>
          mid = <p></p>
          right = <p></p>
        />
        </ImageLib>
    </Layout>
  )
}
