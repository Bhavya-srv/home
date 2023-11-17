import React, { useState } from 'react'
import Image from '../Image/white.jpg'
import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fruits, setFruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])
    const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % fruits.length
        setIndex(newIndex)
    }



    return (
        <div>
            <div
             style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={Image} alt="images" style={{ height: '200px', width: '300px'}}/> <br />
                <p>.</p>
               
                {/* destructuring */}A flower, sometimes known as a bloom or blossom
                is the reproductive structure found in flowering plants (plants of the division Angiospermae). 
                Flowers produce gametophytes, which in flowering plants consist of a few haploid cells that produce gametes. The "male" gametophyte, which produces non-motile sperm, is enclosed within pollen grains; the "female" gametophyte is contained within the ovule. When pollen from the anther of a flower is deposited on the stigma, this is called pollination
                <p>likes: {likes}</p>
                <button onClick={count}>Like</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>output : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <ReactPlayer url={'https://www.youtube.com/watch?v=pZVdQLn_E5w&ab_channel=NextObserver'} height={200} controls />
                <div>
                    <p>I like this {fruits[index].fruit}</p>
                    <p>Dandelions by Ruth B. </p>
                    <button onClick={change}>Change me</button>
                </div>
            </div>
        </div>
    )
}
export default Body