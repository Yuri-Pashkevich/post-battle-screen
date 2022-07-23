import styles from './index.module.scss'

interface LoaderProps {
    marginTop?: string
}

export const Loader = ({ marginTop }: LoaderProps) => {
    return (
        <div class={styles.loader} style={{'margin-top': marginTop}}>
            <div class={styles.loading_spinner}>
                <div class={styles.ldio}>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}