import express from 'express';
import { SurveyController } from "../controllers/surveyController";
const router = express.Router();
const surveyController = new SurveyController();

router.get('/', async (req, res) => {
    await surveyController.getAllData(req, res);
});
router.post('/', async (req, res) => {
    await surveyController.createSurvey(req, res);
});
router.get('/:id', async (req, res) => {
    await surveyController.getSurveyDetails(req, res);
});
router.put('/:id', async (req, res) => {
    await surveyController.updateInfo(req, res);
});
router.delete('/:id', async(req, res) => {
    await surveyController.deleteSurvey(req, res);
});

export default router;