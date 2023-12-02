const Cellphone = require("../models/Cellphone");

class CellphoneController {

    static async getCellphones (req, res){
        try {
            const celulares = await Cellphone.find();
            if(!celulares) return res.status(404).json({"msg":"Ainda não há celulares"})

            res.status(200).json(celulares);
        } catch (error) {
            res.status(500).json({"msg":error.msg})
        }
    }

    static async createCellphone (req, res){
        const {marca, modelo, capacidade, data} = req.body;
        
        try {
            if (!marca || !modelo || !capacidade || !data) {
                return res.status(400).json({ msg: "Preencha todos os campos!", status: false });
            }

            const newCell = new Cellphone({
                marca:marca,
                modelo: modelo,
                capacidade: capacidade,
                data: data,
            });
    
            const savedCell = await newCell.save();
    
            res.status(200).json({ msg: "Celular cadastrado com sucesso", status: true });
    
        } catch (error) {
            res.status(500).json({"msg":error.msg})
        }
    }

    static async updateCellphone(req, res) {
        const { id } = req.params;
        const { marca, modelo, capacidade, data } = req.body;
        
        try {
          if (!marca || !modelo || !capacidade || !data) {
            return res.status(400).json({ msg: "Preencha todos os campos!", status: false });
          }
          
          const updatedCellphoneData = {
            marca: marca,
            modelo: modelo,
            capacidade: capacidade,
            data: data,
          };
      
          const updatedCellphone = await Cellphone.findByIdAndUpdate(id, updatedCellphoneData, { new: true });
      
          if (!updatedCellphone) {
            return res.status(404).json({ error: 'Celular não encontrado' });
          }
        
          return res.status(200).json({ message: 'Celular atualizado com sucesso', updatedCellphone });
      
        } catch (error) {
          res.status(500).json({ "msg": error.message });
        }
      }
      

    static async deleteCellphone (req, res){
        const {id} = req.params
        try {
            
            const deletedCellphone = await Cellphone.findByIdAndDelete(id);

            if (!deletedCellphone) {
                return res.status(404).json({ error: 'Celular não encontrado' });
            }

            return res.status(200).json({ message: 'Celular deletado com sucesso', deletedCellphone });
    
        } catch (error) {
            res.status(500).json({"msg":error.msg})
        }
    }

}

module.exports = CellphoneController;