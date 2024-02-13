import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="App w-full h-full items-center relative flex flex-col polka ">
      <div className='bg-white text-center justify-center rounded-md w-[90vw] font-bold absolute mt-5 text-3xl py-2'>Random Gifs</div>
      <div className='flex flex-col w-full items-center gap-y-10 '>
        <Random></Random>
        <Tag></Tag>
      </div>

    </div>
  );
}

export default App;
