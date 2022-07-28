import { Bookmark, ChatBubble, Event, People, PeopleAlt, QuestionAnswer, RssFeed, School, VideoCallRounded, WorkOffOutlined } from '@mui/icons-material';
import styles from './Leftbar.module.scss';

const Leftbar = ()=>{
    const list = [
        {
            text:"Feed",
            icon:<RssFeed className={styles.icon}/>
        },
        {
            text:"Chats",
            icon:<ChatBubble className={styles.icon}/>
        },
        {
            text:"Video",
            icon:<VideoCallRounded className={styles.icon}/>
        },
        {
            text:"Groups",
            icon:<PeopleAlt className={styles.icon}/>
        },
        {
            text:"Bookmarks",
            icon:<Bookmark className={styles.icon}/>
        },
        {
            text:"Questions",
            icon:<QuestionAnswer className={styles.icon}/>
        },
        {
            text:"Jobs",
            icon:<WorkOffOutlined className={styles.icon}/>
        },
        {
            text:"Events",
            icon:<Event className={styles.icon}/>
        },
        {
            text:"Courses",
            icon:<School className={styles.icon}/>
        },
       
    ];
    const friendList = [
        {
            imgUrl:"/sidali.jpg",
            fullname:"Assoul Sidali"
        },
        {
            imgUrl:"/sidali.jpg",
            fullname:"Assoul Sidali"
        },
        {
            imgUrl:"/sidali.jpg",
            fullname:"Assoul Sidali"
        },
        {
            imgUrl:"/sidali.jpg",
            fullname:"Assoul Sidali"
        },
        {
            imgUrl:"/sidali.jpg",
            fullname:"Assoul Sidali"
        },
        {
            imgUrl:"/sidali.jpg",
            fullname:"Assoul Sidali"
        },
        {
            imgUrl:"/sidali.jpg",
            fullname:"Assoul Sidali"
        },
        {
            imgUrl:"/sidali.jpg",
            fullname:"Assoul Sidali"
        },
    ]
    return (
        <div className={styles.container}>
           <div className={styles.wrapper}>
                <ul className={styles.list}>
                    {
                        list.map(({text,icon},index)=>{
                            return (
                                <li key={index} className={styles.item}>
                                    {icon}
                                    <span className={styles.text}>{text}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <ul className={styles.friendList}>
                    {
                        friendList.map(({fullname,imgUrl},index)=>{
                            return (
                                <li key={index} className={styles.friend}>
                                    <img className={styles.profilImage} src={imgUrl}/>
                                    <span className={styles.name}>{fullname}</span>
                                </li>
                            )
                        })
                    }
                </ul>
           </div>
        </div>
    )
}
export default Leftbar;