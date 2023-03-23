import "./styles/globalStyles.css"

import { FormCard } from "./components/Form/Index"
import { Header } from "./components/Header/header"
import { TotalMoneyCard } from "./components/TotalMoney"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { ListTransaction } from "./components/List"

function App() {

  const [formData, setFormData] = useState({
    title: '',
    value: '',
    type: '',
  })

  const [transactionList, setTransactionList] = useState([])

  function submit(event) {
    event.preventDefault()

    addTransactionsToList(formData)

    setFormData({
      title: '',
      value: '',
      type: '',
    })
  }

  const addTransactionsToList = (formData) => {
    const newTransaction = {...formData, id: uuidv4(), value: Number(formData.value)}
    setTransactionList([...transactionList, newTransaction]);
  }

  function removeTransaction(transactionId) {
    const newTransactionList = transactionList.filter((transaction) => transaction.id !== transactionId)
    setTransactionList(newTransactionList)
  }

  function totalTransaction() {
    const total = transactionList.reduce((previousValue, element) => {
      return element.type === "Entrada" ? previousValue + element.value : previousValue - element.value
    },0)

    return total
  }

  return (
    <div>
     <Header/>
     <main className="container">

      <div className="container__desktop">
        <div className="container__left">
          <FormCard formData ={formData} setFormData ={setFormData} submit ={submit} />
          <TotalMoneyCard totalTransaction={totalTransaction}/>
        </div>
        <div className="container__right">
          <ListTransaction transactionList={transactionList} removeTransaction={removeTransaction}/>
        </div>
      </div>

     </main>
    </div>
  )
}

export default App
