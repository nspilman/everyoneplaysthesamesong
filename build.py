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
shutil.move(folderName + '/'+ blogFolder, "./")
subprocess.Popen([*removeFolder,folderName]).communicate()
subprocess.Popen(['npm','run','build']).communicate()


