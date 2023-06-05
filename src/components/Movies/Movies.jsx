import React, { Component } from 'react'

export default class Movies extends Component {
    state = {
        movies: [
            { id: 0, name: 'WereWolf by Night', Image: '/assets/img/1.jpg' },
            { id: 1, name: 'Luckes Girl Alive', Image: '/assets/img/2.jpg' },
            { id: 2, name: 'Hellraiser', Image: '/assets/img/3.jpg' },
            { id: 3, name: "Mr. Harrgan's Phone", Image: '/assets/img/4.jpg' },
            { id: 4, name: 'Cathrience Called Birdy', Image: '/assets/img/5.jpg' },
            { id: 5, name: 'Old People', Image: '/assets/img/6.jpg' },
        ]
    }

    render() {
        const { movies } = this.state;

        return (
            <div className="container mt-5">  <div className="row ">
                {movies.map((movie) => (
                    <div className="col-md-3" key={movie.id}>
                        <div className="card">
                            <img src={movie.Image} alt={movie.name} className="card-img-top my-2 w-100" />
                            <div className="card-body text-center ">
                                <h5 className="card-title">{movie.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div></div>
        );
    }
}
