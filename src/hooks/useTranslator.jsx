import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const useTranslator = (eng, esp) => {
   
    /**
     *      En órden de que este hook funcione el primer parámetro
     *      de la función tiene que la versión en inglés y el segundo
     *      debe ser la versión en español.
     */

    const { english } = useContext(LanguageContext);

    return english ? eng : esp;
}
 
export default useTranslator;