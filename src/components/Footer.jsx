import logo from '../assets/image/logo-branca.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



export default function Footer(){
    return (
        <div className='text-white font-semibold bg-gray-700'>
            <div className='flex flex-col items-center gap-2 py-5 lg:flex-row lg:justify-around '>
                <img src={logo} alt="logo WHG" className='w-[200px]'/>

                <div className='flex flex-col gap-2'>
                    <h3 className='flex gap-3'> <FontAwesomeIcon icon={faAddressBook} className='w-[18px] h-[18px] m-0'/> Contato </h3>
                    <hr />
                    <a href="tel:+55 11 3509-2300" className='font-normal flex gap-3'> <FontAwesomeIcon icon={faPhone} className='w-[18px] h-[18px] m-0'/> +55 11 3509-2300</a>
                    <a href="mailto:institucional@whg.com.br" className='font-normal flex gap-3'> <FontAwesomeIcon icon={faEnvelope} className='w-[18px] h-[18px] m-0'/>institucional@whg.com.br</a>
                </div>

                <div>
                    <h3>Redes Sociais</h3>
                    <hr />
                    <div className='flex gap-3'>
                        <a href="https://www.instagram.com/wealth_high_governance/">
                            <FontAwesomeIcon icon={faInstagram} className='w-[18px] h-[18px] border-[2px] p-2 rounded' />
                        </a>
                        
                        <a href="https://www.linkedin.com/company/wealth-high-governance/">
                            <FontAwesomeIcon icon={faLinkedin} className='w-[18px] h-[18px] border-[2px] p-2 rounded' />
                        </a>

                        <a href="https://twitter.com/wealth_high_gov">
                            <FontAwesomeIcon icon={faTwitter} className='w-[18px] h-[18px] border-[2px] p-2 rounded' />
                        </a>

                        <a href="https://www.youtube.com/channel/UCW6y1JeoJZA5jjD3Tb15euA">
                            <FontAwesomeIcon icon={faYoutube} className='w-[18px] h-[18px] border-[2px] p-2 rounded' />
                        </a>
                    </div>
                </div>
            </div>

            <div className= "flex flex-col items-center gap-2 py-5 lg:flex-row lg:justify-around bg-white text-black">
                <p>Copyright Ⓒ 2023 - WHG</p>
                <a href="https://www.bmouseproductions.com/">Desenvolvido por: Bmouse Productions</a>
            </div>
        </div>
    )
}