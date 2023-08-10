# Reddish - A Reddit Clone - MERN ( Developed by Akash Bhambere )

[Reddit](https://www.reddit.com) clone (a social media site) made w/ MERN stack & Redux.

## 🖥️ Tech Stack
**Frontend:**

![reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)&nbsp;
![react-router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)&nbsp;
![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)&nbsp;

**Backend:**

![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![expressjs](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)&nbsp;
![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;
![jwt](	https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)&nbsp;

**See Demo Here:** [Demo Video](https://drive.google.com/file/d/16P8HN_Ll3u-QFXfma61P2pxGjpLPC5eF/view?usp=sharing)

## Features

- Authentication (login/register with username-password)
- CRUD posts & comments
- Add posts in the form of text, link or image
- Upvote/downvote posts & comments
- Dynamic URLs for users (u/Aman) & subreddits (r/reactjs)
- Sorting of posts on basis of algorithms like hot, top, controversial etc.
- Full database search feature
- Pagination of posts
- Error management to prevent app crashes
- Sort comments by oldest, newest, most upvoted etc.
- Avatar uploading for user profiles
- Toast notifications for actions: adding posts, deleting comments etc.
- Loading spinners for relevant fetching processes
- Dark mode toggle w/ local storage save
- Responsive UI for all screens

## Screenshots
<table>
  <tr>
    <td><img src="https://github.com/imcoder16/Reddish-A-Reddit-Clone/blob/main/Add%20Post.png" alt="mockup" /></td>
    <td><img src="https://github.com/imcoder16/Reddish-A-Reddit-Clone/blob/main/Create%20Reddit.png" alt="mockups" /></td>
  </tr>
    <tr>
    <td><img src="https://github.com/imcoder16/Reddish-A-Reddit-Clone/blob/main/Dark%20Theme.png" alt="mockup" /></td>
    <td><img src="https://github.com/imcoder16/Reddish-A-Reddit-Clone/blob/main/Homepage.PNG" alt="mockups" /></td>
  </tr>
    <tr>
    <td><img src="https://github.com/imcoder16/Reddish-A-Reddit-Clone/blob/main/Post.png" alt="mockup" /></td>
  </tr>
</table>

## Usage

Notes:

- For image API, make account at cloudinary.com & get API keys from account dashboard.
- For upload preset usage, if you want to organize images separately at cloudinary.com, you have to create it from account settings first. If you don't want to, just don't put anything or use .env key - `UPLOAD_PRESET`.

#### Env variable:

Create .env file in server directory and add the following:

```
MONGODB_URI = "Your Mongo URI"
PORT = 3005
SECRET = "Your JWT secret"
CLOUDINARY_NAME = "From your cloudinary dashboard"
CLOUDINARY_API_KEY = "From your cloudinary dashboard"
CLOUDINARY_API_SECRET = "From your cloudinary dashboard"
UPLOAD_PRESET = "Folder/preset name from your cloudinary account" (OPTIONAL)
```

#### Client:

Open client/src/backendUrl.js & change "backend" variable to `"http://localhost:3005"`

```
cd client
npm install
npm start
```

#### Server:

Note: Make sure that you have installed 'nodemon' as global package.

```
cd server
npm install
npm run dev
```

<h2>📬 Contact</h2>

If you want to contact me, you can reach me through below handles.

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://in.linkedin.com/in/akash-bhambere-6307011ab)

© 2022 Akash Bhambere
