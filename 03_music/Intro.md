

# My Music Project 

## Analysis

We need to analyze the project of 'My Music'

- Main Page
	+ show the music list
	+ can play music

- Add Music Page
	+ user can add music info 
	+ user can add music file
- Edit Music Page
	+ user can edit music info
	+ user can edit music file
- Delete Music Page
	+ user can delete music file
- Query Music Page
	+ in the Main Page, putting a search bar, and can put out the result by typing.


## Rote Design

The root used to response the different page content by the different url path

GET   /              render Main Page
GET   /add           render Add Music Page
POST  /add           deal with the request of user adding music
GET   /edit?mid=xxx  render Edit Music Page
POST  /edit?mid=xxx  deal with the request of user editing music
GET   /remove?mid-xx deal with the request of removing music


ajax rote

GET   /music   bring the muic info in the musicList response to the client in json string format



## Function Develop


### `npm init -y`  package.json init

### the third part dependencies


put the front end lib in 'devDependencies'
- bootstrap UI framework `npm install --save-dev bootstrap`
- jQuery DOM lib `npm install --save-dev jquery`
- art-temlate template engine  `npm install --save-dev art-template` 

and put the server end lib in 'dependencies'


















