import React from "react"
import Layout from './src/components/layout'

const wrapPageElement = ({element}) => (
        <Layout>{element}</Layout>
)

export default wrapPageElement