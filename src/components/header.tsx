import { useNavigate } from "react-router-dom"

interface i {
    scrollNum : boolean
}

export default function Header ({scrollNum}: i) {



    const navigate = useNavigate();


    return(
    <>
    <nav>
        <div className='nav' style={{maxHeight: scrollNum ? '90px' : '0px'}}>
        <span className='logo' onClick={ () => {navigate("/")}}>Johyun Gallery</span>
        <div className='category'>
            <span className='category-artists' onClick={ () => {navigate("/artists")}}>ARTISTS</span>
            <span className='category-exhibitions' onClick={ () => {navigate("/exhibitions")}}>EXHIBITIONS</span>
            <span className='category-news' onClick={ () => {navigate("/news")}}>NEWS</span>
        </div>
        </div>
    </nav>
    </>

    )

}