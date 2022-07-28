import { Chat, Notifications, Person, Search } from '@mui/icons-material';
import styles from './TopBar.module.scss';

const TopBar = () => {
  const icons = [
        {
            badge:1,
            icon:<Person/>
        },
        {
            badge:1,
            icon:<Chat/>
        },
        {
            badge:1,
            icon:<Notifications/>
        }
  ];
  const links = [
    {
        label:'Homepage',
        value:''
    },
    {
        label:'Timeline',
        value:''
    }
  ]
  return (
    <nav className={styles.container}>
        <div className={styles.left}>
            <span className={styles.logo}>Storm.sidali</span>
        </div>
        <div className={styles.center}>
            <div className={styles.search}>
                <Search className={styles.icon}/>
                <input placeholder='search ...'/>
            </div>
            
        </div>
        <div className={styles.right}>
            <div className={styles.links}>
                {
                    links.map(({label},index)=>{
                        return(
                            <span key={index} className={styles.link}>{label}</span>
                        )
                    })
                }
                <span className={styles.link}>Homepage</span>
                <span className={styles.link}>Timeline</span>

            </div>
            <div className={styles.icons}>
                {
                    icons.map(({badge,icon},index)=>{
                        return (
                            <div key={index} className={styles.icon}>
                                {icon}
                                <span className={styles.badge}>{badge}</span>
                            </div>
                        )
                    })
                }
            </div>
            <img src='' alt=''/>
        </div>
    </nav>
  )
}

export default TopBar