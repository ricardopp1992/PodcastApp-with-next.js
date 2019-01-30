'use strict'

import 'isomorphic-fetch'
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid'
import Error from 'next/error'

export default class extends React.Component {
    
    static async getInitialProps(data) {
        const res = data.res

        try {
            let req = await fetch('https://api.audioboom.com/channels/recommended')
            let { body: channels } = await req.json()

            if ( req.status >= 400 ) {
                res.statusCode = req.status
                return { channels: null, statusCode: req.status }
            }
            
            return { 
                channels,
                statusCode: 200
            }
            
        } catch (e) {
            res.statusCode = 503
            return { channels: null, statusCode: 503 }
        }
    }
    
    render() {
        const { channels, statusCode } = this.props
        
        // early return pattern
        if( statusCode !== 200 ) {
            return <Error statusCode={ statusCode } />
        }

        return(
            <Layout title="Podcast">
                <ChannelGrid channels={ channels }></ChannelGrid>

            </Layout>
        )
    }
}