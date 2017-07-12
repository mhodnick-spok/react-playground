import * as faker from 'faker'

const initialState = { teams: getTeams(), selectedTeam: null };

export function mainReducer (state = initialState, action, anything) {
    switch(action.type) {
        case 'team-clicked':
            console.log('team-clicked action', action);
            return Object.assign({}, state, {selectedTeam: action.team});
        case 'randomize':
            console.log('randomizing', action)
            let player = action.player
            return state;
        default:
            return state;
    }
}

export function getStats(state) {
    let stats = {'RW': 0, 'LW': 0, 'C': 0, 'D': 0, 'G': 0};
    state.teams.forEach(team => {
        team.players.forEach(player => {
            stats[player.position]++;
        });
    });
    return stats;
}

function getTeams() {
    const positions = ['RW', 'LW', 'C', 'D', 'G']
    const teamNames = ['Wild', 'Blackhawks', 'Jets', 'Blues', 'Avalanche']
    let teams = [];
    for (var i = 0; i < teamNames.length; i++) {
        let team = { id: faker.random.number(), name: teamNames[i], players: [] };
        teams.push(team);
        const playerCount = faker.random.number({ min: 10, max: 20 });
        for (var p = 0; p < playerCount; p++) {
            let player = { id: faker.random.number(), name: faker.name.findName(), position: positions[faker.random.number({min:0, max: 4})] }
            team.players.push(player);
        }
    }

    return teams;
}