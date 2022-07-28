import { EmojiEmotions, PermMedia ,Label,Room} from '@mui/icons-material';
import styles from './NewPost.module.scss'
const NewPost = ()=>{
    const options = [
        {
            text:'Photo Or Video',
            icon:<PermMedia className={styles.icon}/>
        },
        {
            text:'Tag',
            icon:<Label className={styles.icon}/>
        },
        {
            text:'Location',
            icon:<Room className={styles.icon}/>
        },
        {
            text:'Feelings',
            icon:<EmojiEmotions className={styles.icon}/>
        },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <img className={styles.profilImg} src='/sidali.jpg' alt=''/>
                <input placeholder='share something with the community.'  />
            </div>
            <hr className={styles.separator}/>
            <div className={styles.bottom}>
                <div className={styles.options}>
                    {
                        options.map(({text,icon},index)=>{
                            return (
                                <div key={index} className={styles.option}>
                                    {icon}
                                    <span className={styles.text}>{text}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <button>Share</button>

            </div>
        </div>
    )
}

export default NewPost;