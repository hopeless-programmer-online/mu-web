import React from 'react'

export type Props = {
    date : Date
}
export type State = unknown

export default class DateComponent extends React.Component<Props, State> {
    public render() {
        const { date } = this.props

        return (
            <time dateTime={date.toISOString()}>
                {date.getUTCFullYear()}
            </time>
        )
    }
}
