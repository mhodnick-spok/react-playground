import * as faker from 'faker'

const initialState = { teams: getTeams(), selectedTeam: null };

export default (state = initialState, action, anything) => {
    switch(action.type) {
        case 'team-clicked':
            console.log('team-clicked action', action);
            return Object.assign({}, state, {selectedTeam: action.team});
        default:
            return state;
    }
}

function getTeams() {
    const teamNames = ['Wild', 'Blackhawks', 'Jets', 'Blues', 'Avalanche']
    let teams = [];
    for (var i = 0; i < teamNames.length; i++) {
        let team = { id: faker.random.number(), name: teamNames[i], players: [] };
        teams.push(team);
        const playerCount = faker.random.number({ min: 10, max: 20 });
        for (var p = 0; p < playerCount; p++) {
            let player = { id: faker.random.number(), name: faker.name.findName() }
            team.players.push(player);
        }
    }

    return teams;
}