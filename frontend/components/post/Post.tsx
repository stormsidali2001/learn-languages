import { MoreVert } from '@mui/icons-material';
import styles from './Post.module.scss'
interface PropType {
    username:string;
    imageUrl:string;
    createdAt:string;
}
const Post = ({username,imageUrl,createdAt}:PropType)=>{
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <img className={styles.profilImg} src={imageUrl} alt=''/>
                    <span className={styles.username}>{username}</span>
                    <span className={styles.date}>{createdAt}</span>
                </div>
                <div className={styles.right}>
                    <MoreVert className={styles.icon}/>
                </div>
            </div>
            <div className={styles.center}>

            </div>
            <div className={styles.bottom}>

            </div>
        </div>
    )
}
export default Post;