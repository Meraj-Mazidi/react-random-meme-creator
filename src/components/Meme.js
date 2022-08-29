import React from "react";

function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMeme, setAllMeme] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    function handleRefresh() {
        setMeme(preState => ({
            ...preState,
            topText: "",
            bottomText: "",
        }))
    }
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    className="form-input"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    className="form-input"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="form-btn"
                    onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img className="memeImg" src={meme.randomImage} />
                <h2 className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>
            <br />
            <button className="refreshBtn"
                onClick={handleRefresh}
            >Refresh</button>
        </main>
    )
}
export default Meme