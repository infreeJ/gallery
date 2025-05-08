

interface i {
    cookietap : boolean
    setCookietap :React.Dispatch<React.SetStateAction<boolean>>
    manageCookies : boolean
    setManageCookies : React.Dispatch<React.SetStateAction<boolean>>
}




export default function CookieCheck ({setCookietap, setManageCookies} : i) {
    return(
        <>
        
        <div className="preferences">
            <button className="cookie-exit" onClick={() => {setManageCookies(false); setCookietap((bool) => (!bool))}}>X</button>
            <h3 className="cookie-h3">Cookie preferences</h3>
            <span style={{fontSize: '0.8rem', position: 'relative', top: '-20px', color: '#444444'}}>Check the boxes for the cookie categories you allow our site to use</span>
            <div className="labelbox">
                <label><input type="checkbox" checked disabled/>Strictly necessary</label>
                <p style={{fontSize: '0.7rem'}}>Required for the website to function and cannot be disabled.</p>
            </div>
            <div className="labelbox">
                <label><input type="checkbox"/>Preferences and functionality</label>
                <p style={{fontSize: '0.7rem'}}>Improve your experience on the website by storing choices you make about how it should function.</p>
            </div>
            <div className="labelbox">
                <label><input type="checkbox"/>Statistics</label>
                <p style={{fontSize: '0.7rem'}}>Allow us to collect anonymous usage data in order to improve the experience on our website.</p>
            </div>
            <div className="labelbox">
                <label><input type="checkbox"/>Marketing</label>
                <p style={{fontSize: '0.7rem'}}>Allow us to identify our visitors so that we can offer personalised, targeted marketing.</p>
            </div>
            <span className="save-btn" onClick={() => {setManageCookies(false)}}>Save preferences</span>
        </div>
        
        
        </>
    )
}