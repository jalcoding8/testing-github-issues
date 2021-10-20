
    `On February 22, 2021 I received an email from GitHub titled: DEPRACATION NOTICE.
    I was advised that using a 'password' as Authentication to Git would soon no longer work.
    I thought it was a vague statement to be coming from GitHub, there was no specific date and it wasn't clear to me.
    There is a username and password associated with signing in to your GitHub account.
    There is also a username and password sometimes requested when pushing from a local repository to the remote GitHub repository.
    GitHub was referrring the the second instance.  They provided a link to get more information about the change.
    There use of the word 'Git' referred to GitHub and not to the use of the git command line.

    THE CHANGE:
    What the GitHUb change involved was that instead of using your 'password' to push changes from a local repo to the remote GitHub repo,
    a user would have to create and implement the use of a new 'Authentication Access Token' to push changes.
    In order to create a (new) 'Authentication access token':

    - sign in to your GitHub account
    - click on your profile icon in the upper right hand page corner
    - a drop down menu will appear: 
      * click on 'Settings' (towards bottom of menu choices)
      * click on 'Developer Settings' (on left side of the new page that appears)
      * click on 'Personal Access Tokens' (third choice on new page that appears)
      * click on the box 'Generate new token'
       (a new access token will appear - click on the blue icon to copy it)
       (save it somewhere on your computer)

       Important:  You should receive an email from Github to the email address you
       entered associated with your GitHub account.  It will be a confirmation that
       you have successfully created/generated an Authentication access token.

    When you are in the bash shell command line or another text editor 
    ( although bash shell is more considered to be a command processor ):
    So now you have created a local repository (I'm using bash shell and Visual Studio Code.)
    I used my git commands in bash shell terminal:

    In a parent directory already existing:

     * I typed 'mkdir testing-github-issues' to make a new (sub) directory for this project
     * Then I typed 'cd testing-github-issues' to change directories into this new directory
     * Then I typed 'touch README.md' to create an empty file for thie new directory
       (to provide info about the project and to implement the use of 'Markdown')

     * Then I typed 'touch script.js' to create another empty file for the new directory
       (although it probably should have been a text file .txt)
       I added the content here in Visual Studio Code.
     * Now I have a new local directory (subdirectory actually) containing 2 empty files.
    Next, in bash shell, I typed 'git init' to initialize a new repository that is intended
    to be associated with my GitHub account, and the terminal showed this confirmation:

    Initialized empty Git repository in /Users/my-laptop-username/parent-driectory-name/testing-github-issues/.git/
    (and a few more standard lines of the confirmation message of a git init)


    Next, I go over to GitHub.  I am already logged in and tap on the GtiHub tab icon at the top of
    my laptop screen.  (A little black octocat favicon)
    At the top of my GitHub page on the right I clicked on the +- icon in between my Github user icon
    and the bell icon.  
    A small drop down menu appears.  I clicked on 'new repository' so I can create my remote
    GitHub repository, that will be associated with my local repository. 
    A new Gtihub page appears
    Near the top - after my GitHub username/ (in the empty space) I typed testing-github-issues 
    to give my new GitHub repository a name related to its' content/purpose.
    (and I am using https:// not ssh)

    Then you can choose to make your GitHub repository 'Public' or 'Private'
    You don't need to select anything else, it will be handled elsewhere. (I chose 'Public')
    Next, towards the bottom of the page click on the green box 'create repsoitory'.

    A new page appears with three options for the new repository:

    I chose the 2nd option because I already created the local repository
    (so I don't need option 1)
    (and my local repository is not one of the listed choices of option 3) 

    so one by one
    I copy and paste the three strings into bash shell terminal:
    1). 


    `
