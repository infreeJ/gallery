import { useState } from 'react';
import CookieCheck from './cookieCheck' ;

    interface i {
        ac : boolean
        setAc : React.Dispatch<React.SetStateAction<boolean>>
    }

export default function Cookie ({ac, setAc} : i) {

    const [checkMove, setCheckMove] = useState(false)

    return(
        <>
        <div className="cookiebox">
            <div className="cookiebox-policybox">
                <span>This website uses cookies</span>
                <span style={{color: '#818181'}}>This site uses cookies to help make it more useful to you. Please contact us to find out more about our Cookie Policy.</span>
            </div>
            <div className="cookiebox-acceptbox">
                <span style={{color: '#999999', letterSpacing: '3px', cursor: 'pointer'}} onClick={() => {setCheckMove(true)}}>Manage cookies</span>
                <span className="cookiebox-acceptbox-accept" onClick={() => {setAc((bool) => (!bool))}}>Accept</span>
            </div>
        </div>
        {checkMove ? <CookieCheck cm = {checkMove} setCm = {setCheckMove}/> : <></>}
        </>
    )
}