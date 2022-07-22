import { JSXElement } from "solid-js"
import { RiSystemArrowRightSLine } from 'solid-icons/ri'
import styles from './index.module.scss'
import { $toggle, toggleEvent } from './model'
import { useUnit } from 'effector-solid'

interface CollapsibleProps {
    title: string
    children: JSXElement
}

export const Collapsible = ({ title, children }: CollapsibleProps) => {

    const [toggle] = useUnit([$toggle])

    return (
        <div class={styles.collapsible}>
            <div class={styles.collapsible_header} onClick={() => toggleEvent()}>
                <span class={styles.collapsible_title}>{title}</span>
                <RiSystemArrowRightSLine class={`${styles.collapsible_icon} ${toggle() ? styles.collapsible_icon_rotate : ''}`} />
            </div>
            <div class={`${styles.collapsible_body}${toggle() ? styles.collapsible_body_expand : ''}`}>
                {children}
            </div>
        </div>
    )
}