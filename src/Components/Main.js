import React from 'react'
import '../App.css'

function Main(props) {
    let {data,index, handlePrevious, handleNext} = props

    return(
        <div className='mainContent'>
            <div className='details'>
                <section className='tracker'>{`${data[index].id}/25`}</section>

                <article className='Name'>{`${data[index].name.first} ${data[index].name.last}`}</article>
                
                <div className='description'>
                    <div className='about'>
                        <div>From:</div>

                        <div  className='info'>{`${data[index].city}, ${data[index].country}`}</div>
                    </div>

                    <section className='about'>
                        <div>Job Title:</div>

                        <div  className='info'>{data[index].title}</div>
                    </section>

                    <article className='about'>
                        <div>Employer:</div>
                        <div  className='info'>{data[index].employer}</div>
                    </article>    
                </div>

                <article className='favMovies'>
                    <div className='about'>Favorite Movies:</div>
                        <ol className='movieList'>
                            <li className='movieStyle'>{data[index].favoriteMovies[0]}</li>
                            <li className='movieStyle'>{data[index].favoriteMovies[1]}</li>
                            <li className='movieStyle'>{data[index].favoriteMovies[2]}</li>
                        </ol>
                </article>

            </div>

            <section className='buttonsContainer'>
                <div>
                    <button className='sideButtons' onClick={handlePrevious}>{`< Previous`}</button>
                </div>

                <article className='buttonsGroup'>
                    <button className='middleButtons'>Edit</button>

                    <button className='middleButtons'>Delete</button>

                    <button className='middleButtons'>New</button>
                </article>

                <div>
                    <button className='sideButtons' onClick={handleNext}>{`Next >`}</button>
                </div>

            </section>
        </div>
    )
}

export default Main;