import { useEffect, useState } from 'react';

const useKeyPress = ( targetKey ) => {
    const [keyPressed, setKeyPressed] = useState(false);
    
    function downHandler({ characterCode }) {
        if (characterCode === targetKey) {
            setKeyPressed(true);
        }
    }

    function upHandler({ characterCode }) {
        if (characterCode === targetKey) {
            setKeyPressed(false);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        }
    }, []);

    return keyPressed;
}
 
export default useKeyPress;