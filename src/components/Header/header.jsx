import styles from "./style.module.css"

export function Header() {
    return (
        <header>
            <div className="container">
                <h1 className={styles.logo__name}><span>Nu</span> Kenzie</h1>
            </div>
        </header>
    )
}