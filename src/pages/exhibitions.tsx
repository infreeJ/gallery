import { useState } from "react";
import ArtistsContent1 from '../components/artistsContent1'
import ArtistsContent2 from '../components/artistsContent2'
import ArtistsContent3 from '../components/artistsContent3'
import ArtistsContent4 from '../components/artistsContent4'

import MiniContentArt1 from '../components/miniContentArt1'
import MiniContentArt2 from '../components/miniContentArt2'
import MiniContentArt3 from '../components/miniContentArt3'
import MiniContentArt4 from '../components/miniContentArt4'
import MiniContentArt5 from '../components/miniContentArt5'
import MiniContentArt6 from '../components/miniContentArt6'

interface Props {
    titleName : string;
}

export default function ExhibitionsPage({titleName} : Props) {

    const [place, setPlace] = useState(0);


    function handlePlace() : React.ReactNode {
        if(place == 0) {
            return (
            <>
            <ArtistsContent1/>
            <ArtistsContent2/>
            <ArtistsContent3/>
            <ArtistsContent4/>
            </>
            )
        } else if (place == 1) {
            return <ArtistsContent2/>
        } else if (place == 2) {
            return <ArtistsContent1/>
        } else if (place == 3) {
            return (
                <>
                <ArtistsContent3/>
                <ArtistsContent4/>
                </>
            )
        }
    }


        function handlePlaceMini() : React.ReactNode {
        if(place == 0) {
            return (
            <>
            <MiniContentArt1/>
            <MiniContentArt2/>
            <MiniContentArt3/>
            <MiniContentArt4/>
            <MiniContentArt5/>
            <MiniContentArt6/>
            </>
            )
        } else if (place == 1) {
            return (
                <>
                <MiniContentArt1/>
                <MiniContentArt2/>
                </>
            )
        } else if (place == 2) {
            return (
                <>
                <MiniContentArt3/>
                <MiniContentArt4/>
                </>
            )
        } else if (place == 3) {
            return (
                <>
                <MiniContentArt5/>
                <MiniContentArt6/>
                </>
            )
        }
    }
    

    return(
        <>
        <div className="titleBox">
            <span className='titleName'>{titleName}</span>
        </div>
        
        <div className="artitst-wrapper">
            <div className="selectText">
            <span onClick={() => {setPlace(0)}}>ALL</span>
            <span onClick={() => {setPlace(1)}}>HAEUNDAE</span>
            <span onClick={() => {setPlace(2)}}>DALMAJI</span>
            <span onClick={() => {setPlace(3)}}>SEOUL</span>
            </div>
            <div style={{display: "flex", marginBottom: '50px'}}>
                <span style={{color: '#999999', letterSpacing: '2px', fontSize: '0.8rem'}}>CURRENT</span>
                <hr className="artists-line"></hr>
            </div>
        </div>

        <br/><br/><br/>

        {handlePlace()}
        <div className="artitst-wrapper">
            <div style={{display: "flex", marginBottom: '50px'}}>
                <span style={{color: '#999999', letterSpacing: '2px', fontSize: '0.8rem'}}>CURRENT</span>
                <hr className="artists-line"></hr>
            </div>
        </div>

        <br/><br/><br/><br/><br/>
        
        <div className="content-grid">
        {handlePlaceMini()}
        </div>
        </>
    )
}