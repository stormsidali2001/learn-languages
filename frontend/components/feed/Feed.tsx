import NewPost from '../new post/NewPost';
import Post from '../post/Post';
import styles from './Feed.module.scss';
const Feed = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <NewPost/>
                <Post username='sidali' imageUrl='/sidali.jpg' createdAt='1 min ago'/>
            </div>
        </div>
    )
}

export default Feed;