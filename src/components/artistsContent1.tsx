export default function ArtistsContent1 () {
    return (
        <>
        <div className="artistsContent-wrapper">
            <div className="artistsContent">
            <img className="artistsContent-img" style={{backgroundImage: 'url(../public/content1.jpg)'}}/>
                <div className="artistsContent-text">
                    <span style={{fontSize: '2rem', fontWeight: '250', letterSpacing: '5px'}}>Philippe Parreno</span>
                    <span style={{fontSize: '0.9rem', fontWeight: '300', letterSpacing: '2px'}}>Johyun Gallery_Dalmaji</span>
                    <span style={{fontSize: '0.8rem', fontWeight: '200', letterSpacing: '2px'}}>12 April - 1 June 2025</span>
                    <hr className="artistsContent-hr"></hr>
                    <span style={{fontSize: '0.8rem', fontWeight: '300'}}>A joint project by Esther Schipper and Johyun Gallery</span>
                    <span style={{fontSize: '0.9rem', letterSpacing: '0.5px', lineHeight: '30px'}}>프랑스 작가 필립 파레노의 전시를 조현화랑에서 4월 12일에 개최한다. 
                        조현화랑의 이번 전시는 다양한 동시대 미디어 아트들을 선보이고자 하는 기획 의도로 부산 전역의 국공립, 사립 미술관, 갤러리, 대안공간 등 
                        다양한 미술 관련 기관들이 합심하여서 참여하는 디지털·미디어 아트 전시 ‘루프 랩 부산’의 일환이다. 
                        조현화랑은 이번 전시를 위해 지난달 서울에 확장 이전한 독일의 갤러리 에스더쉬퍼와 긴밀하게 협업했다. 
                        두 갤러리의 협업 결과 이번 전시에서는 필립 파레노의 대표 작품인 마키 시리즈가 설치되었고, 영상 작업도 만나볼 수 있다.</span>
                </div>
            </div>
        </div>
        </>
    )
}