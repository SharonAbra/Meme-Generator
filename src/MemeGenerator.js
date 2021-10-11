import React from 'react';
export class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
    }

    componentDidMount () {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then (result => {
            this.setState({allMemeImgs:result.data.memes})
        })
    }

    handleTop = (e) => {
        this.setState({topText:e.target.value})
    }

    handleBottom = (e) => {
        this.setState({bottomText:e.target.value})
    }

    handleClick = () => {
        let random = this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)].url;
        this.setState({randomImage:random})
    }

    render() {
        return (
            <>
                <form className="meme-form">
                    <input placeholder="Top Text" onChange={this.handleTop}></input>
                    <input placeholder="Bottom Text" onChange={this.handleBottom}></input>
                    <button type="button" onClick={this.handleClick}>Gen</button>
                </form>
                <div className="meme">
                    <img alt="meme" src={this.state.randomImage}></img>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </>
        )
    }
}