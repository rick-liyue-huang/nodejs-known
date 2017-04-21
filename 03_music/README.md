

# "My Music" Project

##  Analyse

here we will consider the realized steps in project

- Homepage
  + show music list
  + can play music
  + lyric play
- 'Add Music' page
  + user can add music
  + user can upload music
- 'Edit Music' page
  + user can edit music
  + user can update music file
- 'Remove Music'
  + user can remove music
- query music info
  + query the music info in the searchbar

## Route Design

based on the different url to get the different page

GET   /       render page
GET   /add    render 'add music' page
POST  /add    deal with data in 'add music' page
GET   /edit?mid=xx   render 'edit music' page
POST  /edit?mid=xx    deal with data in 'edit music' page
GET   /remove?mid=xx deal with remove music

ajax route
GET /music   transfer the musics in array to customer in json type

## Function develop

### `package.json` file initialize

`npm init [-y]`  `-y` complete automatically

### install the third part dependency modules

- bootstrap UI框架  `npm install --save-dev bootstrap`
- jQuery DOM操作库 `npm install --save-dev jquery`
- art-template 模板引擎 `npm install art-template`


### render homepage

### using ajax to send request and get data

#### artTemplate template engine

[artTemplate github](https://github.com/aui/artTemplate)

### play music

### render 'add music' page

### deal with data in 'add music' page

### ender 'edit music' page

### deal with data in 'edit music' page

### deal with remove music

### query string in req.url 

