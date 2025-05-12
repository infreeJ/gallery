import { useEffect, useState } from "react";


export default function HeaderDisable () : boolean {

    const [scrollNum, setScrollNum] = useState(true)
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(600)


    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    useEffect( () => {
    if(scrollY <= lastScrollY){
        setScrollNum(true)
    } else if (scrollY > lastScrollY){
        setScrollNum(false)
    }
    setLastScrollY(scrollY)
    }, [scrollY])

    return scrollNum
}