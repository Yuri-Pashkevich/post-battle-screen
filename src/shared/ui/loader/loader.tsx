import styles from './loader.module.scss'


export const Loader = () => {
    return (
        <div class={styles.loader}>
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