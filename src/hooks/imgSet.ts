import { useState } from "react";


export default function ImgSet () : {imgNum : number; imgBtn : (i : 'left' | 'right') => void} {
        const [imgNum, setImgNum] = useState(1);
    
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
    return {imgNum, imgBtn}
}