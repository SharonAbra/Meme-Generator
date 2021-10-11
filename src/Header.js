import logo from './logo.png';

export const Header = () => {
    return (
        <header>
            <img className="logo" alt="meme" src={logo}></img>
            <p>Meme Generator</p>
        </header>
    )
}