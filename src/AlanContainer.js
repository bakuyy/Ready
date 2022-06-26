import React, {useEffect, useRef} from "react";
import alanBtn from '@alan-ai/alan-sdk-web';


const AlanContainer = () => {

    const rootElRef = useRef(null);

    useEffect(() => {
    alanBtn({
        key: '4b821ce88a6acea52be28217cfbe96aa2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
            if (commandData.command === 'go:back') {
            // Call the client code that will react to the received command
            }
        }
    });
    }, []);

    return(
        <div className = "alan-btn-container">
            <div ref={rootElRef}></div>
        </div>
    )
}

export default AlanContainer