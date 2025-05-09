import { use, useEffect, useState } from "react"



interface i {
    imgNum : number
    setImgNum : React.Dispatch<React.SetStateAction<number>>
}


export default function MainImg({imgNum, setImgNum} : i) {

    // img change
    
    
    function imgChange() {
        return {
            backgroundImage: `url(/mainImg${imgNum}.jpg)`,
    }
}




    // parallax
    const [scrollY, setScrollY] = useState(0)

    // useEffect(() => {
    //     const handScroll = () => { setScrollY(window.scrollY) };
    //     window.addEventListener('scroll', handScroll);;
    //     return () => window.addEventListener('scroll', handScroll);
    // }, [])

    function handleParallax() {
        return {
            transform : `translateY(${scrollY * 0.6}px)`
    }}

    // window.addEventListener('scroll', () => {
    //     setScrollY(window.scrollY)
    // })


        window.requestAnimationFrame(() => {
            setScrollY(window.scrollY)
        })


    // useEffect(() => {
    //     window.requestAnimationFrame(() => {
            
    //         setScrollY(window.scrollY)
    //     })
    // }, [scrollY])




    return(
        <>
        <div className="main" style={{ ...imgChange(), ...handleParallax() }}>
        </div>
        </>
    )
}