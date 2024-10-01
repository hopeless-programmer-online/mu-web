import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout'

export type Props = {
    date : string
}
export type State = unknown

export default class RoadMapPage extends React.Component<Props, State> {
    public render() {
        const date = new Date(this.props.date)

        return (
            <Page>
                <Layout date={date}>
                    <figure>
                        <figcaption>
                            <h2>Roadmap</h2>
                        </figcaption>
                        <ul>
                            {[
                                [ false, `Properties` ] as const,
                                [ false, `Operators` ] as const,
                                [ false, `Generators` ] as const,
                                [ false, `Decorators` ] as const,
                                [ false, `Nested return` ] as const,
                                [ false, `async/await` ] as const,
                                [ false, `AST` ] as const,
                                [ false, `Spread/rest` ] as const,
                                [ false, `SQL` ] as const,
                                [ false, `XML` ] as const,
                                [ false, `JSON` ] as const,
                            ].map(([flag, text], i) =>
                                <li key={i}>
                                    <label>
                                        <input type={`checkbox`} checked={flag} readOnly/>
                                        &nbsp;
                                        {text}
                                    </label>
                                </li>
                            )}
                        </ul>
                    </figure>
                </Layout>
            </Page>
        )
    }
}

export async function getServerSideProps() : Promise<{ props : Props }> {
    return { props : { date : (new Date).toISOString() } }
}
