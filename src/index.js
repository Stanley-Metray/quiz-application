import  express  from "express";
import path from 'path';
import { fileURLToPath } from "url";
import { dirname } from "path";

const port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const indexPage = path.join(__dirname, "../public");
const programmingQuizPath = path.join(__dirname, "../public/Quiz-Categories/ProgrammingQuiz");
const historyQuizPath = path.join(__dirname, "../public/Quiz-Categories/HistoryQuiz");
const GkQuizPath = path.join(__dirname, "../public/Quiz-Categories/Gk-Quiz");
const geographyQuizPath = path.join(__dirname, "../public/Quiz-Categories/Geography-Quiz");
const scienceQuizPath = path.join(__dirname, "../public/Quiz-Categories/Science-Quiz");
const mathsQuizPath = path.join(__dirname, "../public/Quiz-Categories/Maths-Quiz");

const app = express();

app.use(express.static(historyQuizPath));
app.use(express.static(indexPage));
app.use(express.static(programmingQuizPath));
app.use(express.static(GkQuizPath));
app.use(express.static(geographyQuizPath));
app.use(express.static(scienceQuizPath));
app.use(express.static(mathsQuizPath));

app.get("/", (req,res)=>{
   res.render("index");
});



app.listen(port);


