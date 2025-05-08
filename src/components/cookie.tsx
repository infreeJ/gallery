    interface i {
        cookietap : boolean;
        setCookietap : React.Dispatch<React.SetStateAction<boolean>>;
        manageCookies : boolean;
        setManageCookies : React.Dispatch<React.SetStateAction<boolean>>;
    }

export default function Cookie ({cookietap, setCookietap, setManageCookies} : i) {



    return(
        <>
        <div className={`cookiebox ${cookietap ? 'open' : 'closed'}`}>
            <div className="cookiebox-policybox">
                <span>This website uses cookies</span>
                <span style={{color: '#818181'}}>This site uses cookies to help make it more useful to you. Please contact us to find out more about our Cookie Policy.</span>
            </div>
            <div className="cookiebox-acceptbox">
                <span style={{color: '#999999', letterSpacing: '3px', cursor: 'pointer'}} onClick={() => {setManageCookies(true); setCookietap((bool) => (!bool))}} >Manage cookies</span>
                <span className="cookiebox-acceptbox-accept" onClick={() => {setCookietap((bool) => (!bool))}}>Accept</span>
            </div>
        </div>
        </>
    )
}