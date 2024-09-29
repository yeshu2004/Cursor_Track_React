import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cursor = ({ inView }) => {
    const circle = useRef(null)
    const mouse = useRef({
        x: 0,
        y: 0
    })

    useEffect(() => {

        const mouseMove = (e) => {
            const { clientX, clientY } = e
            mouse.current.x = clientX
            mouse.current.y = clientY
        }
        
        window.addEventListener('mousemove', mouseMove)

        const followMouse = () => {
            gsap.to(circle.current, {
                x: mouse.current.x,
                y: mouse.current.y,
                xPercent: -50,
                yPercent: -50,
                duration: 0.7,
                ease: 'power4.out'
            })

            requestAnimationFrame(followMouse)
        }
        window.requestAnimationFrame(followMouse)
        return () => { window.removeEventListener('mousemove', mouseMove) }
    }, [])
    useEffect(() => {
        gsap.to(circle.current, {
            width: inView ? 300 : 30,
            height: inView ? 300 : 30,
            duration: 0.6,
            ease: 'power3.out',
        })
    }, [inView])

    return (
        <div 
            ref={circle}
            className='bg-blue-500 rounded-full fixed top-0 left-0 mix-blend-exclusion pointer-events-none'>
        </div>
    )
}

export default Cursor
