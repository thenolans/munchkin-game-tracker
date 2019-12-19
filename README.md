# Munchkin Score Keeper

When I was trying to find my next application idea, I tried to think of something that I could make that would potentially help me in the future.

I really enjoy playing games. One of my favorite games is a role-playing card game called Munchkin, created by Steve Jackson Games. To keep score of the game, I would have to use paper and pen. That was when I got the idea to create a score keeper.

The game can be played with 2-6 players. I wanted to allow the user to add or take away players, as long as you still have 2-6 players.

I wanted this application to require the players to input their name. I utilized useEffect to check the values in the name inputs.

I have used many applications in the past, where I accidently clicked the back button and lost all of my progress. I didn't want my users to click the wrong button and lose their progress. I decided to use useContext, to give me access to my state without prop drilling.

I also wanted to incorporate a fun element to my sore keeper. I decided to allow users to select an avatar. I made a custom avatar picker using React-Tippy that would have a tooltip with a list of avatars.

After watching the 2019 React Conference talk on accessibility, I knew that accessibility was something that I wanted to work on for this application. I installed a screen reader to make sure that my application could be used with screen readers. I also wanted to make sure that users could tab through inputs and buttons. I am still learning about accessibility, but I hope to make this application fully accessible in the future.

<img width="1437" alt="Munchkin landing page" src="https://user-images.githubusercontent.com/54158919/70554186-4c4b0d80-1b42-11ea-8e4e-5ffe96791114.png">

## Setup Instructions

1. Clone this repository.
2. Install dependencies with `yarn install`
3. Start app with `yarn start`
