
//export default { type: 'team-clicked' }

// export default (team) => {
//     dispatch({ type: 'team-clicked', team });
//   //return { type: 'team-clicked', team }
// }

export function teamClicked (team) {
    return {
        type: 'team-clicked',
        team
    }
}

export function randomize(player){
    return {
        type: 'randomize',
        player
    }
}