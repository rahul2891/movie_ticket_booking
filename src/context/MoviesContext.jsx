import { createContext } from "react"
import { movies } from "../constants/movies";

export default createContext({ movies: movies });