import MiniContentNews1 from '../components/miniContentNews1'
import MiniContentNews2 from '../components/miniContentNews2'
import MiniContentNews3 from '../components/miniContentNews3'
import MiniContentNews4 from '../components/miniContentNews4'
import MiniContentNews5 from '../components/miniContentNews5'
import MiniContentNews6 from '../components/miniContentNews6'


interface Props {
    titleName : string;
}

export default function NewsPage({titleName} : Props) {


    return(
        <>
        <div className="titleBox">
            <span className='titleName'>{titleName}</span>
        </div>
        <br/><br/><br/><br/><br/><br/>
        <div className="content-grid">
            <MiniContentNews1/>
            <MiniContentNews2/>
            <MiniContentNews3/>
            <MiniContentNews4/>
            <MiniContentNews5/>
            <MiniContentNews6/>
        </div>
        </>
    )
}