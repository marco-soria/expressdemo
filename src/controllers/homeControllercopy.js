
home = (req,res) => {
  //return res.send('hello from home')
   res.send('hello from home')
}

about = (req,res) => {
     res.json({message: 'hello from about'})
    }

params = (req,res) => {
    const {id, slug} = req.params
    res.send(`id: ${id} and slug: ${slug}`)
}

queryString = (req,res) => {
    const {name, age} = req.query
    res.send(`name: ${name} and age: ${age}`)
}

module.exports = {
    home,
    about,
    params,
    queryString
}