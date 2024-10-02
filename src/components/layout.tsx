import React, { PropsWithChildren } from 'react'
import DateComponent from './date'
import Mu from './mu'
import styles from './layout.module.scss'
import ThemeSwitchComponent, { Mode } from './theme_switch'

export type Props = {
    date : Date
}
export type State = {
    mode : Mode
}

export default class LayoutComponent extends React.Component<PropsWithChildren<Props>, State> {
    public state : State = {
        mode : `light`,
    }

    public render() {
        const { date } = this.props
        const { mode } = this.state

        return (
            <article className={[ styles.layout, mode === `light` ? styles.light : styles.dark ].join(` `)}>
                <header>
                    <a href='/'>
                        <Mu/>
                    </a>
                    <nav>
                        <ul>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/'>About</a>
                            </li>
                        </ul>
                    </nav>
                    <ThemeSwitchComponent onChange={mode => this.setState({ mode })}/>
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    <section>
                        by <a href='mailto:me@hopeless-programmer.online'>hopeless programmer</a>
                        <br/>
                        {
                            started.getUTCFullYear() < date.getUTCFullYear()
                                ? <><DateComponent date={started}/> - <DateComponent date={date}/></>
                                : <><DateComponent date={started}/></>
                        }
                    </section>
                    <nav>
                        <figure>
                            <figcaption>
                                <Mu/> Web
                            </figcaption>
                            <nav>
                                <ul>
                                    <li>
                                        <a href='https://github.com/hopeless-programmer-online/mu-web'>GitHub</a>
                                    </li>
                                </ul>
                            </nav>
                        </figure>
                        <figure>
                            <figcaption>
                                Author
                            </figcaption>
                            <nav>
                                <ul>
                                    <li>
                                        <a href='mailto:me@hopeless-programmer-online'>Email</a>
                                    </li>
                                    <li>
                                        <a href='https://github.com/hopeless-programmer-online'>GitHub</a>
                                    </li>
                                </ul>
                            </nav>
                        </figure>
                    </nav>
                </footer>
            </article>
        )
    }
}

export const started = new Date(`2023`)
