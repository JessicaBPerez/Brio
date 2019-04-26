import React, { Component } from 'react'
import axios from 'axios'
import NavbarPage from './NavbarPage';
import atlanta2 from '../images/atlanta.jpg'
import Footer from "./Footer.jsx"
const NAPSTER_API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


export default class Gyms extends Component {
    state = {
        songs: [],
        tracks: [],
        weatherCity: [],
        weatherList: []
    };

    componentDidMount() {
        this.fetchGyms()
        this.getWeatherData()
    }

    fetchGyms = () => {
        axios
            .get(`https://api.napster.com/v2.2/tracks/top?apikey=${NAPSTER_API_KEY}&limit=10`)
            .then(response => {
                this.setState({
                    songs: response.data,
                    tracks: response.data.tracks,
                    firstArtist: response.data.tracks[0],
                    firstName: response.data.tracks[0].artistName,
                    firstNameAlbum: response.data.tracks[0].albumName,
                    firstNameSong: response.data.tracks[0].previewURL,
                    secondName: response.data.tracks[3].artistName,
                    secondNameAlbum: response.data.tracks[3].albumName,
                    secondNameSong: response.data.tracks[3].previewURL,
                    thirdName: response.data.tracks[2].artistName,
                    thirdNameAlbum: response.data.tracks[2].albumName,
                    thirdNameSong: response.data.tracks[2].previewURL,
                    fourthName: response.data.tracks[4].artistName,
                    fourthNameAlbum: response.data.tracks[4].albumName,
                    fourthNameSong: response.data.tracks[4].previewURL,
                    fifthName: response.data.tracks[5].artistName,
                    fifthNameAlbum: response.data.tracks[5].albumName,
                    fifthNameSong: response.data.tracks[5].previewURL,
                    sixthName: response.data.tracks[6].artistName,
                    sixthNameAlbum: response.data.tracks[6].albumName,
                    sixthNameSong: response.data.tracks[6].previewURL,
                    seventhName: response.data.tracks[7].artistName,
                    seventhNameAlbum: response.data.tracks[7].albumName,
                    seventhNameSong: response.data.tracks[7].previewURL,
                    eighthName: response.data.tracks[8].artistName,
                    eighthNameAlbum: response.data.tracks[8].albumName,
                    eighthNameSong: response.data.tracks[8].previewURL,
                    ninthName: response.data.tracks[9].artistName,
                    ninthNameAlbum: response.data.tracks[9].albumName,
                    ninthNameSong: response.data.tracks[9].previewURL,
                });
            })
            .catch(err => {
                console.log("You messed up somewhere, Jess. Go back!", err);
            });
    };


    getWeatherData = () => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/forecast?zip=30303,us&appid=${WEATHER_API_KEY}`
            )
            .then(response => {
                this.setState({
                    weatherCity: response.data.city,
                    weatherList: response.data.list,
                    weatherMain: response.data.list[0].main.humidity,
                    weatherMain2: response.data.list[1].main,
                    actualWeatherDay1Description:
                        response.data.list[0].weather[0].description,
                    actualWeatherDay1Icon: response.data.list[0].weather[0].icon,
                    actualWeatherDay1Main: response.data.list[0].weather[0].main,
                    actualWeatherDay2: response.data.list[1].weather[0],
                    actualWeatherDay3: response.data.list[2].weather[0],
                    actualweatherDay2Description:
                        response.data.list[1].weather[0].description,
                    actualWeatherDay2Icon: response.data.list[1].weather[0].icon,
                    actualWeatherDay3Description:
                        response.data.list[2].weather[0].description,
                    actualWeatherDay3Icon: response.data.list[2].weather[0].icon
                });
            })
            .catch(err => {
                console.log("You didn't get the weather!", err);
            });
    };

    render() {
        return (
            <div>
                <NavbarPage />
                <div className="bg-dark text-white workout-margin workout-jumbo">
                    <img className="card-img" src="https://wallpaperaccess.com/full/242032.jpg" alt="Workout" />
                    <div className="card-img-overlay">
                        <h5 className="card-title centered workout-text">MUSIC</h5>
                    </div>
                </div>
                <hr className="individual-underline container audio-card-margin"></hr>

                <div
                    style={{
                        width: "100vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                    className="audio-card-margin"
                >
                    <div
                        className="w3-card-4 w3-margin margin weather justify-content-center"
                        style={{ width: "50%" }}
                    >
                        <div className="w3-display-container w3-text-white justify-content-center">
                            <img
                                src={atlanta2}
                                alt="Lights"
                                style={{ width: "100%", margin: "0 auto" }}
                            />
                            <div className="w3-xlarge w3-display-bottomleft w3-padding">
                                <h1 className="atlanta">{this.state.weatherCity.name}</h1>
                                <br />
                                <h3>Three Day Forecast</h3>
                                <h3 className="atlanta-small">
                                    Humidity: {this.state.weatherMain}
                                </h3>
                            </div>
                        </div>
                        <div className="w3-row">
                            <div className="w3-third w3-center">
                                <h3 className="atlanta-small button-margin-all">
                                    {" "}
                                    {this.state.actualWeatherDay1Description}
                                </h3>
                                <img
                                    className="border-style"
                                    src={`http://openweathermap.org/img/w/${
                                        this.state.actualWeatherDay1Icon
                                        }.png`}
                                    alt="weather icon"
                                    style={{ width: "80px" }}
                                />
                            </div>
                            <div className="w3-third w3-center">
                                <h3 className="atlanta-small button-margin-all">
                                    {this.state.actualweatherDay2Description}
                                </h3>
                                <img
                                    className="border-style"
                                    src={`http://openweathermap.org/img/w/${
                                        this.state.actualWeatherDay2Icon
                                        }.png`}
                                    alt="weather icon"
                                    style={{ width: "80px" }}
                                />
                            </div>
                            <div className="w3-third w3-center w3-margin-bottom">
                                <h3 className="atlanta-small button-margin-all">
                                    {" "}
                                    {this.state.actualWeatherDay3Description}
                                </h3>
                                <img
                                    className="border-style"
                                    src={`http://openweathermap.org/img/w/${
                                        this.state.actualWeatherDay2Icon
                                        }.png`}
                                    alt="weather icon"
                                    style={{ width: "80px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Napster Info */}
                <div className="card-flex audio-card-margin">
                    <div className="card bg-dark d-flex justify-content-center audio-card-margin" style={{ maxWidth: "400px", height: "130px" }}>
                        <div className="text-white">{this.state.ninthName}</div>
                        <div className="text-white">{this.state.ninthNameAlbum}</div>
                        <audio className="justify-content-center audio-margin" controls src={this.state.ninthNameSong}></audio>
                    </div>
                    <div className="card bg-dark d-flex justify-content-center audio-card-margin" style={{ maxWidth: "400px", height: "130px" }}>
                        <div className="text-white">{this.state.secondName}</div>
                        <div className="text-white">{this.state.secondNameAlbum}</div>
                        <audio className="justify-content-center audio-margin" controls src={this.state.secondNameSong}></audio>
                    </div>
                    <div className="card bg-dark d-flex justify-content-center audio-card-margin" style={{ maxWidth: "400px", height: "130px" }}>
                        <div className="text-white">{this.state.thirdName}</div>
                        <div className="text-white">{this.state.thirdNameAlbum}</div>
                        <audio className="justify-content-center audio-margin" controls src={this.state.thirdNameSong}></audio>
                    </div>
                    <div className="card bg-dark d-flex justify-content-center audio-card-margin" style={{ maxWidth: "400px", height: "130px" }}>
                        <div className="text-white">{this.state.fourthName}</div>
                        <div className="text-white">{this.state.fourthNameAlbum}</div>
                        <audio className="justify-content-center audio-margin" controls src={this.state.fourthNameSong}></audio>
                    </div>
                    <div className="card bg-dark d-flex justify-content-center audio-card-margin" style={{ maxWidth: "400px", height: "130px" }}>
                        <div className="text-white">{this.state.fifthName}</div>
                        <div className="text-white">{this.state.fifthNameAlbum}</div>
                        <audio className="justify-content-center audio-margin" controls src={this.state.fifthNameSong}></audio>
                    </div>
                    <div className="card bg-dark d-flex justify-content-center audio-card-margin" style={{ maxWidth: "400px", height: "130px" }}>
                        <div className="text-white">{this.state.sixthName}</div>
                        <div className="text-white">{this.state.sixthNameAlbum}</div>
                        <audio className="justify-content-center audio-margin" controls src={this.state.sixthNameSong}></audio>
                    </div>
                    <div className="card bg-dark d-flex justify-content-center audio-card-margin" style={{ maxWidth: "400px", height: "130px" }}>
                        <div className="text-white">{this.state.seventhName}</div>
                        <div className="text-white">{this.state.seventhNameAlbum}</div>
                        <audio className="justify-content-center audio-margin" controls src={this.state.seventhNameSong}></audio>
                    </div>
                    <div className="card bg-dark d-flex justify-content-center audio-card-margin" style={{ maxWidth: "400px", height: "130px" }}>
                        <div className="text-white">{this.state.eighthName}</div>
                        <div className="text-white">{this.state.eighthNameAlbum}</div>
                        <audio className="justify-content-center audio-margin" controls src={this.state.eighthNameSong}></audio>
                    </div>
                    <div className="card bg-dark d-flex justify-content-center audio-card-margin" style={{ maxWidth: "400px", height: "130px" }}>
                        <div className="text-white">{this.state.firstName}</div>
                        <div className="text-white">{this.state.firstNameAlbum}</div>
                        <audio className="justify-content-center audio-margin" controls src={this.state.firstNameSong}></audio>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
