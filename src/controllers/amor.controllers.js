import { pool } from '../db.js';

export const getAmor = async (req,res)=>{
    const [amor] = await pool.query(`SELECT descripcion from noelia where noelia_id =?`,[req.params.id])
    res.json(amor)
}

export const postAmor = async(req,res)=>{
    try {
        const {id,nombre,descripcion} = req.body
        const [rows] = await pool.query(`INSERT INTO noelia (noelia_id,nombre,descripcion) values (?,?,?)`,[id,nombre,descripcion])
        if(rows.affectedRows>0){
            res.json({
                message:"Datos insertados de manera correcta"
            })
        }else{
            res.json({
                message:"Tuvimos un problema al insertar el dato"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"No hay conexion a la base de datos"
        })
    }
    
}