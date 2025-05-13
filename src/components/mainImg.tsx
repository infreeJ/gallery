import { useState } from "react"

interface i {
    imgNum : number
}

export default function MainImg({imgNum} : i) {

    // img change
    function imgChange() {
        return {
            backgroundImage: `url(/mainImg${imgNum}.jpg)`,
            
    }
}

    // parallax
    const [scrollY, setScrollY] = useState(0)

    function handleParallax() {
        return {
            transform : `translateY(${scrollY * 0.6}px)`
    }}
        window.requestAnimationFrame(() => {
            setScrollY(window.scrollY)
        })



    return(
        <>
        <div className="main" style={{ ...imgChange(), ...handleParallax() }}>
        </div>
        
        </>
    )
}