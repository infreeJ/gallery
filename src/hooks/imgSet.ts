import { useState } from "react";


export default function ImgSet () : {imgNum : number; imgBtn : (i : 'left' | 'right') => void; overlayState : boolean} {
        const [imgNum, setImgNum] = useState(1);
        const [overlayState, SetOverlayState] = useState(true)
    
        function imgBtn(i:string) {
            SetOverlayState((bool => !bool))
            setTimeout(() => {
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
            }, 100);
        
    }
    return {imgNum, imgBtn, overlayState}
}