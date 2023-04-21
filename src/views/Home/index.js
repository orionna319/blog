import { useEffect, useState } from 'react'
import { get } from '../../request'
function Home() {
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
    <div style={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <p style={{ marginTop: '-64px' }} id="hitokoto">{ text || ":D 获取中..."}</p>
    </div>
  );
}

export default Home
