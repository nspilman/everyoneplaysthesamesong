import subprocess
import os
import shutil

removeFolder = ['rm','-rf']
folderName = 'natespilmandotcom'
gitRepo = "https://github.com/nspilman/natespilmandotcom-content.git"
websiteRepo = "https://github.com/nspilman/natespilmandotcom.git"
blogFolder = 'blog'

subprocess.Popen([*removeFolder,folderName]).communicate()
subprocess.Popen(['git','clone',websiteRepo]).communicate()
subprocess.Popen([*removeFolder,blogFolder]).communicate()
subprocess.Popen([*removeFolder,'static']).communicate()
shutil.move(folderName + '/'+ blogFolder, "./")
shutil.move(folderName + '/static', "./")
subprocess.Popen([*removeFolder,folderName]).communicate()

blogposts = os.listdir(blogFolder)
for post in blogposts:
    postbody = open(blogFolder +"/" + post)
    lines = [line.strip() for line in postbody]
    eptss = False
    try:
        tagsIndex = lines.index('tags:')
        publishedIndex = lines.index('published: true')
        tags = lines[tagsIndex:publishedIndex]
        print(tags)
        if(tags.index('- everyonePlaysTheSameSong') > -1):
            eptss = True
    except:
        pass
    if eptss == False:
        subprocess.Popen(['rm',blogFolder+'/'+post]).communicate()

subprocess.Popen(['npm','run','build']).communicate()




