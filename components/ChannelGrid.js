'use strict'
//since next-routes
import { Link } from '../routes'
// import Link from 'next/link'
import slug from '../helpers/slug'

export default class ChannelGrid extends React.Component {
    render() {
        const { channels } = this.props
 
        return (
            <div className="channels">
                { 
                    channels.map((channel) => (
                        <Link route="channels" params={{
                            slug: slug(channel.title),
                            id: channel.id
                        }}>
                            <a className="channel" key={ channel.id }>
                                <img src={ channel.urls.logo_image.original } alt=""/>
                                <h2>{ channel.title }</h2>
                            </a>
                        </Link>
                    )) 
                }

                <style jsx>{`
                    header {
                        color: #fff;
                        background: #8756ca;
                        padding: 15px;
                        text-align: center;
                    }
                    .channels {
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    }
                    a.channel {
                        display: block;
                        margin-bottom: 0.5em;
                        color: #333;
                        text-decoration: none;
                    }
                    .channel img {
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        width: 100%;
                    }
                    h2 {
                        padding: 5px;
                        font-size: 0.9em;
                        font-weight: 600;
                        margin: 0;
                        text-align: center;
                    }  
                `}</style>
            </div>            
        )
    }
}