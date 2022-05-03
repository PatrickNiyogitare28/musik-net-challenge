import React from 'react'
import "@locales/i18n";
import LoginForm from '@components/forms/login';
import styles from './styles.module.scss';
import Logo from '../../assets/images/text_logo.png';
import AppStoreIcon from '../../assets/icons/app-store-icon.png';
import PlayStoreIcon from '../../assets/icons/play-store-icon.png';

const Counter: React.FC = () => {

    return (
        <div className='flex' style={{display:'flex', height:'100vh'}}>
           <div className='bg-red-500 h-[100vh]' style={{width:'50%',paddingTop:'5%'}}>
           <div style={{padding:'15% 25%'}}>
           <h1 style={{fontWeight:'bold', fontSize:'2em'}}>Login your account</h1>
           <LoginForm />
           </div>
           <p style={{marginTop:'2em', textAlign:'center', fontSize:'1.2em', fontWeight:'lighter'}}>By login in, you agree to the <span>Terms of Services</span> and <span>Privacy Policy</span></p>
           </div>
           <div className={styles.addWrapper} style={{width:'50%', display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
              <div style={{width:'60%'}}>
                <img src={Logo} alt="logo" />
             <div style={{marginTop:'10em'}}>
                  <h1 style={{color: 'white', fontSize:'1.8em', textAlign:'center', fontWeight:'lighter'}}>Get the app.</h1>
              </div>
              <div style={{display:'flex', justifyContent:'space-around', marginTop:'2em'}}>
              <div style={{width:'70%', display:'flex', justifyContent:'space-between'}}>
                <img src={AppStoreIcon} alt="app store" />
                <img src={PlayStoreIcon} alt="play store" />
              </div>
              </div>
              </div>
           </div>
        </div>
    )
}

export default Counter
