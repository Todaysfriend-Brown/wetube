import express from 'express';
import routes from '../routes';
import {
	getUpload,
	postUpload,
	videoDetail,
	deleteVideo,
	getEditVideo,
	postEditVideo,
} from '../controller/videoController';
import { uploadVideo, onlyPrivate } from '../middlewares';

const videoRouter = express.Router();

// videoRouter.get(routes.videos, videos); #2.21 에서 videoController.js 에서 videos 파일 충돌로 export const videos 를 지우면서 이것도 지움

//upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

//Video detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

//Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
