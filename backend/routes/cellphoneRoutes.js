const {Router} = require('express');
const router = Router();
const cellphoneController = require("../controllers/CellphoneController");

router
.get("/cellphones", cellphoneController.getCellphones)
.post("/cellphones", cellphoneController.createCellphone)
.put("/cellphones/:id", cellphoneController.updateCellphone)
.delete("/cellphones/:id", cellphoneController.deleteCellphone)

module.exports = router;