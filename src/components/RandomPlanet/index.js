import React from 'react';
import './index.css';
import PlanetService from '../../services/PlanetService'


export default class RandomPlanet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isLoading: false,
            currentPlanet: { name: '', population: 0, climate: '', terrain: '', films: 0 }
        };
        this.randomService = new PlanetService();
    }

    async componentWillMount() {
        this.setLoad(true);
        var result = await this.randomService.getCount();        
        this.setState({
            count: result.count,
            isLoading: false
        });
        this.getPlanet();
    }

    

    async getPlanet() {
        this.setLoad(true);
        var nunRandom = Math.floor(Math.random() * this.state.count);
        var id = nunRandom + 1
        var result = await this.randomService.getPlanet(id);
        this.setState({
            currentPlanet: result
        });
        this.setLoad(false);
    }

    setLoad(isLoading){
        this.setState({
            isLoading: isLoading
        });

    }

    nextPlanet = async () => {       
        this.getPlanet();       
    }

    render() {
        return (
            <div className="content">
                <div className="card">
                    <div className="card-header">
                        {this.state.currentPlanet.name}

                    </div>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    Population:
                                </div>
                                <div className="col-sm">
                                    {this.state.currentPlanet.population}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm">
                                    Climate:
                                </div>
                                <div className="col-sm">
                                    {this.state.currentPlanet.climate}
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-sm">
                                    Terrain:
                                </div>
                                <div className="col-sm">
                                    {this.state.currentPlanet.terrain}
                                </div>

                            </div>

                            <div className="row" style={{paddingTop: '40px'}}>
                                <div className="col-sm d-flex justify-content-center">
                                    <h4>Features em {this.state.currentPlanet.films.length} films</h4>
                                </div>

                            </div>

                            <div className="row" style={{paddingTop: '40px'}}>
                                <div className="col-sm d-flex justify-content-center">
                                    <button type="button" onClick={this.nextPlanet} className="btn btn-primary">NEXT</button>
                                </div>
                            </div>

                            {this.state.isLoading &&
                               <div className="loading d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                               </div>
                            }

                           


                        </div>

                    </div>
                </div>
            </div>
        )
    }
}