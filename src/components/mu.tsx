import React from 'react'
import styles from './mu.module.scss'

export type Props = unknown
export type State = unknown

export default class MuComponent extends React.Component<Props, State> {
    public render() {
        return (
            <em className={styles.mu}>
                μ
            </em>
        )
    }
}
