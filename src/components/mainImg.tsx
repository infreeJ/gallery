import { useEffect, useState } from "react"




export default function MainImg() {

    const [imgNum, setImgNum] = useState(1);

    function imgChange() {
        return {
            backgroundImage: `url(/mainImg${imgNum}.jpg)`,
    }
}




    function imgBtn(i:string) {
        switch(i){
            case 'left' :
                if(imgNum > 1) {
                    setImgNum(imgNum-1);
                } else if(imgNum == 1) {
                    setImgNum(3)
                }
                break
                
            case 'right' :
                if(imgNum < 3) {
                    setImgNum(imgNum+1);
                } else if(imgNum == 3) {
                    setImgNum(1)
                }
                break
            
        }
    }
    
    
    return(
        <>
        <div className="main" style={imgChange()}>
            <div className="main-text">
                <span>gate front main entrance</span>
                <span>2025.5.5 - 2025.7.24 GALLERY_SEOUL</span>
            </div>
            <div className="main-btn">
                <span onClick={() => {imgBtn('left')}}>⇦</span>
                <span onClick={() => {imgBtn('right')}}>⇨</span>
            </div>
        </div>
        </>
    )
}