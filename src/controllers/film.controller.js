import Film from '../models/film'

export const createFilm = async (req, res) => {
    const {title, img} = req.body
    const newFilm = new Film ({
        title,
        img
    })
    const filmSaved = await newFilm.save()
    res.status(201).json(filmSaved)
}

export const getFilm = async (req, res) => {
    const film = await Film.find()
    res.json(film)
}

export const getFilmById = async (req, res) => {
    const filmId = await Film.findById(req.params.filmId)
    res.status(200).json(filmId) 
}

export const updateFilmById = async (req, res) => {
    const updateFilm = await Film.findByIdAndUpdate(req.params.filmId, req.body, {
        new: true
    })
    res.status(200).json(updateFilm)
}

export const deleteFilmId = async (req, res) => {
    await Film.findByIdAndDelete(req.params.filmId)
    res.status(204).json({message: "deleted"})
}