import NewPost from '../new post/NewPost';
import styles from './Feed.module.scss';
const Feed = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <NewPost/>
            </div>
        </div>
    )
}

export default Feed;