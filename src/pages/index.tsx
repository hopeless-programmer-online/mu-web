import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout'
import Mu from '../components/mu'
import Editor from '../components/editor'

export type Props = {
    date : string
}
export type State = unknown

export default class IndexPage extends React.Component<Props, State> {
    public render() {
        const date = new Date(this.props.date)

        return (
            <Page>
                <Layout date={date}>
                    <p>
                        <Mu/> programming language!
                    </p>
                    <blockquote>
                        — How much syntax sugar do You want?<br/>
                        — Yes.
                    </blockquote>
                    <Editor/>
                </Layout>
            </Page>
        )
    }
}

export async function getServerSideProps() : Promise<{ props : Props }> {
    return { props : { date : (new Date).toISOString() } }
}
