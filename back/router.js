import { Router } from "express";
import PostsController from "./PostsController.js";


const router = new Router()

router.get('/documents', PostsController.getDocuments)

export default router;
