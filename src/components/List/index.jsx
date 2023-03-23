import styles from "./style.module.css"
import { CardList } from "./CardTransaction"

export function ListTransaction({ transactionList, removeTransaction }) {
    return (
        <>
        <h3 className="transaction__title">Resumo financeiro</h3>
        {transactionList.length > 0 ? (
            <ul className={styles.transactions__list}>
               {transactionList.map((transaction) => 
                <CardList key={transaction.id} 
                transaction={transaction}
                removeTransaction={removeTransaction}
                />
               )}
            </ul>
         ) : (
            <p className="title__noTransaction">Você ainda não possui nenhum lançamento.</p>
         )}
        </>
    )
}