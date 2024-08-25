import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <h1>HELLO FROM THE THIRD PAGE</h1>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default ThirdPage
