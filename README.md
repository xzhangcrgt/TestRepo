
#GIT Cheat Sheet
	$git init
	$git add .
	$git commit -m 'Initial Repository'
	$git remote add origin https://github/xzhangcrgt/TestRepo.git
	$git push -u origin master
	
	Branch out:
	$git checkout -b newbranchname   #create a new branch
	$git chechout master  #switch back to mater branch
	$git push origin newbranchname  #push new branch in remote repository
	
	Remove branch:
	$git branch -d branchname     # -D remove branch without being merged
	$git push origin :branchname  # remove branch from remote depository
	
	Rebase or fastforward merge:
	$git rebase master
	
	Revert vs. reset
	$git revert #revert the previous commit, keep previous commit history
	$git reset aCommit #delete the previous commit in staging area, but no change to local working directory
	$git reset --hard aCommit #reset both working directory and staging area
	
	Clean: remove untrack file
	$git clean -n   #display the files what clean will remove
	$git clean -f   #remove untrack files
	$git clean -df  #remove untrack files and untrack directories
	
	Generate github key
	$git-keygen -t rsa -C "xzhang@crgt.com"
	
	Put local changes into stash for a pull, reapply after puu
	$git stash
	$git stash apply #wil merge the code in stash with code pulled from repository
	
	Yo generate new moduel
	$yo meanjs:crud-module <module-name>
	
#MongoDB Shell Command
	> db show
	> use ux-heuristics-dev
	> show collections
	> db.categories.find()
	> db.categories.find().pretty()
	> db.users.update({username:"xzhangcrgt"}, {$set:{roles:["user","admin"]}},{multi:true})
	
