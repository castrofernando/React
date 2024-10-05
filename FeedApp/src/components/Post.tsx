import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale';
import React, { useState } from 'react';

type PostContent = {
    type: 'paragraph' | 'link' | 'hashtag',
    content:string
  }

interface PostProps {
    avatarUrl: string,
    name: string,
    role: string,
    content: PostContent[],
    publishedAt: Date,
}

interface CommentData {
    comment: string,
    publishedAt: Date
}

export const Post = ({...props}:PostProps) => {

    const [comments, setComments] = useState<CommentData[]>([]);
    const [commentText, setCommentText] = useState('');

    const handleCommentSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let newComment:CommentData = {
            comment:commentText,
            publishedAt: new Date()
        }
        setComments([...comments, newComment]);
        setCommentText('');
    }

    const handleCommentTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentText(e.target.value);
    }

    const handleDeleteCommentClick = (comment:string) => {
        setComments(comments.filter(c=> c.comment!=comment));
    }

    const handleInvalidComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.setCustomValidity('');
        e.target.setCustomValidity('O campo de comentário é obrigatório');
    }

    return (
        <>
        <header className={styles.post}>
            <div className={styles.header}>
                <div className={styles.headerInfo}>
                    <Avatar 
                        imageUrl={props.avatarUrl}
                        hasBorder={true}
                    />    
                    <div className={styles.avatarDescription}>
                    <strong>{props.name}</strong>
                    <span>{props.role}</span>
                </div>              
                </div>
                <time title={format(props.publishedAt,"d 'de' LLLL 'de' uuuu",{locale: ptBR})} dateTime={props.publishedAt.toISOString()}>{formatDistanceToNow(props.publishedAt, {addSuffix: true, locale: ptBR})}</time>  
            </div> 
            <article className={styles.content}>
                {
                    props.content.map(c => {
                        return (
                            c.type =='paragraph' ?
                                <p key={c.content}>{c.content}</p>
                            : c.type == 'link' ?
                                <span key={c.content}>
                                    <a key={c.content} href=''>{c.content}</a><br/>
                                </span>
                            :
                                <a key={c.content} href=''>{`${c.content} `}</a>
                        )
                    })
                }
            </article>
            <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name='comment' 
                    onChange={handleCommentTextChange} 
                    onInvalid={handleInvalidComment}
                    value={commentText}
                    placeholder='Escreva um comentário...'
                    required/>
                <button type='submit' disabled={commentText===''}>Publicar</button>
            </form> 
            <div className={styles.CommentList}>
                {
                    comments.map(comment => {
                        return <Comment 
                            key={comment.comment}
                            onDeleteClick={() => handleDeleteCommentClick(comment.comment)} 
                            publishedAt={comment.publishedAt} 
                            content={comment.comment}
                            />
                    })
                }
            </div>
        </header>
        </>
    )
}