import styles from "./style.module.css"

export function CardList({ transaction, removeTransaction }) {
    return (
        <>
        {transaction.type === "Saida" ? (

            <li className={styles.transactions__container}>
                <div>
                    <h3 className={styles.transaction__name}>{transaction.title}</h3>
                    <p className={styles.transaction__type}>{transaction.type}</p>
                </div>
                <div>
                    <p className={styles.transaction__value}>{transaction.value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    <button className={styles.transaction__buttonDel} onClick={() => removeTransaction(transaction.id)}>Excluir</button>
                </div>
            </li>
        ) : (
            <li className={styles.transactions__containerEntrance}>
                <div>
                    <h3 className={styles.transaction__name}>{transaction.title}</h3>
                    <p className={styles.transaction__type}>{transaction.type}</p>
                </div>
                <div>
                    <p className={styles.transaction__value}>{transaction.value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    <button className={styles.transaction__buttonDel} onClick={() => removeTransaction(transaction.id)}>Excluir</button>
                </div>
            </li>
        )}
        </>
    )
}