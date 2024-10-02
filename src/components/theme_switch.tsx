import React from 'react'
import styles from './theme_switch.module.scss'

export type Props = {
    onChange? : (mode : Mode) => void
}
export type State = {
    mode : Mode
}
export type Mode = `light` | `dark`

export default class ThemeSwitchComponent extends React.Component<Props, State> {
    public state : State = {
        mode : `light`,
    }

    private onChange = ({ currentTarget : { checked } } : React.ChangeEvent<HTMLInputElement>) => {
        const mode = checked ? `dark` : `light`

        this.setState({ mode })

        if (this.props.onChange) this.props.onChange(mode)
    }

    public render() {
        return (
            <label className={styles.theme}>
                <input type={`checkbox`} onChange={this.onChange}/>
                <span/>
            </label>
        )
    }
}
