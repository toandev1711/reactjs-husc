import React, { useState } from 'react'
import styles from './AvatarGrid.module.scss'
const AvatarGrid = () => {
    const [avatars, setAvatar] = useState([
        {src : 'https://minhtoan.blob.core.windows.net/husc/DoanThiHongPhuoc.png', color: 1, pos: 'border-start-start-radius'},
        {src : 'https://minhtoan.blob.core.windows.net/husc/NguyenDangBinh.png', color: 2, pos: 'border-start-end-radius'},
        {src : 'https://minhtoan.blob.core.windows.net/husc/NguyenDung.png', color: 2, pos:  'border-end-start-radius'},
        {src : 'https://minhtoan.blob.core.windows.net/husc/NguyenThiThuyNhi.png', color: 1, pos: 'border-end-end-radius'}
    ])
    return (
        <div className={styles.avatarGrid}>
            {avatars.map((avatar, index) => (
                <div key={index} className={styles.avatarCell} id = {avatar.pos}
                    style={{background: avatar.color === 1 ? '#00A5FF' : '#062F83'}}>
                    <img 
                        src={avatar.src} alt={`Avatar ${index + 1}`} />
                </div>
            ))}
        </div>
    )
}

export default AvatarGrid
