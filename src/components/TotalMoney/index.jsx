import styles from "./style.module.css"

export function TotalMoneyCard({ totalTransaction }) {
    return (
        <div className={styles.totalMoney__container}>
            <div className={styles.totalMoney__infos}>
                <p>Valor Total:</p>
                <p className={styles.totalMoney__value}> {totalTransaction().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} </p>
            </div>
            <span>O valor se refere ao saldo</span>
        </div>
    )
}