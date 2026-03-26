import {useEffect} from "react";
import './MoneyRain.css'

function MoneyRain({onFinished}: { onFinished: () => void }) {

    useEffect(() => {
        const audio = new Audio('/hereComesTheMoneeey.mp3')
        audio.play()

        setTimeout(() => {
            onFinished()
        }, 10000)

    }, [onFinished])


    return (
        <div className='money-rain-overlay'>
            {Array.from({length: 150}).map((_, index) => {
                const horizontalPosition = Math.random() * 100 // random position from the left in % on a horizontal
                const delay = Math.random() * 6.5  // random start delay in seconds
                const size = 1.5 + Math.random() * 2.5 // random size between 1.5rem and 3rem

                return (
                    <span
                        key={index}
                        className='money-rain'
                        style={{
                            left: `${horizontalPosition}%`,
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

