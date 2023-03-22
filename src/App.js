import { useEffect, useState } from 'react'
import Player from './views/Player'
import Progress from './views/Progress'
import { get } from './request'
import './App.css';

// TODO: Router
function App() {
  const [text, setText] = useState("")

  const getText = async () => {
    const response = await get('https://v1.hitokoto.cn')  
    const { hitokoto, from_who } = response || {}

    setText(`${hitokoto}--${from_who || "佚名"}`)
  }

  useEffect(() => {
    
    const timer = setInterval(() => {
      getText()
    }, 1500)

    return () => clearInterval(timer)

  }, [])

  return (
    <div className="App">
      <p id="hitokoto">{ text || ":D 获取中..."}</p>
      <Player />
      <Progress />
    </div>
  );
}

export default App;