import {useEffect, useState} from "react";
import './MoneyRain.css'

function MoneyRain({onFinished}: { onFinished: () => void }) {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const audio = new Audio('/hereComesTheMoneeey.mp3')
        audio.play()

        const moneyRainTimer = setTimeout(() => {
            setVisible(false)
            onFinished()
        }, 10000)

        return () => {
            clearTimeout(moneyRainTimer)
        }
    }, [onFinished])

    if (!visible) return null

    return (
        <div className='money-rain-overlay'>
            {Array.from({length: 150}).map((_, i) => {
                const left = Math.random() * 100 // random position from the left in percent
                const delay = Math.random() * 6.5  // random start delay in seconds
                const size = 1.5 + Math.random() * 2.5 // random size between 1.5rem and 3rem

                return (
                    <span
                        key={i}
                        className='money-rain'
                        style={{
                            left: `${left}%`,
                            animationDelay: `${delay}s`,
                            animationDuration: `${3}s`, //how fast the animation is in seconds
                            fontSize: `${size}rem`,
                        }}
                    >
                        {'💵'}
                    </span>
                )
            })}
        </div>
    )
}

export default MoneyRain

