import express from "express";
import StateController from "./controllers/state";
import ZoneController from "./controllers/zones";

const router = express.Router()

//STATES
router.delete("/states/:stateId", StateController.delete)
router.get("/states", StateController.getAll)
router.get("/states/:stateId", StateController.update)
router.patch("/states/:stateId", StateController.update)
router.post("/states", StateController.create)
router.post("/states/createMany", StateController.createMany)

//ZONES
router.delete("/zones/:zoneId", ZoneController.delete)
router.get("/zones", ZoneController.getAll)
router.get("/zones/:zoneId", ZoneController.update)
router.patch("/zones/:zoneId", ZoneController.update)
router.post("/zones", ZoneController.create)
router.post("/zones/createMany", ZoneController.createMany)

export default router