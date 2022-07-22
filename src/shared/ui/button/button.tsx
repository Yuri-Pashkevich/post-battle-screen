import styles from './index.module.scss'

interface Button {
    type: 'submit' | 'button'
    value?: string
}

export const Button = ({ type, value }: Button) => {
    return (
        <button
            class={styles.button}
            type={type}
            value={value}
        >
            {value}
        </button>
    )
}