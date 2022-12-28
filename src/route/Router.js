import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PodcastDetail from "../components/podcastDetail/PodCastDetail";
import List from "../components/listPodcasts/List";

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={ <List/> }/>
                    <Route exact path="/podcast/:podcastId" element={ <PodcastDetail/> }/>
                    <Route exact path="/prueba" render={() => (
                        <h1> prueba</h1>
                    )} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;