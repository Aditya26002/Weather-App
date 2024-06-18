import Inputs from './Components/Inputs'
import TimeAndLoc from './Components/TimeAndLoc'
import TopButtons from './Components/TopButtons'

const App = () => {
  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br from-cyan-400 to-blue-700 shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLoc />
    </div>
  )
}

export default App