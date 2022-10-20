import './App.css';
import {ProgressBar, StepOne, StepTwo, StepThree} from "./components";
import { useData } from './dataContext';

function App() {

  const { dataState } = useData();

  return (
    <div className="App">
      <form data-multi-step className="multi-step-form" id="multi-step-form">
      <ProgressBar />
      <StepOne isActive={dataState.step1.active} />
      <StepTwo isActive={dataState.step2.active} />
      <StepThree isActive={dataState.step3.active} />
    </form>
    </div>
  );
}

export default App;
