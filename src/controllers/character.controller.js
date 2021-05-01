import { PromiseProvider } from 'mongoose'
import Character from '../models/characters'

export const createCharacter = async (req, res) => {

    const {name, category, price, imgURL} = req.body
    const newCharacter = new Character ({   
        name,
        category,
        price,
        imgURL 
        
    })

    const characterSaved = await newCharacter.save()
    res.status(201).json(characterSaved)
}
//Codigo 201 se trata de algo que se crea


export const getCharacter = async (req, res) => {
    const characters = await Character.find()
    res.json(characters)
}


export const getCharacterById = async (req, res) => {
   const characterId = await Character.findById(req.params.characterId)
   res.status(200).json(CharacterId)
}

export const updateCharacterById = async (req, res) => {
    const updateCharacter = await Character.findByIdAndUpdate(req.params.characterId, req.body, {
        new: true
    })
    res.status(200).json(updateCharacter)
}

export const deleteCharacterByID = async (req, res) => {
    await Character.findByIdAndDelete(req.params.characterId)
    res.status(204).json()
}