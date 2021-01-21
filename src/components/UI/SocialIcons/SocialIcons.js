import classes from './SocialIcons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const SocialIcons=props=>{
    return (
        <div className={classes.SocialIconsWrapper}>
            <a href='https://www.facebook.com/oceanicpropiedades/' target='_blank'>
                <FontAwesomeIcon className={classes.SocialIconFB} icon={faFacebook}/>
            </a>

            <a href='https://www.instagram.com/oceanicpropiedades/' target='_blank'>
                <FontAwesomeIcon className={classes.SocialIconIN} icon={faInstagram}/>
            </a>
            <a href='https://api.whatsapp.com/send?phone=541164413184' target='_blank'>
                <FontAwesomeIcon className={classes.SocialIconWS} icon={faWhatsapp}/>
            </a>
            {/* <FontAwesomeIcon className={classes.SocialIcon} icon={faTwitter}/> */}
        </div>
    )
}

export default SocialIcons