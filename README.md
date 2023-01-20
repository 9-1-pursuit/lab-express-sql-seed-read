# Tuner Full Stack Application

## [Tuner Frontend Repo](https://github.com/DestinyJoyner/tuner-frontend)

Let's make our own music playlist app!

![](https://media4.giphy.com/media/4T7zBzdeNEtjThYDWn/giphy.gif?cid=790b76114ee03ef7f860492a9083d77f86191a7bf340002c&rid=giphy.gif&ct=g)


## Part 1

- Get a basic express app working

- Then implement the index route that uses pg-promise to query your db

|  #  | Action |  URL   | HTTP Verb |   CRUD   |            Description             |
| :-: | :----: | :----: | :-------: | :------: | :--------------------------------: |
|  1  | Index  | /songs |    GET    | **R**ead | Get a list (or index) of all songs |

Build a schema for Postgres in a `schema.sql` file with the following columns/data types:

- name string, required
- artist: string, required
- album: string
- time: string
- is_favorite: boolean

Add a `seed.sql` file that will insert a few songs into your database

- create a route `/` that says something like `Welcome to Tuner`
- create a route `/songs` that shows the array of songs you've created
- create a 404 route that when a user tries to access a route that doesn't exist, they will see this page

### Bonus

Upgrade `package.json` - add two scripts one called `dbinit` and `dbseed` to run `"psql -U postgres -f db/schema.sql"` and `"psql -U postgres -f db/seed.sql"` commands

## Part 2

|  #  |   Action   |    URL     | HTTP Verb |    CRUD    |              Description               |
| :-: | :--------: | :--------: | :-------: | :--------: | :------------------------------------: |
|  2  |  **Show**  | /songs/:id |    GET    |  **R**ead  | Get an individual view (show one song) |
|  3  | **Create** |   /songs   |   POST    | **C**reate |           Create a new song            |

- add routes for create and show
- add some logic so that if someone goes to an invalid id they will be redirected to the 404 route you had written in the last part
- Add validation that `name` and `artist` are required and that `is_favorite` is a boolean

### Bonuses

Improve the error handling, so that you can have more helpful error messages for yourself as a dev, and for future users of the app.

Anytime you encounter an error, especially user error, handle it - send back a response code and possibly a helpful message.

## Part 3

|  #  |   Action    |    URL     | HTTP Verb |    CRUD    |  Description  |
| :-: | :---------: | :--------: | :-------: | :--------: | :-----------: |
|  4  | **Destroy** | /songs/:id |  DELETE   | **D**elete | Delete a song |
|  5  | **Update**  | /songs/:id |    PUT    | **U**pdate | Update a song |

- add routes for delete and update
- add appropriate validation and error handling

### SUPER Bonus

Add functionality where if a user goes to

- `/songs?order=asc` it will organize the songs alphabetically
- `/songs?order=desc` it will organize the songs in reverse alphabetical order
- `/songs?is_favorite=true` it will only show the songs where the value of `is_favorite` is true
- `/songs?is_favorite=false` it will only show the songs where the value of `is_favorite` is false


# [Part 4 is a React App, see other readme for more details](https://github.com/9-1-pursuit/tuner-frontend)

## Part 5 

You should build at least one one-to-many resource. Choose one of the following:

- Build a One-to-Many so that `One Playlist has many songs` for both the back and front end
- Build a One-to-Many so that `One Album has many songs` for both the front end and the back end
- Build a One-to-Many so that `One Artist has many songs` for both the front end and the back end


### Bonuses
- Build a way to see the Songs on an Album
- Tidy up the UI/UX so this app is easy to use for anyone


For addtional practice keep building out the app. Learning to work with a more complex app is an important skill. 

## SUPER BONUS Part 6

Upgrade the app so that a playlist can have many songs and a song can belong to many playlists
Add users so that users can have many playlists
Add the ability for users to like songs (many songs can be liked by users, users can like many songs)
