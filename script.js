let teams = [];
let points = {};
let maxPoints = 50;  // Define a points threshold to declare a winner

// Set up teams based on user input
function setupTeams() {
  const teamCount = document.getElementById('teamCount').value;
  if (teamCount < 2 || teamCount > 5) {
    alert('Please enter a number between 2 and 5.');
    return;
  }

  const teamList = document.getElementById('teamList');
  teamList.innerHTML = ''; // Clear previous entries
  teams = [];
  points = {};

  // Create teams and initialize points
  for (let i = 1; i <= teamCount; i++) {
    const teamName = `Team ${i}`;
    teams.push(teamName);
    points[teamName] = 0;
    const teamElement = document.createElement('p');
    teamElement.innerText = teamName;
    teamList.appendChild(teamElement);
  }

  // Update points tracker
  updatePointsTracker();
}

// Complete a challenge and add points to teams
function completeChallenge(challengeNum, pointsAwarded) {
  const teamName = prompt(`Which team completed Challenge ${challengeNum}?`);
  if (!teams.includes(teamName)) {
    alert('Invalid team name. Try again.');
    return;
  }

  // Add points to the selected team
  points[teamName] += pointsAwarded;
  updatePointsTracker();

  // Check if the team has won
  if (points[teamName] >= maxPoints) {
    displayWinner(teamName);
  }
}

// Update the points tracker display
function updatePointsTracker() {
  const pointsTracker = document.getElementById('pointsTracker');
  pointsTracker.innerHTML = ''; // Clear the tracker

  teams.forEach(team => {
    const pointsDisplay = document.createElement('p');
    pointsDisplay.innerText = `${team}: ${points[team]} points`;
    pointsTracker.appendChild(pointsDisplay);
  });
}

// Display the winning team with a congratulatory message
function displayWinner(winningTeam) {
  const winnerSection = document.getElementById('winner-section');
  const winnerTitle = document.getElementById('winnerTitle');
  const congratulationsMessage = document.getElementById('congratulationsMessage');

  winnerTitle.innerText = `🎉 Congratulations, ${winningTeam}! 🎉`;
  congratulationsMessage.innerText = `You are the winners of the SDG Science Challenge with ${points[winningTeam]} points!`;
  
  // Show the winner section with a dynamic animation
  winnerSection.style.display = 'block';
}
