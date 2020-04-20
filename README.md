# Munchkin Game Tracker

### Purpose

Annoyed with the constant crossing out of levels when keeping score on paper and pencil only to lose track of player attributes throughout the game, I built a game tracker application to manage current level, combat bonuses, discard eligibility, and other player attributes.

### Development Focus

- Implement `useContext` hook to manage the state of the game progress and all player data
- Implement `useEffect` hooks to react to data changes and update player cards accordingly
- Implement `useLayoutEffect` to synchronously handle certain state updates to prevent element flickering
- Persist game data in `localStorage` and reload the game progress on refresh, if available
- Create unit tests for all components using `Jest` and `React Testing Library` to achieve 100% code coverage
- Use `react-router` to handle routes and navigation
- Explore improving the accessibility and keyboard navigation using `ARIA` attributes

### Screenshots

<div>
<img width="140" height= "230" src="https://user-images.githubusercontent.com/54158919/79149502-433ea700-7d95-11ea-9f20-a1dd32de4ce8.png">

<img width="140" height= "230" src="https://user-images.githubusercontent.com/54158919/79149574-5f424880-7d95-11ea-9d42-4c3ea5af0cd9.png">

<img width="140" height= "230" src="https://user-images.githubusercontent.com/54158919/79149605-69644700-7d95-11ea-871a-c67918ca9a86.png">

<img width="140" height= "230" src="https://user-images.githubusercontent.com/54158919/79149632-72edaf00-7d95-11ea-87cb-eed4346dcf97.png">

<img width="140" height= "230" src="https://user-images.githubusercontent.com/54158919/79149657-7b45ea00-7d95-11ea-9485-bcd8af525ad4.png">

<img width="140" height= "230" src="https://user-images.githubusercontent.com/54158919/79149787-a9c3c500-7d95-11ea-9d68-3c57d8e10a8e.png">

</div>

### Testing

One of my main goals was to implement testing using `jest` and `react-testing-library` and get my test coverage to 100%.

![code-coverage- munchkin](https://user-images.githubusercontent.com/54158919/79487348-1e8d3e00-7fe6-11ea-84b0-81aecef65721.png)

## Setup Instructions

1. Clone this repository.
2. Install dependencies with `yarn install`
3. Start app with `yarn start`

---

Munchkin is a trademark of Steve Jackson Games, and its rules and art are copyrighted by Steve Jackson Games. All rights are reserved by Steve Jackson Games. This game aid is the original creation of Cynthia Dacey Nolan and is released for free distribution, and not for resale, under the permissions granted in the <a href="http://www.sjgames.com/general/online_policy.html">Steve Jackson Games Online Policy</a>.
