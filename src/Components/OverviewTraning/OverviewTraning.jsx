import { useState } from 'react' 
import styles from './OverviewTraning.module.scss'
import InfoCard from '../InfoCard/InfoCard'
import { AccountCircle, ImportantDevices, CalendarMonth } from '@mui/icons-material'
const OverviewTraning = () => {
    const [overviewInfo, setOverviewInfo] = useState([
        {thumb : <AccountCircle />, content: '26 VIÊN CHỨC'},
        {thumb : <ImportantDevices />, content: '3 CHUYÊN NGÀNH'},
        {thumb : <CalendarMonth />, content: '30 NĂM PHÁT TRIỂN'},
    ])
    return (
        <div className={styles.OverviewTraning}>
            <h1>ĐÀO TẠO</h1>
            <div className= {styles.trainingParts}>
                {overviewInfo.map((item) => (
                    <InfoCard thumb={item.thumb} content={item.content}/>
                ))}
            </div>
            <h3>Hiện, khoa Công nghệ thông tin có <span className='hightlight'> 02 ngành đào tạo đại học</span>  (Công nghệ thông tin <br/>
            và Kỹ thuật phần mềm),<span className='hightlight'> 02 ngành đào tạo thạc sĩ</span>  (Khoa học máy tính và <br/>
            Quản lí công nghệ thông tin) và<span className='hightlight'> 01 ngành đào tạo tiến sĩ</span>  (Khoa học máy tính)
            </h3>
        </div>
  )
}

export default OverviewTraning

