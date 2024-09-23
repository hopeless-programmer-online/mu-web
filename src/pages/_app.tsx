import React from 'react'
import { AppProps } from 'next/app'
import './_app.global.scss'

export default class App extends React.Component<AppProps> {
    public render() {
        const { Component, pageProps } = this.props

        return (
            <Component {...pageProps}/>
        )
    }
}
