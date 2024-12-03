import {SurveyModel} from '../models/surveyModel'
import { Request, Response, RequestHandler } from 'express'; 


export class SurveyController{

    getAllData = async(_req: Request, res: Response) => {
        try{
            const data = await SurveyModel.getAllSurveys();
            return res.status(200).json(data);
        }
        catch(err){
            return res.status(404).json({msg: err});
        }
    }

    getSurveyDetails = async (req: Request, res: Response) => {
        try{
            const id = req.params.id;
            const data = await SurveyModel.getDetails(Number(id));
            return res.status(200).json(data);
        }
        catch(err){
            return res.status(404).json({msg: err});
        }
    }

    createSurvey = async (req: Request, res: Response) => {
        try {
            const response = await SurveyModel.createSurvey(req.body);
            return res.status(200).json({response});
        }
        catch(err){
            return res.status(404).json({msg: err});
        }
    }

    updateInfo = async (req: Request, res: Response) => {
        try{
            const response = await SurveyModel.updateSurvey(Number(req.params.id), req.body);
            return res.status(200).json({response});
        }
        catch(err){
            return res.status(404).json({msg: err});
        }
    }

    deleteSurvey = async (req: Request, res: Response) => {
        try{
            const response = await SurveyModel.deleteSurvey(Number(req.params.id));
            return res.status(200).json({response});
        }
        catch(err){
            return res.status(404).json({msg: err});
        }
    }
}
