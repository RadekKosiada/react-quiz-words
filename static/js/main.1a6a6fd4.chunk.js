(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(22)},2:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(7),o=a.n(r),i=(a(20),a(3)),l=a.n(i),c=a(8),u=a(9),m=a(10),p=a(13),d=a(11),h=a(1),v=a(12);a(2);function E(e){return n.a.createElement("div",null,n.a.createElement("button",{className:"button",onClick:e.restartGamePopup},"Restart"))}function w(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"game-over"},0===e.timeApp&&n.a.createElement("div",null,n.a.createElement("h4",null,"Too late!"),n.a.createElement("p",null,"The correct answer is:",n.a.createElement("br",null),n.a.createElement("span",{className:"title"},e.correctAnswer))),e.timeApp>0&&n.a.createElement("div",null,n.a.createElement("h4",null,"Wrong"),n.a.createElement("p",null,"The correct answer is:",n.a.createElement("br",null),n.a.createElement("span",{className:"title"},e.correctAnswer))),n.a.createElement(E,{restartGamePopup:e.restartGameApp}))))}function g(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"overlay"}),n.a.createElement("div",{className:"game-over"},n.a.createElement("h4",null,"Congrats, you won!"),n.a.createElement("p",null,"Your score counts ",e.scoreFromApp),n.a.createElement(E,{restartGamePopup:e.restartGameApp})))}a(6);function f(e){var t=e.allTasks[e.round-1],a="";return e.errorMessage&&(a="input-alert"),t?n.a.createElement("form",{className:"answers",onSubmit:e.handleSubmit},t.option.map(function(t,s){return n.a.createElement("label",{className:"radio",key:s},n.a.createElement("input",{type:"radio",name:"quiz",value:s,onChange:e.handleChange}),n.a.createElement("span",{className:"checkmark "+a}),n.a.createElement("span",{className:"single-answer"},t))}),n.a.createElement("input",{className:"button",type:"submit",value:"Submit"})):n.a.createElement("p",{className:"loading-answers"},"Loading answers....")}function b(e){var t=e.allTasks[e.round-1];return t?n.a.createElement("div",{className:"words"},t.quiz.map(function(e,t){return n.a.createElement("p",{key:t},e)})):n.a.createElement("p",{className:"loading-words"},"Loading words....")}function k(e){return e.allTasks[e.round-1]?n.a.createElement("div",{className:"timer-container"},e.timeApp<10&&n.a.createElement("h2",{className:"time"},"00:0",e.timeApp),e.timeApp>=10&&n.a.createElement("h2",{className:"time"},"00:",e.timeApp)):n.a.createElement("div",{className:"timer-container"},n.a.createElement("h2",{className:"starting"},"Starting..."))}var N=a(4),y=15,A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={allTasks:[],correctAnswer:"",selected:"",score:0,currentRoundPoints:1,errorMessage:!1,round:1,showGameOverPopup:!1,showYouWonPopup:!1,time:y,winCondition:10,answeredQuestions:0,level:5},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.restartGame=a.restartGame.bind(Object(h.a)(a)),a.displayYouWonPopup=a.displayYouWonPopup.bind(Object(h.a)(a)),a.countTime=a.countTime.bind(Object(h.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getWordQuiz()}},{key:"getWordQuiz",value:function(){var e=Object(c.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://twinword-word-association-quiz.p.rapidapi.com/type1/?area=sat&level="+this.state.level,{method:"GET",headers:{"Content-Type":"application/json","X-RapidAPI-Host":N["X-RapidAPI-Host"],"X-RapidAPI-Key":N["X-RapidAPI-Key"]}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({allTasks:a.quizlist}),this.countTime(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"restartGame",value:function(){this.setState({showGameOverPopup:!1,showYouWonPopup:!1,round:1,score:0,value:"",time:y,currentRoundPoints:1,answeredQuestions:0,errorMessage:!1}),this.getWordQuiz()}},{key:"displayYouWonPopup",value:function(){this.setState({showYouWonPopup:!0}),clearInterval(this.interval)}},{key:"handleChange",value:function(e){this.setState({selected:e.target.value,errorMessage:!1})}},{key:"handleSubmit",value:function(e){var t=this.state.allTasks[this.state.round-1],a=Number(this.state.selected);document.querySelectorAll('input[type="radio"]')[a].checked=!1,e.preventDefault(),this.state.selected?a===t.correct-1?(this.setState({currentRoundPoints:2*this.state.currentRoundPoints,round:this.state.round+1,errorMessage:!1,answeredQuestions:this.state.answeredQuestions+1,time:y,selected:""}),0===this.state.score?this.setState({score:++this.state.score}):this.setState({score:2*this.state.score})):(this.setState({score:0,round:this.state.round,errorMessage:!1,answeredQuestions:0,selected:"",showGameOverPopup:!0,correctAnswer:t.option[t.correct-1]}),clearInterval(this.interval)):this.setState({errorMessage:!0}),this.state.round===this.state.winCondition&&this.displayYouWonPopup()}},{key:"countTime",value:function(){var e=this,t=this.state.allTasks[this.state.round-1];this.interval=setInterval(function(){e.setState({time:e.state.time-1}),0===e.state.time&&(clearInterval(e.interval),e.setState({showGameOverPopup:!0,correctAnswer:t.option[t.correct-1]}))},1e3)}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"main-container"},n.a.createElement("h1",{className:"game-title"},"Quiz"),n.a.createElement(k,{timeApp:this.state.time,allTasks:this.state.allTasks,round:this.state.round}),n.a.createElement("p",{className:"round"},n.a.createElement("span",{className:"title"},"Round: "),n.a.createElement("span",null,this.state.round)),n.a.createElement("p",{className:"questions-left"},n.a.createElement("span",{className:"title"},"Questions: "),n.a.createElement("span",null,this.state.winCondition-this.state.answeredQuestions)),n.a.createElement("p",{className:"score"},n.a.createElement("span",{className:"title"},"Score: "),n.a.createElement("span",null,this.state.score)),n.a.createElement("div",{className:"instruction"},n.a.createElement("p",null,"Choose the best matching answer for following words within given time"),n.a.createElement("p",{className:"error-message"},this.state.errorMessage)),n.a.createElement(b,{allTasks:this.state.allTasks,round:this.state.round}),n.a.createElement(f,{selected:this.state.selected,round:this.state.round,allTasks:this.state.allTasks,handleChange:this.handleChange,handleSubmit:this.handleSubmit,errorMessage:this.state.errorMessage})),this.state.showGameOverPopup&&n.a.createElement(w,{restartGameApp:this.restartGame,valueFromApp:this.state.value,correctAnswer:this.state.correctAnswer,timeApp:this.state.time}),this.state.showYouWonPopup&&n.a.createElement(g,{restartGameApp:this.restartGame,scoreFromApp:this.state.score}))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e){e.exports={"Content-Type":"application/json","X-RapidAPI-Host":"twinword-word-association-quiz.p.rapidapi.com","X-RapidAPI-Key":"a7cc0f2e14mshbf94e32f8c579e2p14cb68jsn9030f7a1b82a"}},6:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.1a6a6fd4.chunk.js.map