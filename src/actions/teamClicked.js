
//export default { type: 'team-clicked' }

// export default (team) => {
//     dispatch({ type: 'team-clicked', team });
//   //return { type: 'team-clicked', team }
// }

export default (team) => {
    return {
        type: 'team-clicked',
        team
    }
}