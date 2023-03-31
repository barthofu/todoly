import Head from 'next/head'
import React from 'react'

type DefaultLayoutProps = {
    title: string 
    iconHref?: string
    children: React.ReactNode
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ 
    title,
    iconHref,
    children 
}) => {

	return (<>
        <Head>
			<title>{ title }</title>
            <link rel="icon" href={ iconHref } />
		</Head>

        { children }
    </>)
}