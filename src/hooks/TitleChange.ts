import { useState } from "react";

export default function TitleChange() : {titleName : string; takeName : (n : string ) => void} {


    const [titleName, setTitleName] = useState('')

    const takeName = function (n : string) {
        switch (n) {
            case 'artists' :
                setTitleName('ARTISTS');
                break
            case 'exhibitions' :
                setTitleName('EXHIBITIONS');
                break
            case 'news' :
                setTitleName('NEWS');
                break
        }
        
    }
    return {titleName, takeName}
}