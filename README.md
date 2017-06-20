This project was bootstrapped with [Create React App] (https://github.com/facebookincubator/create-react-app).



## Get started
Let's cd into that directory.
```sh
cd library/
npm install
npm start
``` 
Then open http://localhost:3000/ to see your app.
Please remember to start the backend server as well.

## Unit Test
npm test <br/>

## Understand the project
The demo project includes the following tools and frameworks (most of them are already integrated by Create React App):
- React
- Redux
- Material UI
- webpack
- ES6
- Babel

The flow would be like this:

![alt text](https://github.com/chuong2v/library/blob/master/flow.png)


## Structure
![alt text](https://github.com/chuong2v/library/blob/master/structure.png)

Some important folders: <br />
1 . **actions**: define all the actions in our website. The action files are devided by the name of the view (group, student) <br />
2. **api**: describe how we communicate with the backend server.<br />
3. **components**: contains the React components that are reused at many place in our project.<br />
4. **locale**: support the interlocalization.<br />
5. **reducers**: contains the reducers to specify how states changes in the app.<br />
6. **store**: config the store in redux.<br />
7. **pages**: contains all the React components in the app.<br />
All the files in the folder pages are grouped by the related features.<br />
If you devide a webpage on the website into some smaller pieces and sort in a hierarchy, the files inside this folder would be presented and sorted in a same way.
Building this structure by features, instead of by type, bring the big benefit when the project grows up (ex: easy to maintain, test and look up)<br />
