import './style.css';
import { useState, useEffect } from 'react';

const Detail = ({data, name}) => {
    const [getStar, setStar] = useState(0);
    const [getRate, setRate] = useState(0);
    const [getText, setText] = useState('');
    const [getReview, setReview] = useState([]);

    const handleSubmit = () => {

        setReview([
            ...getReview, {username: name, star: getRate, review: getText, id: Math.random() * 1000}
        ]);

        setText('');
    }

    useEffect(() => {
        let starAvg = 0;
        getReview.forEach(i => {
            starAvg += i.star;
        })
        setStar(Math.round(starAvg/getReview.length));
    }, [getReview])

    // useEffect(() => {
    //     const user1 = {
    //         username: "Sherly",
    //         star: 2,
    //         review: "Storyline very wonderfull, the best film i ever seen",
    //         id: 1
    //     }
    //     const user2 = {
    //         username: "Watson",
    //         star: 5,
    //         review: "This should be the best film of this year, respect for the actors and director",
    //         id: 2
    //     }
    //     setReview([
    //         ...getReview, user1, user2
    //     ])
    // }, []);
    return ( 
        <div className="card-detail">
            <img src={data.Poster} alt='poster' />
            <h1>{data.Title}</h1>
            <p>{data.Released}</p>
            <hr />
            <div className="more-detail">
                <h6>{data.Actors}</h6>
                <h5>{data.Genre}</h5>
                <p>{data.Plot}</p>
            </div>
            <hr />

            <div className="rating mt-5">
                <span className={`fa fa-star ${getStar >= 1  ? 'checked' : ''}`}></span>
                <span className={`fa fa-star ${getStar >= 2  ? 'checked' : ''}`}></span>
                <span className={`fa fa-star ${getStar >= 3  ? 'checked' : ''}`}></span>
                <span className={`fa fa-star ${getStar >= 4  ? 'checked' : ''}`}></span>
                <span className={`fa fa-star ${getStar >= 5  ? 'checked' : ''}`}></span>
            </div>

            <div className="user-rating mt-5">
                <hr />

                {getReview.map(i => (
                    <div key={i.id}>
                        <div className="">
                            <span className={`fa fa-star ${i.star >= 1  ? 'checked' : ''}`}></span>
                                <span className={`fa fa-star ${i.star >= 2  ? 'checked' : ''}`}></span>
                                <span className={`fa fa-star ${i.star >= 3  ? 'checked' : ''}`}></span>
                                <span className={`fa fa-star ${i.star >= 4  ? 'checked' : ''}`}></span>
                            <span className={`fa fa-star ${i.star >= 5  ? 'checked' : ''}`}></span>
                        </div>
                        <div className="">
                            <h5>{i.username}</h5>
                        </div>
                        <div className="">
                            <p>{i.review}</p>
                        </div>
                    </div>
                    
                ))}
            </div>

            <div className="container-form mb-5">
            <div className="rating-form mt-5 mb-2">
                <span className={`fa fa-star ${getRate >= 1  ? 'checked' : ''}`} onClick={() => setRate(1)}></span>
                <span className={`fa fa-star ${getRate >= 2  ? 'checked' : ''}`} onClick={() => setRate(2)}></span>
                <span className={`fa fa-star ${getRate >= 3  ? 'checked' : ''}`} onClick={() => setRate(3)}></span>
                <span className={`fa fa-star ${getRate >= 4  ? 'checked' : ''}`} onClick={() => setRate(4)}></span>
                <span className={`fa fa-star ${getRate >= 5  ? 'checked' : ''}`} onClick={() => setRate(5)}></span>
            </div>
                <input type="text" value={getText} className='mb-3' onChange={(e) => setText(e.target.value)} />
                <button className='btn btn-primary' type='submit' onClick={handleSubmit}>Submit</button>
            </div>
            

            {/* <form className='mt-5 starform'>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                </div>
            </form> */}
        </div>
     );
}
 
export default Detail;