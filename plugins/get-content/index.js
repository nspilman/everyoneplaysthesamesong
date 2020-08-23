const removeFolder = ['rm','-rf']
const folderName = 'natespilmandotcom'
const gitRepo = "https://github.com/nspilman/natespilmandotcom-content.git"
const websiteRepo = "https://github.com/nspilman/natespilmandotcom.git"
const blogFolder = 'blog'

module.exports = {
  onPreBuild: async () => {
    const { spawn } = require("child_process");
    await spawn("rm", ["-rf",folderName]);
    const repoCreated = spawn("git", ["-clone",websiteRepo]);
    await repoCreated
    console.log("I'm done")
    },
  }