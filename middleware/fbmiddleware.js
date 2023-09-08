const countryfilter = (req,res,next)=>{
    const country = req.query.country
    if(country==="india"){
        return next()
    }
    res.send("This website is not accessible for you")
}

const statefilter = (req,res,next)=>{
    const state = req.query.state
    if(state==="delhi"){
        return next()
    }
    res.send("This website is not accessible for you")
}

module.exports = {countryfilter,statefilter}