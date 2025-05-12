interface Props {
    titleName : string;
}


export default function ArtistsPage({titleName} : Props) {

    return(
        <>
        <div className="titleBox">
            <span className='titleName'>{titleName}</span>
        </div>
        </>
    )
}