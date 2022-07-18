import { Request, Response } from 'express'
import {UserSignup} from '../interfaces/user.Interface'
import { Person } from 'models/person.model'
import { isEmpty } from 'helpers'
import Error from 'helpers/error.helper'
import jwt from 'jsonwebtoken'
import bag from 'config/bag.conf'


export default class UserController {
  public async signup(req: Request, res: Response, next: Function): void {
    // res.render('index', { title: 'Express' })
    const {fullName,  email, password}: UserSignup = req.body

    const normalizedEmail = this.emailNormalizer(email)


    let existingUser
    try {
      existingUser = await Person.findOne({normalizedEmail}) 
    } catch (error) {
      console.error('err', error)
      res.status(500).json({})
    }
    if(isEmpty(existingUser)) throw new Error(400,'This email is already registered.')
    const newUser = new Person({
      fullName,
      password,
      email
    })

    try {
      await newUser.save()
    } catch (error) {
      throw new Error(500,'Internal server error.')
    }
    const tokens = this.createToken(newUser.id)

    
    res.status(200).json({
      user:newUser,
      tokens
    })

  }

  public async login(req: Request, res: Response): void {
    
    const {email, password} = req.body
  
    const normalizedEmail = this.emailNormalizer(email)
    
    let existingUser
    try {
      existingUser = await Person.findOne({normalizedEmail}) 
    } catch (error) {
      console.error('err', error)
      res.status(500).json({})
    }

    const tokens = this.createToken(existingUser.id)


    res.status(200).json({
      user:existingUser,
      tokens
    })
  }

  private createToken(id:string): {jwtToken:string,refreshToken:string}{

    const jwtToken = jwt.sign({id}, bag.jwt_sec,{
      expiresIn: bag.jwt_ttl
    })
    // TODO: refreshToken function and model must be developed
    const refreshToken = 'TODO:'
    
    return {jwtToken, refreshToken}
  }

  private emailNormalizer(email:string){
    return email.toLowerCase()
  }

}

export const userController = new UserController()
