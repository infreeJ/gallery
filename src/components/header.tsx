import { useNavigate } from "react-router-dom"

export default function Header () {

    const navigate = useNavigate();


    return(
    <>
    <nav>
        <div className='nav'>
        <span className='logo' onClick={ () => {navigate("/")}}>Gallery</span>
        <div className='category'>
            <span className='category-artists' onClick={ () => {navigate("/artists")}}>artists</span>
            <span className='category-exhibitions' onClick={ () => {navigate("/exhibitions")}}>exhibitions</span>
            <span className='category-news' onClick={ () => {navigate("/news")}}>news</span>
        </div>
        </div>
    </nav>
    </>

    )

}