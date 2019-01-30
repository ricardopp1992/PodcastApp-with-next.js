'use strict'

import Link from 'next/link'
import Layout from '../components/Layout'

export default class Error extends React.Component {
    static getInitialProps({ res, err }) {
      const statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return { statusCode }
    }
  
    render() {
        const { statusCode } = this.props
      return (
        <Layout title="Oh no :(">
            {
                statusCode == 404 ?
                <div className="message">
                    <h1>This page not exist</h1>
                    <p><Link href="./"><a>Go Back to Home</a></Link></p>
                </div> :
                <div>
                    <h1>Somthing went wrong</h1>
                    <p>Try to do it again</p>
                </div>

            }
            <style jsx>{`
                .message{
                    padding:100px 30px;
                    text-align:center;
                }

                a {
                    color:8756ca;
                }
            `}</style>
        </Layout>
      )
    }
  }

