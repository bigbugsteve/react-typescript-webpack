import './styles.css'
import IMAGE from './bank.png'
import CALENDAR from './calendar.svg'

export const App = () => {
    return <>
    <img src={IMAGE} alt="" width="300" />
    <img src={CALENDAR} alt="" width="300" />

    <h1>React Typescript Starter Template - 
        {process.env.NODE_ENV} {process.env.NAME}
        </h1>
    </>
}