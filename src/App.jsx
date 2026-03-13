import { useState } from 'react'
import './App.css'

const MESSAGES = [
  '充電中... (残り99%)',
  '明日からがんばる',
  'やる気は見つかりませんでした',
  'エラー: やる気.exe が応答していません',
  'もう一回押せばいけるかも',
  'ちょっと待って、もう少し寝る',
  'やる気の在庫が切れました\n次回入荷は未定です',
  '押さなきゃよかった',
  'カフェイン不足のため起動できません',
  '今日はもういい',
  'スヌーズしますか？ [はい] [はい] [はい]',
  'やる気: NaN',
  'やる気スイッチ、実は飾りでした',
  '月曜日には絶対やります（金曜日の意見）',
  'ダウンロード中... 0% ━━━━━━━━━━ 永遠にかかります',
  'やる気が404: Not Found',
  '草でも生やしてろ',
  'そのやる気、どこにしまったっけ',
]

const REACTIONS = ['😴', '💤', '🥱', '😵', '🫠', '🤷', '😩', '🛌', '☕️', '📉', '❌', '🙈']

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function App() {
  const [message, setMessage] = useState(null)
  const [emoji, setEmoji] = useState('😴')
  const [count, setCount] = useState(0)
  const [shaking, setShaking] = useState(false)
  const [glowing, setGlowing] = useState(false)

  const handleClick = () => {
    setMessage(getRandomItem(MESSAGES))
    setEmoji(getRandomItem(REACTIONS))
    setCount(c => c + 1)
    setShaking(true)
    setGlowing(true)
    setTimeout(() => setShaking(false), 500)
    setTimeout(() => setGlowing(false), 800)
  }

  return (
    <div className="container">
      <h1 className="title">やる気スイッチ</h1>
      <p className="subtitle">押せばやる気が出るらしい</p>

      <button
        className={`switch-button ${shaking ? 'shake' : ''} ${glowing ? 'glow' : ''}`}
        onClick={handleClick}
      >
        <span className="button-emoji">{emoji}</span>
        <span className="button-label">押す</span>
      </button>

      {message && (
        <div className="message-box">
          <p className="message">{message}</p>
        </div>
      )}

      <p className="counter">
        {count === 0
          ? '一回押してみて'
          : count < 5
          ? `${count}回押した（なんかあると思ってる）`
          : count < 15
          ? `${count}回押した（まだ諦めてない）`
          : count < 30
          ? `${count}回押した（そろそろ気づいて）`
          : `${count}回押した　もういい加減にして`}
      </p>
    </div>
  )
}
