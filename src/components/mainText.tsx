import { useEffect } from "react";

interface i {
    imgBtn : (i : 'left' | 'right') => void
    imgNum : number
}

export default function MainText ({imgBtn, imgNum} : i) {

    // text change
    function title() {
        switch(imgNum) {
        case 1:
            return ('PHILIPPE PARRENO');
        case 2:
            return ('COLLECTIONS')
        case 3:
            return ('CHUNG CHANG-SUP I KWON DEA SUP')
    }
    }

    function content() {
        switch(imgNum) {
        case 1:
            return ('2025.5.5 - 2025.7.24 GALLERY_SEOUL');
        case 2:
            return ('2024.11.8 - 2025.5.31 JOHYUN GALLERY HAEUNDAE')
        case 3:
            return ('2025.3.6 - 2025.5.11 JOHYUN GALLERY_SEOUL')
    }
    }


    
    // text, btn color change
    const btnColor = ['', 'white', 'black', 'white']



    return(
        <>
        <div className="main-wrapper">
            <div className='mainTextBox'>
                <div className="main-text">
                    <span className="main-text-title" style={{color: btnColor[imgNum]}}>{title()}</span>
                    <span className="main-text-content" style={{color: btnColor[imgNum]}}>{content()}</span>
                </div>
                <div className="main-btn">
                    <span onClick={() => {imgBtn('left')}} style={{color: btnColor[imgNum]}}>‹</span>
                    <span onClick={() => {imgBtn('right')}} style={{color: btnColor[imgNum]}}>›</span>
                </div>
            </div>
        </div>
        </>
    )
}