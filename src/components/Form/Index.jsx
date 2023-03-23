import styles from "./style.module.css"

export function FormCard({ formData, setFormData, submit }) {
    return (
        <>
            <form className={styles.form__container} onSubmit={submit}>
                <label htmlFor="description">Descrição</label>
                <input name="description" type="text" placeholder="Digite aqui sua descrição" required
                value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}/>
                <span>Ex: Compra de roupas</span>

                <label htmlFor="value">Valor (R$):</label>
                <input type="number" name="value" placeholder="R$ 0,00" required
                value={formData.value} onChange={(e) => setFormData({...formData, value: e.target.value})}/>

                <label htmlFor={styles.valueType}>Tipo de valor</label>
                <select name="valueType" required
                value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                    <option value="">Selecione o tipo de valor</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Saida">Saída</option>
                </select>

                <button>Inserir valor</button>
            </form>
        </>
    )
}