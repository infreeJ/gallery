export default function ArtistsContent2 () {
    return (
        <>
        <div className="artistsContent-wrapper">
            <div className="artistsContent">
                <div className="artistsContent-img" style={{backgroundImage: 'url(../public/content2.jpg)'}}/>
                <div className="artistsContent-text">
                    <span style={{fontSize: '2rem', fontWeight: '250', letterSpacing: '5px'}}>Collections</span>
                    <span style={{fontSize: '0.9rem', fontWeight: '300', letterSpacing: '2px'}}>Johyun Gallery_Haeundae</span>
                    <span style={{fontSize: '0.8rem', fontWeight: '200', letterSpacing: '2px'}}>8 November 2024 - 31 May 2025</span>
                    <hr className="artistsContent-hr"></hr>
                    <span style={{fontSize: '0.8rem', fontWeight: '300'}}>Johyun Gallery_Haeundae will be presenting a special exhibition from 
                        November 8th, 2024 to May 31th, 2025, featuring works by artists Lee Bae</span>
                    <span style={{fontSize: '0.9rem', letterSpacing: '0.5px', lineHeight: '30px'}}>2024년 11월 8일부터 2025년 5월 31일까지 조현화랑_해운대에서 
                        이배 작가의 작품으로 이루어진 소장전 전시를 선보인다.</span>
                </div>
            </div>
        </div>
        </>
    )
}