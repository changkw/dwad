# Dynamic Web Application Development project -- WordBoard

The blog folder shows the use of Angular while the blog-rest-api folder shows the use of Node and Express. Local MongoDB is used in for this project for the ease of development. The back-end and front-end are in different folders (blog-rest-api and blog respectively) as this allows the application to be potentially deployed in different servers.

To run the application do the following:

1. Go to `wordboard-backend` folder and start up local MongoDB in Command Prompt -- `"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath data\db`
2. In the same `wordboard-backend` folder, in another Command Prompt -- run `npm start`
3. In the `wordboard-frontend` folder, in a third Command Promot -- run `ng serve`

## Purpose of web Application and why is it needed?

The purpose of this web application is to allow anyone, ranging from individuals to groups to organizations, to create blog sites. Authors can create, edit and delete blog posts, commentators can post comments on these posts and readers can read the content of these posts. This application is deliberately created with minimal features such that it can be customized for different purposes. In other words, this application can be a basis for blogs with more specific features. 

## Target Audience

Can range from individuals to groups to organizations. Individuals can create personal blog sites. Groups can create interest-based group blog sites. Organizations can create internal blog sites.

## Features of the web application

- Sign in with Facebook – This allows first-time users to create a blog account using their Facebook credentials.
- Post – This allows an authenticated blog user to post a blog post on the webpage of his/her blog.
- Comment – This allows an authenticated blog user to post comments on others’ blog posts.

## Users of the web application

- Authors – Create, edit and delete blog posts. They need to log in in order to do so.
- Commentators – Post comments on blog posts. No authentication is required.
- Readers – Read content of blog posts on the blog site. No authentication is required.

## Key use cases of the web application

### Log in to blog account

#### Main flow

    1. User clicks on the ‘Sign in with Facebook’ button.
    2. System prompts user to enter Facebook credentials.
    3. User enters Facebook credentials.
    4. User clicks on the ‘Sign in’ button.

#### Alternate flow

##### Invalid credentials entered
    1. System informs user of invalid credentials entered.
    2. User re-enters credentials in step 3.

### Log out of blog account

#### Main flow
    1. Authenticated user clicks on the ‘Log Out’ button.
    2. System directs user to login page of the application. 

### Create blog post

#### Main flow

    1. Authenticated user clicks on the ‘Create Post’ button.
    2. System displays the blog template for user.
    3. Authenticated user fills up the template accordingly.
    4. Authenticated user clicks on the ‘Post’ button.
    5. System displays the blog post on the user’s blog site.

### Edit blog post

#### Main flow

    1. Authenticated user clicks on the ‘Edit’ button below the blog post.
    2. System displays the blog template with the user’s content.
    3. Authenticated user edits the content in the template.
    4. Authenticated user clicks on the ‘Post’ button.
    5. System displays the edited blog post on the user’s blog site.

### Comment on a blog post

#### Main flow
    1. User clicks on the ‘Comment’ button below the blog post.
    2. System displays a comment textbox and a ‘Post’ button below the blog post. If user clicks on the ‘Post’ button without entering any comment, go to ‘Post button clicked without comment’ use case.
    3. User types in a comment inside the textbox.
    4. User clicks on the ‘Post’ button.
    5. System displays the comment below the blog post.

#### Alternate flow

##### Post button clicked without comment

    1 System displays a prompt box, prompting the authenticated user to enter a comment.
    2 Authenticated user enters a comment inside the textbox in step 3. 

### Delete a blog post

#### Main flow

    1. Authenticated user clicks on the ‘Delete’ button below the blog post.
    2. System displays a prompt box, confirming with the authenticated user regarding the deletion of the post.
    3. Authenticated user clicks on the ‘Yes’ button. If user clicks on the ‘No’ button, go to ‘Authenticated user clicks on ‘No’ button’ use case.
    4. System removes the blog post from the blog site.

#### Alternate flow

##### Authenticated user clicks on ‘No’ button

    1. System directs authenticated user to the blog site.
    2. Authenticated attempts to delete the blog post from step 1.

### View a blog post

#### Main flow

    1. User enters the URL of the blog site whom he/she wants to access on the address bar.  If user enters the wrong URL of the blog site, go to ‘Wrong entry of URL’ use case.
    2. System displays a list of blog posts on the blog site.
    3. User views a blog post in the list on the blog site.


### Database

Database model describing each of the data items:

1. POST (post_id, title, published_date, post_content) 
2. COMMENT (comment_id, comment_content, post_id)

