
interface i {
    imgBtn : (i : 'left' | 'right') => void
}

export default function MainText ({imgBtn} : i) {
    return(
        <>
        <div className="main-wrapper">
            <div className="main-text">
                <span className="main-text-title">PHILIPPE PARRENO</span>
                <span className="main-text-content">2025.5.5 - 2025.7.24 GALLERY_SEOUL</span>
            </div>
            <div className="main-btn">
                <span onClick={() => {imgBtn('left')}}>⇦</span>
                <span onClick={() => {imgBtn('right')}}>⇨</span>
            </div>
        </div>
        </>
    )
}