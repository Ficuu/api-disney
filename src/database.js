import moongose from 'mongoose'

moongose.connect('mongodb://localhost/disneyPaezFacundo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))
