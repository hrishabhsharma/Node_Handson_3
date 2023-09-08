const signup = (req,res)=>{
    res.send("This is sign up page")
}
const login = (req,res)=>{
    res.send("This is log in page")
}
const logout = (req,res)=>{
    res.send("This is log out page")
}

module.exports = {signup,login,logout}