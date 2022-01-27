// Step 1: Import React
import * as React from 'react'
import  Layout  from '../components/layout'
import  RefBlock  from '../components/refBlock'
import * as refStyles from "../components/refBlock.module.css"

export default function Home(){
  return(
    <Layout header='Материалы'>
      <div className={refStyles.refblock}>
      <h2>Ссылки</h2>
      </div>

      <RefBlock rheader='ЕГЭ ОГЭ'>
        <ol>
        <li><a href='http://alexlarin.net/'>http://alexlarin.net/</a> - сильные варианты, выкладываются еженедельно в учебном году, в конце отведённой недели появляются ответы и решения второй части на форуме. Задачи хорошие, сильнее школьного уровня и ЕГЭ последних лет.</li>
        <li><a href='https://math100.ru/'>https://math100.ru/</a> - подборки однотипных задач с ответами и неплохие варианты + варианты СтатГрада, приближенные по уровню к ЕГЭ </li>
        <li><a href='https://ege.sdamgia.ru/'>https://ege.sdamgia.ru/</a> - Решу ЕГЭ и <a href='https://math-oge.sdamgia.ru/'>https://math-oge.sdamgia.ru/</a> - Решу ОГЭ.  </li>
        </ol>
      </RefBlock>

      <RefBlock rheader='Олимпиады'>
        <ol>
        <li><a href='https://mccme.ru/'>https://mccme.ru/</a> - Московский центр непрерывного математического образования.</li>
        <li><a href='https://www.problems.ru/'>https://www.problems.ru/</a> - огромный каталог олимпиадных задач.</li>
        <li><a href='http://mathus.ru/'>http://mathus.ru/</a> - главные вдохновители. Отличные подборки по олимпиадным задачам с указанием года и темы. Удобно для тренировки олимпиадников.</li>
        <li><a href='http://mmmf.msu.ru/'>http://mmmf.msu.ru/</a> - Малый Мехмат МГУ</li>
        <li><a href='http://games-math.ru/'>http://games-math.ru/</a> - сайт организации и проведения всероссийских игр для 4-7 классов. Прекрасные турниры и задачи</li>
        </ol>
      </RefBlock>

      <RefBlock rheader='Инструменты'>
        <ol>
        <li><a href='https://www.geogebra.org/'>https://www.geogebra.org/</a> - геометрический плоттер динамических чертежей</li>
        <li><a href='https://www.wolframalpha.com/'>https://www.wolframalpha.com/</a> - WolframAlpha, БД+калькулятор</li>
        </ol>
      </RefBlock>
    </Layout>
  )
}
