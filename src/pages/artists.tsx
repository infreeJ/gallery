interface Props {
    titleName : string;
}


export default function ArtistsPage({titleName} : Props) {

    return(
        <>
        <div className="titleBox">
            <span className='titleName'>{titleName}</span>
        </div>
        <div className="artitst-wrapper">
            <div style={{display: "flex", marginBottom: '50px'}}>
                <span style={{color: '#999999', letterSpacing: '2px', fontSize: '0.8rem'}}>ARTISTS</span>
                <hr className="artists-line"></hr>
            </div>
            <div className="artitstList">
                <span className="artists-one">AHN CHANG HONG</span>
                <span className="artists-one">YOON JONGSUK</span>
                <span className="artists-one">BOSCO SODI</span>
                <span className="artists-one">LEE BAE</span>
                <span className="artists-one">PAIK NAM JUNE</span>
                <span className="artists-one">HAN SOON JA</span>
                <span className="artists-one">BOOMOON</span>
                <span className="artists-one">KANG KANG HOON</span>
                <span className="artists-one">HONG SOUN</span>
                <span className="artists-one">CHUNG CHANG-SUP</span>
                <span className="artists-one">YUN HYONG KEUN</span>
                <span className="artists-one">KISHIO SUGA</span>
                <span className="artists-one">ALAN CHARLTON</span>
                <span className="artists-one">KIM CHONG HAK</span>
                <span className="artists-one">JO JONG SUNG</span>
                <span className="artists-one">PHILIPPE FRIZE</span>
                <span className="artists-one">JUNG KWANG HO</span>
                <span className="artists-one">KIM TAEK SANG</span>
                <span className="artists-one">BERNARD FRIZE</span>
                <span className="artists-one">LEE KWANG HO</span>
                <span className="artists-one">CLAUDE VIALLAT</span>
                <span className="artists-one">KIM HONG JOO</span>
                <span className="artists-one">KWON DAE SUP</span>
                <span className="artists-one">KIM JI WON</span>
                <span className="artists-one">CHOI BYUNG HOON</span>
                <span className="artists-one">LEE SO YEUN</span>
                <span className="artists-one">PETER ZIMMERMANN</span>
                <span className="artists-one">JEON HYUNSUN</span>
                <span className="artists-one">JIN MEYERSON</span>
                <span className="artists-one">AHN JISAN</span>
                <span className="artists-one">PARK SEO-BO</span>
            </div>

            <div style={{display: "flex", marginTop: '50px', marginBottom: '50px'}}>
                <span style={{color: '#999999', letterSpacing: '2px', fontSize: '0.8rem'}}>PROJECT</span>
                <hr className="artists-line"></hr>
            </div>
            <div className="artitstList">
                <span className="artists-one">ANDERS KRISAR</span>
                <span className="artists-one">ROH CHOONG HYUN</span>
                <span className="artists-one">GEORGES ROUSSE</span>
                <span className="artists-one">HWANG JI HAE</span>
                <span className="artists-one">YAYOI KUSAMA</span>
                <span className="artists-one">AYA TAKANO</span>
                <span className="artists-one">YIM JA HYUK</span>
                <span className="artists-one">PHILIPPE PARRENO</span>
            </div>
            <br/><br/><br/><br/><br/><hr/><br/><br/>
        </div>

        </>
    )
}