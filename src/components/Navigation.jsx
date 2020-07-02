import React, { useContext } from 'react';
import Toggle from './Toggle';
import styles from './Navigation.module.css';
import logo from '../assets/img/logo.svg';
import { LanguageContext } from '../contexts/LanguageContext';

const Navigation = () => {
    
    const { english } = useContext(LanguageContext);

    const ESP = [
        {name:'nuestra Propuesta', link: '#proposal'}, 
        {name:'donde estamos', link:'#where'}, 
        {name:'carta', link: '#menu'}
    ];

    const ENG = [
        {name:'our proposal', link: '#proposal'}, 
        {name:'where', link:'#where'}, 
        {name:'our menu', link: '#menu'}
    ];

    const links = english ? ENG : ESP;

    //Down there social icons are in svg format (order: whatsapp, instagram, facebook).

    return (
        <header className={ styles.nav }>
            <img src={ logo } alt='La Parrilla Bar & Grill'/>
            <nav>
                <div className={ styles['social-icons'] }>
                    <a href="https://wa.me/">
                        <svg viewBox="0 0 180.83 180.83">
                            <path 
                                class="cls-1" 
                                d="M194.75,62a89.64,89.64,0,0,0-141,108.14L41,216.57,88.51,204.1A89.34,89.34,0,0,0,131.34,215h0c49.37,0,90.46-40.2,90.46-89.61C221.83,101.46,211.66,79,194.75,62ZM131.38,199.9a74.35,74.35,0,0,1-37.94-10.37l-2.7-1.61L62.55,195.3l7.51-27.49L68.29,165A74.49,74.49,0,0,1,184.05,72.72c14,14.09,22.68,32.78,22.64,52.68C206.7,166.48,172.43,199.9,131.38,199.9Zm40.85-55.78c-2.22-1.13-13.24-6.54-15.3-7.27s-3.55-1.13-5,1.13-5.77,7.27-7.1,8.8-2.62,1.7-4.84.57c-13.16-6.58-21.8-11.75-30.47-26.64-2.3-4,2.3-3.67,6.58-12.23a4.15,4.15,0,0,0-.2-3.92c-.57-1.13-5-12.15-6.9-16.63s-3.67-3.75-5-3.83S101.1,84,99.61,84a8.29,8.29,0,0,0-6,2.79c-2.06,2.26-7.83,7.67-7.83,18.69s8,21.68,9.12,23.17,15.78,24.1,38.27,33.83c14.21,6.14,19.78,6.66,26.88,5.61,4.32-.65,13.24-5.41,15.1-10.66s1.86-9.73,1.29-10.66S174.44,145.21,172.22,144.12Z" 
                                transform="translate(-41 -35.74)"
                            />
                        </svg>
                    </a>
                    <a href='https://instagram.com/'>
                        <svg viewBox="0 0 181.4 181.36">
                            <path 
                                class="cls-1" 
                                d="M124,80.51A46.5,46.5,0,1,0,170.5,127,46.42,46.42,0,0,0,124,80.51Zm0,76.73A30.23,30.23,0,1,1,154.23,127,30.28,30.28,0,0,1,124,157.23Zm59.24-78.63A10.85,10.85,0,1,1,172.4,67.76,10.82,10.82,0,0,1,183.25,78.61Zm30.8,11c-.69-14.53-4-27.4-14.65-38S175.93,37.69,161.4,37c-15-.85-59.85-.85-74.82,0-14.49.69-27.36,4-38,14.61S34.65,75,33.92,89.57c-.85,15-.85,59.85,0,74.82.69,14.53,4,27.4,14.65,38S72,216.32,86.57,217c15,.85,59.85.85,74.82,0,14.53-.69,27.4-4,38-14.65s13.92-23.47,14.65-38c.85-15,.85-59.81,0-74.78ZM194.7,180.46a30.6,30.6,0,0,1-17.24,17.24c-11.94,4.73-40.27,3.64-53.46,3.64s-41.56,1.05-53.46-3.64a30.6,30.6,0,0,1-17.24-17.24c-4.73-11.94-3.64-40.27-3.64-53.46s-1.05-41.56,3.64-53.46A30.6,30.6,0,0,1,70.55,56.31c11.94-4.73,40.27-3.64,53.46-3.64s41.56-1.05,53.46,3.64A30.6,30.6,0,0,1,194.7,73.55c4.73,11.94,3.64,40.27,3.64,53.46S199.44,168.57,194.7,180.46Z" 
                                transform="translate(-33.29 -36.33)"
                            />
                        </svg>
                    </a>
                    <a href='https://facebook.com'>
                        <svg viewBox="0 0 188.37 187.69">
                            <path 
                                class="cls-1" 
                                d="M220,127.48A94.16,94.16,0,0,1,136.93,221a3.32,3.32,0,0,0,.07-.82c-.14-21.74-.07-43.41-.07-65.08,0-3.48-.34-2.93,3.07-3,4.7,0,9.4,0,14.18.07,1.36,0,2.11-.27,2.25-1.91.55-7,1.23-13.9,2-20.85.2-1.84-.41-2.25-2.11-2.18-6,.07-12,0-17.92,0-1,0-1.91.14-1.84-1.36.07-4.16-.07-8.31.14-12.47.34-5.18,3.48-7.91,8.72-7.91,4,0,7.84-.07,11.79,0,1.23.07,1.64-.34,1.64-1.57-.07-7-.07-14,0-21,0-1.09-.34-1.5-1.5-1.5-8.18.07-16.36-.14-24.53.2-7.9.41-14.79,3.41-19.69,10a30.4,30.4,0,0,0-5.66,17.65c-.14,5.25-.14,10.56,0,15.81.07,1.91-.41,2.66-2.45,2.52-3.48-.2-7,0-10.56-.07-1.36-.07-1.77.41-1.77,1.7.07,7,.07,13.83,0,20.79,0,1.5.54,1.84,1.91,1.84,3.47-.07,7,.07,10.36-.07,1.91-.07,2.39.48,2.39,2.39-.07,11,0,22.15,0,33.26,0,10.77,0,21.6-.07,32.37A94.19,94.19,0,1,1,220,127.48Z" 
                                transform="translate(-31.63 -33.29)"
                            />
                        </svg>
                    </a>
                </div>
                <div className={ styles['nav-links'] }>
                    {
                        React.Children.toArray( links.map((item) => (
                            <a href={ item.link }>
                                { item.name }
                            </a>
                        )))
                    }
                    <Toggle />
                </div>
            </nav>
        </header>
    )
}

export default Navigation;