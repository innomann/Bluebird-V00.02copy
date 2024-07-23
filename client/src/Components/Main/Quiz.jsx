import { useState, useEffect } from "react";
import ImageIcons from "./ImageIcons";
import { useParams } from "react-router-dom";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Icons from "./Icons";
import Quizpost from "./Quizpost";
import { connect } from "react-redux";
import {
  getQuiz,
  quizPost,
  fetchTenQuestions,
} from "../../Redux/actions/quizAction";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { Progress } from "./Progress";
import Quizmenu from "./Quizmenu";




 const Quiz = (quiz) =>  {
   const dispatch = useDispatch();
   const { id } = useParams();
   const data = require("./data.json");
   const selectTopic = data.quizzes[2];
   const [questionNo, setQuestionNo] = useState(0);

   const [selectQuestion, setSelectQuestion] = useState();
   const [showError, setShowError] = useState(false);
   const [check, setCheck] = useState("");
   const [result, setResult] = useState(0);
   const [countdown, setCountdown] = useState(0);
   const navigate = useNavigate();

    //const lastId = users[users.length - 1]._id;
    //const lastId = users[users.length - 1]._id;
    console.log(quiz.quiz.questions.length._id);

   {
     /*Checks the answer */
   }
   const checkQuestion = (selected) => {
     setShowError(false);
     if (selected === quiz.quiz.questions[questionNo].answer) {
       setCheck("1");
       setResult((pre) => pre + 1);
     } else {
       setCheck("0");
     }
   };
   const getquestion = () => {
     setQuestionNo(questionNo + 1);
     setSelectQuestion();
     setCheck("");
     setCountdown(40);
   };

   // countdown timer
   useEffect(() => {
     if (quiz.quiz.questions.length > 1) {
       const interval = setInterval(() => {
         setCountdown(countdown - 1);
       }, 1000);
       if (countdown === 0) {
         clearInterval(interval);
         setCountdown(40);
         getQuiz(dispatch);
         setQuestionNo(questionNo + 1);
       }

       return () => clearInterval(interval);
     }
   }, [countdown, getQuiz, getquestion, selectTopic.questions]);

   const startQuiz = () => {
     return window.location.reload();
   };

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const fetchTenQuestionsX = () =>{
    fetchTenQuestions({ initialFetch: "ten" });
   }


  

   return (
     <main className="min-h-[100svh] absolute inset-0  grid place-items-center select-none font-[poppins]">
       <section className="w-[90%] lg:w-[calc(50rem+1vw)] text-[calc(1rem+1vw)] text-[#0D1321] py-8">
         <header className="flex justify-between text-center mb-8">
           <div className="space-y-2">
             {questionNo < quiz.quiz.questions.length && (
               <p
                 className={`  "text-[#626C7F]"
                 text-[14px] md:text-[20px] font-normal `}
               >{`Question ${questionNo} of ${
                 quiz.quiz.questions.length - 1
               }`}</p>
             )}
             {/*<p>{`Question ${questionNo} of 10`}</p>*/}
             <Progress className="bg-gray-400" value={questionNo * 10} />
           </div>

           <div>
             <p className="text-[calc(1.75rem+1vw)] font-bold text-sub">
               {questionNo < quiz.quiz.questions.length && (
                 <div>
                   <p></p>
                   <p
                     className={`  "text-[#626C7F]"
                  text-[14px] md:text-[20px] font-normal `}
                   >{`${countdown} s`}</p>
                 </div>
               )}
             </p>
           </div>

           <Quizmenu
             oncliclEvent={handleShow}
             fetchTenQuestions={fetchTenQuestionsX}
           />
         </header>

         <main>
           <p className="text-[calc(1.5rem+1vw)] font-bold text-2xl font-bold leading-8 tracking-tight ">
             {questionNo < quiz.quiz.questions.length ? (
               <h1 className={`  md:text-[22px] font-medium mt-10`}>
                 {quiz.quiz.questions[questionNo]?.question}
               </h1>
             ) : (
               <h1 className={`  text-[40px] md:text-[64px] font-light`}>
                 Quiz completed
                 <br />
                 <span className="font-medium">You scored...</span>
               </h1>
             )}
             {/*selectTopic.questions[questionNo].question*/}
           </p>

           {/*<div className="">
             {questionNo < quiz.quiz.questions.length && (
               <img
                 class="h-14 p-2 w-full max-w-full rounded-lg object-cover object-center md:h-[480px] "
                 src={quiz.quiz.questions[questionNo]?.image}
                 alt=""
               />
             )}
             </div>*/}

           {questionNo < quiz.quiz.questions.length ? (
             <div className="space-y-2 mt-4 ">
               {quiz.quiz.questions[questionNo].options?.map(
                 (item, index) => (
                   {
                     /*{ ${"text-[#3B4D66] bg-white hover:bgF6E7FF]"}   border-[3px]  ${selectQuestion===item?check==="1"?" border-[#26D782]":check==="0"?"border-[#EE5454]":"border-[#A729F5]":""}  border-[3px]  border  flex p-1   text-[#3B4D66]  bg-white  shadow-2xl rounded-2xl min-[800px]:hover:font-semibold   min-[800px]:hover:bg-[#f6f6f6]*/
                   },
                   (
                     <p
                       onClick={() => !check && setSelectQuestion(item)}
                       key={index}
                       className={` ${" bg-white hover:bg-[#F6E7FF]"} ${
                         selectQuestion === item
                           ? check === "1"
                             ? "border-[#26D782]"
                             : check === "0"
                             ? "border-red-600 "
                             : "border-[#A729F5]"
                           : "border-none"
                       } cursor-pointer text-gray-500 text-lg border-solid border-[3px]   flex p-1   text-[#3B4D66]    shadow-2xl rounded-2xl min-[800px]:hover:font-semibold   min-[800px]:hover:bg-[#f6f6f6] `}
                     >
                       <span
                         className={`${
                           selectQuestion === item
                             ? " text-white "
                             : "text-[#626C7F]"
                         } 
                      ${
                        selectQuestion === item
                          ? check === "1"
                            ? "bg-green-900"
                            : check === "0"
                            ? "bg-orange-900"
                            : "bg-purple-800"
                          : "bg-[#F4F6FA]"
                      }
                      text-[28px]  font-medium}  text-black  bg-[#F4F6FA]  capitalize  flex items-center justify-center mr-2  font-medium px-4 py-2 `}
                       >
                         {index === 0
                           ? "A"
                           : index === 1
                           ? "B"
                           : index === 2
                           ? "C"
                           : "D"}
                       </span>

                       {item}

                       <ImageIcons
                         src="https://raw.githubusercontent.com/abhay0480-eng/quiz-app-fm/9ffd3f5b1f0a5b96211bcf548a7fd94754beccaa/public/images/icon-correct.svg"
                         className={`${
                           selectQuestion === item
                             ? check === "1"
                               ? "block"
                               : "hidden"
                             : "hidden"
                         } ml-auto`}
                       />
                       <ImageIcons
                         src="https://raw.githubusercontent.com/abhay0480-eng/quiz-app-fm/9ffd3f5b1f0a5b96211bcf548a7fd94754beccaa/public/images/icon-incorrect.svg"
                         className={`${
                           selectQuestion === item
                             ? check === "0"
                               ? "block"
                               : "hidden"
                             : "hidden"
                         } ml-auto`}
                       />
                     </p>
                   )
                 )
               )}
               {!check && (
                 <Button
                   onClick={() =>
                     selectQuestion
                       ? checkQuestion(selectQuestion)
                       : setShowError(true)
                   }
                   className="p-3 bg-sky-950 hover:bg-sky-900  text-white justify-center"
                 >
                   Submit Answer
                 </Button>
               )}

               {check && (
                 <Button
                   onClick={() => getquestion()}
                   className="p-3 bg-sky-950 hover:bg-sky-900 text-white justify-center"
                 >
                   Next Question
                 </Button>
               )}
             </div>
           ) : (
             <div>
               <div className="bg-white shadow-2xl rounded-2xl w-full p-10 ">
                 <div className="flex justify-center items-center">
                   <Icons bgcolor={`bg-[#F4F6FA]`}>
                     <img src={selectTopic.icon} alt="" className="w-10" />
                   </Icons>
                   <div className="text-[#313E51] font-medium text-[28px]">
                     {`Environment`}
                   </div>
                 </div>
                 <div className="flex justify-center items-center">
                   <h1 className="text-[144px] text-[#313E51] font-medium">
                     {result}
                   </h1>
                 </div>
                 <p className="text-[24px] font-normal text-[#626C7F] text-center">
                   out of {quiz.quiz.questions.length - 1}
                 </p>
               </div>
               <Button
                 onClick={() => startQuiz()}
                 className="p-3 bg-sky-950 hover:bg-sky-900 text-white justify-center"
               >
                 Play Again
               </Button>
             </div>
           )}
         </main>

         <Quizpost show={show} onHide={handleClose} />
       </section>
     </main>
   );
 }

const mapStateToProps = (state) => {
  return {
    quiz: state.quizState,
  };
};

export default connect(mapStateToProps)(Quiz);
