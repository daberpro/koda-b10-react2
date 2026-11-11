# React 2
on this repo i learn to use react props and state to handle counter, and update the ui whenever the state change

## Update
i refactor the code to have a few more components, that `NumberDisplay` and `Counter`. which is the 
`NumberDisplay` component just become a place to show the state value, then `Counter` component to 
wrap all `Button` and `NumberDisplay` to be single component, but the state now given by parents component
who call the Counter component, so i use props to pass the state into counter component

### Result
![Result](result.gif)
