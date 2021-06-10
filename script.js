this.getRandomBinaryTeam = () => {
  document.getElementById('team_assigned').className = '';
  document.getElementById('icebreak_questions').className = '';
  const teams = ['team-one', 'team-two'];
  const selectedTeam = Math.random() < 0.5 ? 0 : 1;
  setTimeout(() => {
    document.getElementById('team_assigned').classList.add(teams[selectedTeam]);
    document
      .getElementById('icebreak_questions')
      .classList.add(teams[selectedTeam]);
  }, 100);
};
