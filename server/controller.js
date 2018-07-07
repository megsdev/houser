module.exports = {
    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_all()
        .then( houses => res.status(200).send(houses) )
        .catch (error => {
            res.status(500).send({errorMessage: "oops! something went wrong!"})
            console.log('error', error)
        })
    },
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db')
        const { property_name, address, city, state, zipcode } = req.body

        dbInstance.create_listing([ property_name, address, city, state, zipcode ])
        .then( () => res.sendStatus(200) )
        .catch( error => {
            res.status(500).send({errorMessage: 'oops! something went wrong!'})
            console.log('error', error)
        })
    },
    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db')
        
        dbInstance.delete_house([ req.params.id ])
        .then( (houses) => res.status(200).send(houses))
        .catch( error => {
            res.status(500).send({errorMessage: 'oops! something went wrong!'})
            console.log('error', error)
        }) 
    }
}