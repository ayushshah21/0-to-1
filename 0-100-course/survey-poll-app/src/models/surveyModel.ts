import { PrismaClient } from '@prisma/client';
import { Survey } from '../types';

const prisma = new PrismaClient();

export class SurveyModel {
    static async getAllSurveys() {
        return await prisma.survey.findMany();
    }

    static async createSurvey(data: Survey) {
        return await prisma.survey.create(
            { data });
    }

    static async getDetails(id: number) {
        return await prisma.survey.findUnique({
            where: {
                id
            },
            include: {
                questions: {
                    include: {
                        options: true
                    }
                }
            }
        })
    }

    static async addVote(id: number) {
        return await prisma.option.update({
            where: {
                id
            },
            data: {
                votes: {
                    increment: 1
                }
            }
        });
    }

    static async updateSurvey(id: number, data: Survey) {
        return await prisma.survey.update({
            where:
            {
                id
            },
            data
        }
        )
    }

    static async deleteSurvey(id: number) {
        return await prisma.survey.delete({
            where: {
                id
            }
        })
    }

};