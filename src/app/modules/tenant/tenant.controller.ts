import { Request, Response } from "express";
import config from "../../config";
import { TenantService } from "./tenant.service";



const creteTenantController = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;

        if (!data.name) {
            res.status(400).json({
                success: false,
                message: "Tenant name is required",
            });
        }


        const dbUrl = `${config.url}/${data.name}/${config.ext}`


        const result = await TenantService.createTenant({ ...data, dbUrl })

        res.status(200).json({
            success: true,
            messgae: "Tenant ceated successfully",
            data: result
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err
        })
    }
}

const blockTenantController = async ()=>{
    
}