export default function YoutubeVideo () {
    return(
        <>
        <div className="youtube-wrapper">
            <iframe
                className="youtube-video"
                style={{ width: '80%', height: '100%' }}
                src="https://www.youtube.com/embed/-5qMyMkSikA?si=3XpbUEAS7LLgSLjy"
                title="YouTube video player"
                // frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            /> 
        </div>
        
        </>
    )
}