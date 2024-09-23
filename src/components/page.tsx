import React, { PropsWithChildren } from 'react'
import Head from 'next/head'

export type Props = {
    title : string
}
export type State = unknown

export default class PageComponent extends React.Component<PropsWithChildren<Props>, State> {
    public static defaultProps = {
        title : ``,
    }

    public render() {
        const { title, children } = this.props

        return (
            <>
                <Head>
                    <title>
                        {`${title ? `${title} | ` : ``}μ project`}
                    </title>
                    {/* <link rel='icon' href='/favicon.svg' type='image/svg+xml'/> */}
                </Head>
                {children}
            </>
        )
    }
}
