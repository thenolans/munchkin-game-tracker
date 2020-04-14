# Munchkin Score Keeper

### Purpose

One of my favorite games is a role-playing card game called Munchkin, created by Steve Jackson Games. Instead of keeping score with paper and pen, this application is a reusable scorekeeper that tracks users' level, combat bonus, and gender. Users can enter combat mode, which will allow them to increment or decrement their combat score and increment and decrement a monster's level.

### Development Focus

- Utilized `useEffect` to check validity of players
- Implemented a `useContext` hook to manage the state of the game data.
- Persisted game data in `localStorage` and reload the game progress on refresh
- Use `react-router`to handle routes and navigation
- Focused on the accessibility and keyboard navigation for the user
- Incorporated testing using `jest` and `react-testing-library`
- Conditionally render player status (First or Discards) based on their level
- Allow users to toggle their sex while in game mode
- Created a player form that will allow users to edit existing players or create new players

### Screenshots

<div>
<img width="140" height= "230" src="https://user-images.githubusercontent.com/54158919/79149502-433ea700-7d95-11ea-9f20-a1dd32de4ce8.png">

<img width="140" height= "230" src="https://user-images.githubusercontent.com/54158919/79149574-5f424880-7d95-11ea-9d42-4c3ea5af0cd9.png">

<img width="140" height= "230" src="https://user-images.githubusercontent.com/54158919/79149605-69644700-7d95-11ea-871a-c67918ca9a86.png">

<img width="140" height= "230" src="https://user-images.githubusercontent.com/54158919/79149632-72edaf00-7d95-11ea-87cb-eed4346dcf97.png">

<img width="140" height= "230" src="https://user-images.githubusercontent.com/54158919/79149657-7b45ea00-7d95-11ea-9485-bcd8af525ad4.png">

<img width="140" height= "230" src="https://user-images.githubusercontent.com/54158919/79149787-a9c3c500-7d95-11ea-9d68-3c57d8e10a8e.png">

</div>

## Setup Instructions

1. Clone this repository.
2. Install dependencies with `yarn install`
3. Start app with `yarn start`

---

Munchkin is a trademark of Steve Jackson Games, and its rules and art are copyrighted by Steve Jackson Games. All rights are reserved by Steve Jackson Games. This game aid is the original creation of Cynthia Dacey Nolan and is released for free distribution, and not for resale, under the permissions granted in the <a href="http://www.sjgames.com/general/online_policy.html">Steve Jackson Games Online Policy</a>.
