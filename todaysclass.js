function sendfiles(srcpath,destpath,filecat){
    let catpath = path.join(destpath,filecat)
    if(fs.exitsSync(catpath) == false){
        fs.mkdirSync(catpath)
    }
    let filename = path.basename(srcpath)
    let destPath = path.join(catpath,filename)
    fs.copyFileSync(srcpath,destPath)
    fs.unlinkSync(srcpath);
}