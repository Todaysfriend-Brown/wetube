import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); //.env 파일에 있는 정보를 불러오는 함수!!

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log('▶ Connected to DB');
const handleError = (error) => console.log('Χ');

db.once('open', handleOpen);
db.on('error', handleError);
