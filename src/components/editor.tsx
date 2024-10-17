import React from 'react'
import style from './editor.module.scss'

export type Props = {}
export type State = unknown

export default class EditorComponent extends React.Component<Props, State> {
    public render() {
        return (
            <article className={style.editor}>
                <header>
                    <h2>Online compiler</h2>
                    <button
                        // onClick={this.onRun}
                    >
                        Run
                    </button>
                </header>
                <figure>
                    <figcaption>
                        Source
                    </figcaption>
                    <textarea
                        // value={source}
                        // onChange={this.onSourceChanged}
                    />
                </figure>
                <figure>
                    <figcaption>
                        Output
                    </figcaption>
                    <textarea
                        // value={log}
                        readOnly
                    />
                </figure>
            </article>
        )
    }
}
