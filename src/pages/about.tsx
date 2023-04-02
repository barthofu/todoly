import type { NextPage, GetServerSideProps } from 'next'

import { Box } from '@chakra-ui/react'
import { DefaultLayout } from '@components/layouts'

const AboutPage: NextPage = () => {

	return (<>

		<DefaultLayout
			title='About'
		>

			<Box>
				Hello world from about
			</Box>

		</DefaultLayout>		
	
	</>)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

	return {
		props: {}
	}
}

export default AboutPage