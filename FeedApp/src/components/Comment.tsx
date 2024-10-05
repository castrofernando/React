import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

interface CommentProps {
    author?: string,
    avatarUrl?: string,
    content: string,
    publishedAt: Date,
    onDeleteClick: () => void
}

export const Comment = ({author = 'Fernando Castro', avatarUrl='https://avatars.githubusercontent.com/u/21298892?v=4',publishedAt ,content, onDeleteClick}:CommentProps) => {
    const [likeCount, setLikeCount] = useState(0);

    const handleLikeCount = () => {
        setLikeCount(count => count+1);
    }
    return (
        <div className={styles.comment}>
            <Avatar
                imageUrl={avatarUrl}              
            />  
            <div>
                <div className={styles.commentBox}>
                    <div className={styles.header}>
                        <div className={styles.commentInfo}>
                            <strong>{author}</strong>
                            <time title={format(publishedAt,"d 'de' LLLL 'de' uuuu HH:mm:ss" )} dateTime={publishedAt.toISOString()}>{formatDistanceToNow(publishedAt, {addSuffix:true, locale: ptBR})}</time>
                        </div>
                        <button onClick={onDeleteClick} className={styles.trashButton}>
                            <Trash size={20}/>
                        </button>          
                    </div>
                    <p>{content}</p>
                </div>
                <div className={styles.footer}>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp size={20}/> Aplaudir • {likeCount}
                    </button>
                </div>

            </div>
        </div>
    )
}