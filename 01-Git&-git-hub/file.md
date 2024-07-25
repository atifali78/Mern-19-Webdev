israr@DESKTOP-43G1QL6 MINGW64 ~
$ cd desktop

israr@DESKTOP-43G1QL6 MINGW64 ~/desktop
$ cd git_git-hub

israr@DESKTOP-43G1QL6 MINGW64 ~/desktop/git_git-hub
$ ls
four/  one/  three/  two/

israr@DESKTOP-43G1QL6 MINGW64 ~/desktop/git_git-hub
$ git --version
git version 2.45.2.windows.1

israr@DESKTOP-43G1QL6 MINGW64 ~/desktop/git_git-hub
$ pwd
/c/Users/israr/desktop/git_git-hub

israr@DESKTOP-43G1QL6 MINGW64 ~/desktop/git_git-hub
$ ls
four/  one/  three/  two/

israr@DESKTOP-43G1QL6 MINGW64 ~/desktop/git_git-hub
$ git status
fatal: not a git repository (or any of the parent directories): .git



PS C:\Users\israr\Desktop\git_git-hub\one> git config --global user.name "israrkhann08"    
PS C:\Users\israr\Desktop\git_git-hub\one> git config --global user.email "israrkhann08@gmail.com"
PS C:\Users\israr\Desktop\git_git-hub\one> git config --list



gitbash: only work in git bash not git cmd  (used for to seen hidden folder)
  israr@DESKTOP-43G1QL6 MINGW64 ~/desktop/git_git-hub
  $ ls -la
  total 44
  drwxr-xr-x 1 israr 197121   0 Jul 15 09:13 ./
  drwxr-xr-x 1 israr 197121   0 Jul 15 08:47 ../
  drwxr-xr-x 1 israr 197121   0 Jul 15 08:55 four/
  drwxr-xr-x 1 israr 197121   0 Jul 15 09:15 one/
  -rw-r--r-- 1 israr 197121 882 Jul 15 09:14 readme.md
  drwxr-xr-x 1 israr 197121   0 Jul 15 08:55 three/
  drwxr-xr-x 1 israr 197121   0 Jul 15 08:55 two/


israr@DESKTOP-43G1QL6 MINGW64 ~/desktop/git_git-hub/one (master)
$ ls -la
total 4
drwxr-xr-x 1 israr 197121 0 Jul 15 09:15 ./
drwxr-xr-x 1 israr 197121 0 Jul 15 09:13 ../
drwxr-xr-x 1 israr 197121 0 Jul 15 09:15 .git/

israr@DESKTOP-43G1QL6 MINGW64 ~/desktop/git_git-hub/one (master)
$ cd .git

israr@DESKTOP-43G1QL6 MINGW64 ~/desktop/git_git-hub/one/.git (GIT_DIR!)
$ ls
HEAD  config  description  hooks/  info/  objects/  refs/

israr@DESKTOP-43G1QL6 MINGW64 ~/desktop/git_git-hub/one/.git (GIT_DIR!)

israr@DESKTOP-43G1QL6 MINGW64 ~/desktop/git_git-hub/one/.git (GIT_DIR!)
$ ls -l
total 7
-rw-r--r-- 1 israr 197121  23 Jul 15 09:15 HEAD
-rw-r--r-- 1 israr 197121 130 Jul 15 09:15 config
-rw-r--r-- 1 israr 197121  73 Jul 15 09:15 description
drwxr-xr-x 1 israr 197121   0 Jul 15 09:15 hooks/
drwxr-xr-x 1 israr 197121   0 Jul 15 09:15 info/
drwxr-xr-x 1 israr 197121   0 Jul 15 09:15 objects/
drwxr-xr-x 1 israr 197121   0 Jul 15 09:15 refs/

                  --ADD--
// when we create 2 files and add it using
 git add . 
 this files go to staging area and when we check status it says use commit command to go to commit area


                 --COMMIT--
 using this command
 git commit -m "your message"
          

                --REMOVE COMMIT--
 // and when we use add file to go to staging area and we also use to unstage this file using this 
 command:  
 git rm --cached <file>.    suppose: git rm --cached file1.txt


                 --LOG--
command: git log (it give details of add & commit)    
command: git log --oneline 


               --ATOMIC COMMIT--
ak unit of work pura ho 
jasy ap footer bana rahy ho to kr do commit.
how the tone of massage in commit:  {present tense commit}
give order to code base: like   "add footer"


              --CHANGE DEFAULT CODE EDITOR--
by-default vim code editor and not easy to handle so we use vs-code
command: git config --global code.editor "code --wait"    
situation: first used this command and then open file1 and add some thing in it and then 
git add file1.txt
git commit  (you did not type complete )          
it open code editor for commit massage 


               --GITIGNORE--
 you have interesting thing every folder means you have file
 file:  .env (environment variable)
 ap ky pas is ma API-key ,API-secrit, ya paumentGateway hoti ha ap nahi chaty na is ko git ma dala gy or na hi git-hub pr to ap .gitignor file banaty han or us ma us folder ya file ka name rakhty han jasy 
 you create file
 .gitignore (file and this file we put .env name in it , is ma jo files rahy gy wo track ho gi hi nahi)  
 and then add it
 git add .gitignore
 git commit -m "add ignore file"   


          --GITKEEP--
in some time we just create empty folder and we use it  in future suppose we create folder images and we create .gitkeep file in it. and when we create new folder like Log it not track bease its empty.            
Google: search git generator online git ignore file for django etc.

 
          --COMMIT BEHIND SEEN--

you know in every commit we get unique Id also called sah ID
"hr ak jo hash hota ha us ma kafi information hoti ha or hr ak new hash jo banta ha wo purany waly pr dependent hota ha us ky ander hash hota ha parent ki information hoti ha 

POSTLEAND command: fancy layer
gardening Command:  manualy karty ho


          --GIT-BRANCH--
HEAD in git:
          "The HEAD is a pointer to the current branch that you are working on. It points to the latest commit in the current branch"
command:
          git branch
          git branch bug-fix
          git switch bug-fix
          git log
          git switch master
          git switch -c dark-mode
          git checkout orange-mode          


            --GIT-GRAPH--
extension download

           --MERGE BRANCH--

"you seen that we create new branch bug-fix have file fix.txt and when we switch to master fix file remove"  

--FAST FORWARD MERGE:  
'abhi hamari main branch pr to kam huwa nahi ha zada hamari bug-fix pr kam huwa ha to main brach to as-is-it rahi to sab sy easy ha ap bug-fix ka kam sara khasy main/master ma laty han us ky liya merge
command:
   git switch master
   git merge bug-fix

"now we seen bug-file fix.txt in master branch"

--NOT FORWORD MERGE:
"hama kam master ma bhi ho raha ha or bug-fix ma bhi"



note: bugfix ka content hum ny main/master ma liya lakin master ka content kabi bug-fix ma nahi liya ha waha us ky pas jitna ha utna ha



          --MERGE CONFLLICT--
"hum ny dono ma (main/master  and  big-fix branch) same hi file ma kam kiya to conflict to ay ga na"         

"first we are in bug-fix branch and we put values updates in file2.txt footer details 2024 and then swich to master and then update in same file file2.txt footer details 2025 and then we are in master branch and then merge it to bug-fix so error occur
"
 <<<<<<< HEAD
add marketing section.
footer add
footer year 2024!
=======

add footer year 2025
>>>>>>> bug-fix


// git merge --abort (ab merging kkhtm ho gai ha)



            -- RENAME BRANCH--

git branch -m <old branch name> <new branch name>     


           --DELETE BRANCH--

git branch -d <branch name>           

          --CHECKOUT BRANCH --

git checkout <branch name>

         --LIST BRANCH--

git branch



            --GIT DIFF--

"The git diff is an informative command that shows the differences between two commits."            

How to read the diff
a -> file A and b -> file B
---- indicates the file A
+++ indicates the file B
@@ indicates the line number


hum ny file1 ma kuch update ki or sirf add kiya commit nahi kiya (check git diff.)ya update kiya ha
git diff (kiya kuch nahi huwa ha)

--Comparing Staging Area with Repository--
git diff --staged (ab show ho ga differences)

--Comparing between branches--
git diff branch-name-one..branch-name-two

--Comparing Specific Commits:--
PS C:\Users\israr\Desktop\git_git-hub\one> git diff 42780eb..e3fde27 
diff --git a/file2.txt b/file2.txt
index f115127..00e4b0c 100644
--- a/file2.txt
+++ b/file2.txt
@@ -1,9 +1,5 @@
 this is my file two in git hub.
 and more content to file2.
-
 add marketing section.
 footer add
-footer year 2024!
-
-
-
+footer year 2024!
\ No newline at end of file
PS C:\Users\israr\Desktop\git_git-hub\one> 



         --GIT STASH--
"save your changes in tempory location"
ab many ak file ma kuch updates ki han or us ko sief add kiya ha master branch ma rahty huwy commit nahi kiya ha or ma dusri branch bug-fix ma jana chata hu. to mujy allow nahi ha is liya ma stash use karu ga

git stash (now you go to other branch)

--Naming the stash
git stash save "work in progress on X feature"

--View the stash list
git stash list

--Apply the stash
git stash apply

--Apply the specific stash
git stash apply stash@{0}

--Applying and dropping the stash
git stash pop

--Drop the stash
git stash drop

--Applying stash to a specific branch
git stash apply stash@{0} <branch-name>

--Clearing the stash
git stash clear

 
              --GIT TAG --
"important thing in git is tag creation"       sticky note ki tara ha   
basically hum tag ko istamal karty han commit ky uper sticky notes ki tara
Tags are a way to mark a specific point in your repository. 

--Creating a tag
git tag <tag-name>

--Create an annotated tag
git tag -a <tag-name> -m "Release 1.0"

--List all tags
git tag

--Tagging a specific commit
git tag <tag-name> <commit-hash>

--Push tags to remote repository
git push origin <tag-name>

--Delete a tag
git tag -d <tag-name>

--Delete tag on remote repository
git push origin :<tag-name>


            --REBASE--

"master branch sy hum ny sub-branch ma merge liya ha to ya karny sy ak extra commit add huwa ha us ko na karny ky liya hum rebase use karty han"            

NOTe: "rebase hamasha sub branch ma rah kr karty han master ma nahi rah kr karty han."

--Ensure you are on the branch you want to rebase:
git checkout feature-branch
git rebase main

            --Git reflog--

            




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        -- connect to git-hub and basic command for this --


PS C:\Users\israr\Desktop\mern-19> git status
fatal: not a git repository (or any of the parent directories): .git

PS C:\Users\israr\Desktop\mern-19> git config --global user.name "israrkhann08"
PS C:\Users\israr\Desktop\mern-19> git config --global user.email "israrkhann08@gmail.com"

PS C:\Users\israr\Desktop\mern-19> git config --list
PS C:\Users\israr\Desktop\mern-19> git branch
* master
PS C:\Users\israr\Desktop\mern-19> git branch -m main           // change branch name   master to main
PS C:\Users\israr\Desktop\mern-19> git branch
* main
PS C:\Users\israr\Desktop\mern-19> git remote -v               // check remote link
                                                                
PS C:\Users\israr\Desktop\mern-19> git remote add origin https://github.com/israrkhann08/Mern-19-Webdev.git            // remote repositoy add and then   name it origin  and linking set

PS C:\Users\israr\Desktop\mern-19> git remote -v                 // check remote link
origin  https://github.com/israrkhann08/Mern-19-Webdev.git (fetch)       //some times we chage the directory fetch from other directory and push to 
origin  https://github.com/israrkhann08/Mern-19-Webdev.git (push)        // another directory so we can change this

PS C:\Users\israr\Desktop\mern-19> git push origin main   // push and existing repo from command line             
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (4/4), 3.58 KiB | 1.19 MiB/s, done.    
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/israrkhann08/Mern-19-Webdev.git
 * [new branch]      main -> main
PS C:\Users\israr\Desktop\mern-19> 

PS C:\Users\israr\Desktop\mern-19> git push
fatal: The current branch main has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin main

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS C:\Users\israr\Desktop\mern-19> git push -u origin main  
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (4/4), 909 bytes | 303.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/israrkhann08/Mern-19-Webdev.git
   416c01d..6eab405  main -> main
branch 'main' set up to track 'origin/main'.
PS C:\Users\israr\Desktop\mern-19> 





