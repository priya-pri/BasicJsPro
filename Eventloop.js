//Global Execution context--the functions and variables of program present here
//Whenever function get called ,their own execution context created
//setTimeout is part of web api enc ,it comes in execution Stack with the help of javascripr runtime ,but we will
//this setTimeout back to his web api env for the time it needs to wait so tht we can put other fns in execution stack and after their
//execution we can pop out
//After setTimeout work is done ,it will come to message queue from web api
//Now event loop check whether any execution context is there in execution stack and also it will 
//check message quesue to check if there is any background task
//if event loop found anything/any background task in message queue ,then it will fetch that thing from message queue and put in execution
//context to show the thing's output
//So it's event loop job to chk message queue ,if any task is there ,then event loop should put that task on execution 
//context