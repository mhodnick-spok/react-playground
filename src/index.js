import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as faker from 'faker'

const initialState = getInitialState();

function reducer(state = initialState, action) {
    return state;
}

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
</Provider>, document.getElementById('root'));

registerServiceWorker();

function getInitialState() {
    let league = { teams: [] };
    const teamCount = faker.random.number({ min: 4, max: 10 });
    for (var i = 0; i < teamCount; i++) {
        let team = { id: faker.random.number(), name: faker.company.companyName(), players: [] };
        league.teams.push(team);
        const playerCount = faker.random.number({min: 10, max: 20});
        for (var p = 0; p < playerCount; p++){
            let player = {id: faker.random.number(), name: faker.name.findName()}
            team.players.push(player);
        }
    }

    return league;
}