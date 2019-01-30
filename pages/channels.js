'use strict'

import Link from 'next/link'
import Error from './_error'
import PodcastWithClick from '../components/podcastWithClick'
import PodcastPlayer from '../components/PodcastPlayer';
import ChannelGrid from '../components/ChannelGrid'

export default class extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            openPodcast: null
        }
    }
    
    static async getInitialProps(data) {
        let query = data.query
        let idChannel = query.id
        // res es la respuesta de next.
        let res = data.res

        try {
            let [ reqChannels, reqAudios, reqSeries ] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${idChannel}`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
            ])

            if( reqChannels.status >= 400 ) {
                // para cuestiones de SEO
                res.satusCode = reqChannels.status 
                return { channel : null, audios : null, series : null, statusCode: reqChannels.status }
            }
    
            // let reqChannels = await fetch(`https://api.audioboom.com/channels/${idChannel}`)
            let dataChannel = await reqChannels.json()
            let channel = dataChannel.body.channel
    
            // let reqClip = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
            let dataAudios = await reqAudios.json()
            let audios = dataAudios.body.audio_clips
    
            // let reqSerie = await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
            let dataSerie = await reqSeries.json()
            let series = dataSerie.body.channels
    
            return { channel, audios, series, statusCode: 200 }

        } catch (e) {
            return { channel : null, audios : null, series : null, statusCode: 503 }
        }

        
    }

    openPodcast = (event, podcast) => {
        event.preventDefault()

        this.setState({
            openPodcast: podcast
        })
    }

    closePodcast = (event) => {
        event.preventDefault()
        this.setState({
            openPodcast: null
        })
    }

    render() {
        const { channel, audios, series, statusCode } = this.props
        const { openPodcast } = this.state

        if( statusCode !== 200 ) {
            return <Error statusCode={ statusCode } />
        }

        return (
            <div>
                <header> {channel.title} </header>

                <img className="banner" src={channel.urls.banner_image.original}></img>
                
                {
                    openPodcast && 
                    <div className="modal">
                        <PodcastPlayer 
                            clip={ openPodcast }
                            onClose={ this.closePodcast } />
                    </div>
                }
                <h1>{ channel.title }</h1>

                <div className="channels">
                    {

                        audios.map((clip, i) => (
                            <Link href={`/podcast?idAudio=${ clip.id }`}>
                                <a className="channel">
                                    <img src={clip.urls.image} alt="imagen" />
                                    <p>{clip.title}</p>
                                </a>
                            </Link>
                        ))
                    }
                </div>

                <h1>Sub-series</h1>
                {
                    (series.length !== 0) ?
                    series.map((serie, i) => (
                        <div>{serie.title}</div>
                    )) :
                    <p>No hay subseries para mostrar</p>    
                }

                <h2>Últimos podcast</h2>
                <PodcastWithClick 
                    podcasts={ audios } 
                    onClickPodcast={ this.openPodcast } 
                    />

                <style jsx>{`
                    header {
                        color: #fff;
                        background: #8756ca;
                        padding: 15px;
                        text-align: center;
                    }
                    .banner{
                        width:100%;
                        height:30vh;
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
                        text-align:center;
                    }                    
                    a {
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
                    .modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 99999;
                    }
                `}</style>

                <style jsx global>{`
                    body {
                        margin: 0;
                        font-family: system-ui;
                        background: white;
                    }
                `}</style>
            </div>
        )
    }
}