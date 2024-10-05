import React from 'react'
import styles from './Avatar.module.css'

interface avatarProps extends React.HTMLProps<HTMLImageElement>{
    hasBorder?: boolean,
    imageUrl: string
}
export const Avatar= ({hasBorder=false,imageUrl, ...avatarProps}:avatarProps) => {
    return (
        <div className={hasBorder ? `${styles.avatar} ${styles.border}` : `${styles.avatar}`}>
            <img 
                src={imageUrl}
                alt="Foto do usuário" 
             {...avatarProps}
             />  
        </div>
    )
}