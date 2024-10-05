import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from "@phosphor-icons/react";

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img src='https://images.unsplash.com/photo-1727189899371-abd5873c4709?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <div className={styles.profile}>
                <Avatar 
                    imageUrl='https://avatars.githubusercontent.com/u/21298892?v=4' 
                    hasBorder={true}                 
                />    
                <strong>Fernando Castro</strong>
                <span>Developer</span>
            </div>

            <footer className={styles.footer}>
                <a href='#'><PencilLine size={20}/> Editar seu perfil</a>
            </footer>
        </aside>
    );
}