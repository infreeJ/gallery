import { useEffect, useState } from "react"


export default function MainImg() {

    const [imgNum, setImgNum] = useState(1);

    function aaa() {
        return {backgroundImage: `url(/mainImg${imgNum}.jpg)`};
    }

    function imgBtn(i:string) {
        switch(i){
            case 'left' :
            setImgNum(imgNum-1);
            break
            case 'right' :
            setImgNum(imgNum+1);
            break
        }
    }
    


    return(
        <>
        <div className="main" style={aaa()}>
            <div className="main-text">
                <span>gate front main entrance</span>
                <span>2025.5.5 - 2025.7.24 GALLERY_SEOUL</span>
            </div>
            <div className="main-btn">
                <span onClick={() => {imgBtn('left')}}>왼쪽</span>
                <span onClick={() => {imgBtn('right')}}>오른쪽</span>
            </div>
        </div>
        </>
    )
}