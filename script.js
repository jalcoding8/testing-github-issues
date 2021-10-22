
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
    The personal access token is used to connect to the GitHub API.

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
       I added the content working in Visual Studio Code.
     * Now I have a new local directory (subdirectory actually) containing 2 empty files.
    Next, in bash shell, I typed 'git init' to initialize a new repository that is intended
    to be associated with my GitHub account, and the terminal showed this confirmation:

    Initialized empty Git repository in /Users/my-laptop-username/parent-driectory-name/testing-github-issues/.git/
    (and a few more standard lines of the confirmation message of a git init)


    Next, I go over to GitHub.  I am already logged in and tap on the GtiHub tab icon at the top of
    my laptop screen, because I tend to leave tabs open.  (A little black octocat favicon)
    Now I'm looking at my GitHub homepage.
    At the top of my GitHub page on the right I clicked on the +- icon in between my Github user icon
    and the bell icon.  
    A small drop down menu appears.  I clicked on 'new repository' so I can create my remote
    GitHub repository, that will be associated with my local repository. 
    A new Gtihub page appears.
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
    I entered as prompted, these three strings into bash shell terminal:

    1). git remote add https://github.com/myGitHubUsername/testing-github-issues.git
    2). git branch -M main
    3). git push -u origin main 
    Then for the first time in a long time I saw this:
    Username for 'https://github.com': I entered my Github username here
    Password for 'https://jalcoding8@github.com': I originally entered my old GitHug password here


    AND HERE IS WHEN I ENCOUNTERED MY GITHUB ISSUE (It took me a week to reconcile)
    and before I went into Settings and created my first access token.

    Instead of getting a confirmation that I had pushed my local repository to my remote Github 
    I saw this:
    remote:  Support for password authehtication was removed on August 13, 2021.  Please use
             a personal access token instead.
    remote:  Please see github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
    (I clicked on the link for the 2nd 'remote' to read the update.)
        
    I followed the link and then created my first personal access token.  I saw the token briefly then
    it disappeard from the page and text indicated it would expire in 1 month.
    
    So, I thought problem solved.  Instead of using my password when prompted for 'password':
    I had a brand new personal access token to enter.
    Since GitHub no longer uses a password at this juncture why hasn't the legacy code been
    updated to use 'access token' instead of 'password'?
    (Although you still have a username/password associated with login a GitHub account.)

    But when I entered the access token, it did not work and I saw the same two remote: messages
    above, again.  
    I tried a few more times and entered the access token each time.  I even 
    entered incorrectly intentionally, to see if it would generate an 'incorrect password' amd it 
    did.
    So, I decided, perhaps I made some type of error.  So I created a second (new) access token.
    At this point, I'm perplexed and frustrated, so I posted on the Codecademy forum that I was
    having this issue, and saw that others had indicated the same issue.  There was one attempt to
    help but since it's a relative new issue, there wasn't much feedback.
    Next I Googled the issue, but, again, as it is a relatively new as the password to access token was implemented
    on August 13, 2021, and I did not find anything that helped.
    Now on to Stack Overflow to post my issue.  I received a number of replies, but again it was 
    more 'well, try this' and I had already tried the suggestions.  
    One suggestion, which I felt was pointing to the problem, was again, the access token.
    I went back to the token generation page and deleted both tokens.
    There is a small box to click on the select 'delete'.
    After deleting both tokens, I created one more new personal access token.

    But this time something DIFFERENT happened.
    In the upper right hand corner of my MacBook Air laptop, a text box appeared.
    It was Googgle requesting that I log in to my original gmail account.
    It was NOT the gmail account I created and linked to my GitHub account.
    So I opted to not continue to log in, and instead selected 'cancel'.
    I next received a email confirmation from GitHub to the gmail account that is
    linked/associated with my GitHub account, confirming I had successfully generated a new
    access token.
    I coped this access token, by clicking on the blue document icon that is next to the
    last character of this long token (a mix of uppper and lowercase letters and numbers).
    Went back to bash terminal:
    Did a 'git push -u origin main
    Up popped:
    Username for 'https://github.com': I entered my GitHub username here'
    Password for 'https://GitHubUserName@github.com': 'I pasted my newest personl access token here'
    And, FINALLY, the push from my local repository my remote GitHub repository worked.
    I saw this:
    Branch main set up to track remote branch main from origin.
    Everything up-to-date
    Confirming a successful git push.

    To clarify:
    I have not determined why neither of the first two personal access tokens I created
    did not work.  (they have both been deleted.)
    Nor why the third, but now only existing personal access token, did work.
    (which is still active and now associated with my Github account username/gmail.)
    I followed the same protocol throughout each time.
    But, I didn't give up, and even though I repeated the same steps I was eventually
    successfully, the problem is solved.  Although I'll see as I move forward.

    One additional difference, the first two (unsuccessful) personal access tokens disappeared
    soon after being created.  In their place a date appeared indicating that each token
    had an expiration.  But the third token did not disappear.  I can still see it and copy
    if needed.  And there is not an indicated expiration date associated with this token.
    That is perplexing, as I generated each token on the same GitHub page the same way.  The
    protocol is straightforward, so I don't know why there is this deviation.

    Perhaps this document/posting will be helpful to someone else with the same issue
    when they are prompted to replace their old password with a new personal access token.
    Just remember when a bash CL prompts for 'password' it refers to the access token.

    Finally:
    Now that the recently created personal access token is now associated with GitHub account,
    I am no longer prompted to enter my 'username' and 'personal access token ( at 'password')'
    when I do a 'git push -u origin main' in bash shell as I added content to this repository.
    When I go over to my GitHub account I see the changes to my files and a time stamp to
    indicate the changes I made using the git command line inputs for the dirctory
    that I created in bash shell for my Visual Studio Code editor are confirmed.
    In bash shell in the local repository for this project:
    I entered 'git status' and see:

    On branch main
    Your branch is up-to-date with 'origin/main'.
    nothing to commit, working directory clean.

    This confirms my local and remote repositories are synced.
    My personal access token is functional and now replaces use of a password.

    (additionally) I am now using the Markdown language to style my README.md file.
    
    Hopefully, this issue is closed.

    `
