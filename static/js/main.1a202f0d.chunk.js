(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports={"Content-Type":"application/json","X-RapidAPI-Host":"twinword-word-association-quiz.p.rapidapi.com","X-RapidAPI-Key":"a7cc0f2e14mshbf94e32f8c579e2p14cb68jsn9030f7a1b82a"}},20:function(e,t,a){},23:function(e,t,a){e.exports=a(49)},29:function(e,t,a){},3:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(21),o=a.n(r),i=(a(29),a(9)),l=a.n(i),c=a(22),u=a(4),m=a(5),p=a(8),h=a(6),d=a(2),v=a(7);a(31),a(3);function E(e){return n.a.createElement("div",null,n.a.createElement("button",{className:"button",onClick:e.restartGamePopup},"Restart"))}function w(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"game-over"},0===e.timeApp&&n.a.createElement("div",null,n.a.createElement("h4",null,"Too late!"),n.a.createElement("p",null,"The correct answer is:",n.a.createElement("br",null),n.a.createElement("span",{className:"title"},e.correctAnswer))),e.timeApp>0&&n.a.createElement("div",null,n.a.createElement("h4",null,"Wrong"),n.a.createElement("p",null,"The correct answer is:",n.a.createElement("br",null),n.a.createElement("span",{className:"title"},e.correctAnswer))),n.a.createElement(E,{restartGamePopup:e.restartGameApp}))))}function b(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"overlay"}),n.a.createElement("div",{className:"game-over"},n.a.createElement("h4",null,"Congrats, you won!"),n.a.createElement("p",null,"Your score counts ",e.scoreFromApp),n.a.createElement(E,{restartGamePopup:e.restartGameApp})))}a(20);var f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.round,this.props.allTasks)}},{key:"render",value:function(){var e=this,t=this.props.allTasks[this.props.round-1];return t?n.a.createElement("form",{className:"answers",onSubmit:this.props.handleSubmit},t.option.map(function(t,a){return n.a.createElement("label",{className:"radio",key:a},n.a.createElement("input",{type:"radio",name:"quiz",value:a,checked:e.state.selected,onChange:e.props.handleChange}),n.a.createElement("span",{className:"checkmark"}),n.a.createElement("span",{className:"single-answer"},t))}),n.a.createElement("input",{className:"button",type:"submit",value:"Submit"})):n.a.createElement("p",{className:"loading-answers"},"Loading answers....")}}]),t}(s.Component),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.round,this.props.allTasks)}},{key:"render",value:function(){var e=this.props.allTasks[this.props.round-1];return e?n.a.createElement("div",{className:"words"},e.quiz.map(function(e,t){return n.a.createElement("p",{key:t},e)})):n.a.createElement("p",{className:"loading-words"},"Loading words....")}}]),t}(s.Component);function k(e){return e.allTasks[e.round-1]?n.a.createElement("div",{className:"timer-container"},e.timeApp<10&&n.a.createElement("h2",{className:"time"},"00:0",e.timeApp),e.timeApp>=10&&n.a.createElement("h2",{className:"time"},"00:",e.timeApp)):n.a.createElement("div",{className:"timer-container"},n.a.createElement("h2",null,"Starting game..."))}var y=a(10),A=15,N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={allTasks:[],correctAnswer:"",selected:"",score:0,currentRoundPoints:1,errorMessage:"",round:1,showGameOverPopup:!1,showYouWonPopup:!1,time:A,winCondition:10,answeredQuestions:0,level:5},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.restartGame=a.restartGame.bind(Object(d.a)(a)),a.displayYouWonPopup=a.displayYouWonPopup.bind(Object(d.a)(a)),a.countTime=a.countTime.bind(Object(d.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getWordQuiz()}},{key:"getWordQuiz",value:function(){var e=Object(c.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://twinword-word-association-quiz.p.rapidapi.com/type1/?area=sat&level="+this.state.level,{method:"GET",headers:{"Content-Type":"application/json","X-RapidAPI-Host":y["X-RapidAPI-Host"],"X-RapidAPI-Key":y["X-RapidAPI-Key"]}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({allTasks:a.quizlist}),console.log(a),this.countTime(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"restartGame",value:function(){console.log("fired"),this.setState({showGameOverPopup:!1,showYouWonPopup:!1,round:1,score:0,value:"",time:A,currentRoundPoints:1,answeredQuestions:0,errorMessage:""}),this.getWordQuiz()}},{key:"displayYouWonPopup",value:function(){this.setState({showYouWonPopup:!0}),clearInterval(this.interval)}},{key:"handleChange",value:function(e){this.setState({selected:e.target.value,errorMessage:""})}},{key:"handleSubmit",value:function(e){var t=this.state.allTasks[this.state.round-1],a=Number(this.state.selected);document.querySelectorAll('input[type="radio"]')[a].checked=!1,e.preventDefault(),console.log(typeof a,typeof this.state.selected,"handleSubmit"),this.state.selected?a===t.correct-1?(this.setState({currentRoundPoints:2*this.state.currentRoundPoints,round:this.state.round+1,errorMessage:"",answeredQuestions:this.state.answeredQuestions+1,time:A,selected:""}),0===this.state.score?this.setState({score:++this.state.score}):this.setState({score:2*this.state.score}),console.log("YAYAYAY!")):(this.setState({score:0,round:this.state.round,errorMessage:"",answeredQuestions:0,selected:"",showGameOverPopup:!0,correctAnswer:t.option[t.correct-1]}),clearInterval(this.interval)):this.setState({errorMessage:"*Please choose one of the options"}),this.state.round===this.state.winCondition&&this.displayYouWonPopup()}},{key:"countTime",value:function(){var e=this;console.log(this.state.round,this.state.allTasks);var t=this.state.allTasks[this.state.round-1];this.interval=setInterval(function(){e.setState({time:e.state.time-1}),0===e.state.time&&(clearInterval(e.interval),e.setState({showGameOverPopup:!0,correctAnswer:t.option[t.correct-1]}))},1e3)}},{key:"render",value:function(){this.state.allTasks[this.state.round-1];return this.state.errorMessage&&"input-alert",n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"main-container"},n.a.createElement("h1",{className:"game-title"},"Quiz"),n.a.createElement(k,{timeApp:this.state.time,allTasks:this.state.allTasks,round:this.state.round}),n.a.createElement("p",{className:"round"},n.a.createElement("span",{className:"title"},"Round: "),n.a.createElement("span",null,this.state.round)),n.a.createElement("p",{className:"questions-left"},n.a.createElement("span",{className:"title"},"Questions: "),n.a.createElement("span",null,this.state.winCondition-this.state.answeredQuestions)),n.a.createElement("p",{className:"score"},n.a.createElement("span",{className:"title"},"Score: "),n.a.createElement("span",null,this.state.score)),n.a.createElement("div",{className:"instruction"},n.a.createElement("p",null,"Choose the best matching answer for following words within given time"),n.a.createElement("p",{className:"error-message"},this.state.errorMessage)),n.a.createElement(g,{allTasks:this.state.allTasks,round:this.state.round}),n.a.createElement(f,{selected:this.state.selected,round:this.state.round,allTasks:this.state.allTasks,handleChange:this.handleChange,handleSubmit:this.handleSubmit})),this.state.showGameOverPopup&&n.a.createElement(w,{restartGameApp:this.restartGame,valueFromApp:this.state.value,correctAnswer:this.state.correctAnswer,timeApp:this.state.time}),this.state.showYouWonPopup&&n.a.createElement(b,{restartGameApp:this.restartGame,scoreFromApp:this.state.score}))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.1a202f0d.chunk.js.map