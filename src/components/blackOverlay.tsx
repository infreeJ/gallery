
interface Props {
    blackBool : boolean
}

export default function BlackOverlay ({blackBool }: Props) {


    const blackOut = function () {
        if (blackBool) {
            return {
                opacity : 1
                
            }
        } else {
            return {
                opacity : 0,
                transition: 'opacity 0.5s ease-in'
            }
        }
    }

    return(
        <>
        <div className="black-overlay" style={{...blackOut()}}>
            
        </div>
        </>
    )
}