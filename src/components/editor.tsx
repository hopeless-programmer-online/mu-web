import React from 'react'
import style from './editor.module.scss'

export type Props = unknown
export type State = {
    source : string
    log : string
}

export default class EditorComponent extends React.Component<Props, State> {
    public state : State = {
        source : ``,
        log : ``,
    }

    private onRun = () => {
        const { source } = this.state

        let log = ``

        try {
            const begin = new Date

            const end = new Date

            log += `completed in ${((end.valueOf() - begin.valueOf()) / 1_000).toFixed(2)}sec\n`
            log += `done\n`
        }
        catch (error) {
            log += String(error)

            console.error(error)
        }

        this.setState({ log })
    }
    private onSourceChanged = ({ currentTarget : { value : source } } : React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ source })
    }

    public render() {
        const { source, log } = this.state

        return (
            <article className={style.editor}>
                <header>
                    <h2>Online compiler</h2>
                    <button
                        onClick={this.onRun}
                    >
                        Run
                    </button>
                </header>
                <figure>
                    <figcaption>
                        Source
                    </figcaption>
                    <textarea
                        value={source}
                        onChange={this.onSourceChanged}
                    />
                </figure>
                <figure>
                    <figcaption>
                        Output
                    </figcaption>
                    <textarea
                        value={log}
                        readOnly
                    />
                </figure>
            </article>
        )
    }
}
