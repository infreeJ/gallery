interface i {
    cookietap : boolean
    setCookietap :React.Dispatch<React.SetStateAction<boolean>>
    manageCookies : boolean
    setManageCookies : React.Dispatch<React.SetStateAction<boolean>>
}



export default function Overlay ({setCookietap, setManageCookies} : i) {
    return (
        <>
        <div className="overlaybox" onClick={() => {setManageCookies(false); setCookietap((bool) => (!bool))}}>
        </div>
        </>
    )
}