(this["webpackJsonpquick-quiz"]=this["webpackJsonpquick-quiz"]||[]).push([[4],{45:function(A,e,t){"use strict";var c=t(1);t(0),t(46);e.a=function(A){var e=A.handleClick,t=A.classNameMod;return Object(c.jsx)("button",{className:"btn btn--".concat(t),onClick:function(A){return e(A)},children:A.children})}},46:function(A,e,t){},48:function(A,e,t){"use strict";var c=t(1);t(0),t(49);e.a=function(A){var e=A.header,t=A.body,n=A.footer,s=A.classNameMod;return Object(c.jsxs)("div",{className:"card card--".concat(s),children:[Object(c.jsx)("div",{className:"card__header card--".concat(s,"__header"),children:e()}),Object(c.jsx)("div",{className:"card card--".concat(s,"__body"),children:t()}),Object(c.jsx)("div",{className:"card card--".concat(s,"__footer"),children:n()})]})}},49:function(A,e,t){},50:function(A,e,t){"use strict";var c=t(1);t(0),t(51);e.a=function(A){var e=A.classNameMod;return Object(c.jsx)("div",{className:"msg msg--".concat(e),children:A.children})}},51:function(A,e,t){},60:function(A,e,t){},61:function(A,e,t){},62:function(A,e,t){},63:function(A,e,t){},64:function(A,e,t){},93:function(A,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return x}));var c=t(1),n=t(11),s=(t(0),t(13)),r=t(8),a=t(45),i=t(48),R=t(24),Q=t(50);t(60);var o=function(){var A=Object(s.a)(),e=Object(n.a)(A,1)[0].quiz,t=e.current_question,r=e.questions[t];return Object(c.jsxs)("div",{className:"question",children:[Object(c.jsx)("img",{className:"question_image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABCFBMVEUAAABJSVtDQ2VCQmNERGRDQ2RDQ2RDQ2RERGM7O2JCQmZERGRDQ2RAQGBDQ2RDQ2RDQ2VDQ2RERGJBQWRCQmRDQ2RDQ2RDQ2RCQmVDQ2VDQ2RERGRDQ2NDQ2RGRmNDQ2VCQmQAAABFRWVDQ2RERGRBQWRDQ2RDQ2NAQGpCQmRDQ2VDQ2RNTWZCQmRDQ2RDQ2RVVVVDQ2JCQmRGRmZCQmRJSWFDQ2RERGNCQmVDQ2NAQGZDQ2VERGNHR2ZDQ2RDQ2RCQmNERGVDQ2RFRWJGRmRVVVVDQ2VDQ2RERGRFRWVDQ2RDQ2RERGRHR2NDQ2RERGNCQmRCQmNDQ2RFRWdERGNCQmZDQ2QAAABql3y0AAAAVnRSTlMADluazOj3mVoNI572CIr71dQiM+rp/cWOb1x1p7ssiYcBP/WmSv7aDK2dxwphvcEDQdMofxXzYneQFJjIGcrmXaLnGiEGgfyPMNjLXhLJcVlVnCWIMk4QeLIAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AweFScA9B/tZwAAAVhJREFUOMuNU2lDgkAQnRQ2EUTRsNJKyw61+7KD0rLD7sSK//9TYtlhm/Wo3hd233sw82YXAImpRFLTGdO16ZQBo0ibLJCwzPSQnLGzgYKsnVFezwUjcPI/emEmGAO3IN+P9eLs3HypvGDFDmwkE39/cQnjVLChnOjDRr26LGuu1ARlRwXQvkq7XlsXWXgRU+gbdSV3Q7DNsCDOZ3OL89s7u+U9vtjHiRlQilMdHAJU+eKIG46RTUFS5m6dnEbPM244R9IDbXg+F5dRDty1QVflzpUIe437LjBFd25EiFIRCaYaWreRfHffC6RBKfEQ6Y9PpCQ8U8ML119dwryRmCHK3PBOGQ8Swa/og2GRbcMP0SBErS4PK4LPS/iEGJDjHmfofXCiMtnwKa6cM8ng4NXPy+Bqk668+AU6Ggn96/8/zt+/Hm+kSSZmDfIwinrfa3cZ67S9Prnh3zRO0dSXUHzWAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEyLTMwVDIxOjM5OjAwKzAwOjAwF9pQIgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMi0zMFQyMTozOTowMCswMDowMGaH6J4AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC",alt:"question"})," ",Object(c.jsx)("span",{children:r.question})]})};t(61);var u=function(A){var e=["option"];return A.selected&&e.push("option--selected"),Object(c.jsxs)("div",{className:e.join(" "),onClick:function(){return e=A.letter,A.dispatch({type:r.f,current_answer:e}),void A.dispatch({type:r.h,error:""});var e},children:[Object(c.jsxs)("div",{className:"option__index",children:[A.letter,"."]}),Object(c.jsx)("div",{className:"option__text",children:A.option})]})},d=["a","b","c","d"];var l=function(){var A=Object(s.a)(),e=Object(n.a)(A,2),t=e[0],r=e[1],a=t.quiz,i=a.current_answer,R=a.current_question,Q=a.questions[R];return d.map((function(A,e){return Object(c.jsx)(u,{letter:A,option:Q["option_".concat(A)],dispatch:r,selected:i===A},"option_".concat(A,"_").concat(e))}))};t(62);var D=function(){var A=Object(s.a)(),e=Object(n.a)(A,1)[0].quiz,t=e.current_question,r=e.questions;return Object(c.jsxs)("div",{className:"progress",children:["Question ",t+1," of ",r.length]})};t(63);function j(){var A=Object(s.a)(),e=Object(n.a)(A,1)[0].quiz,t=e.questions,r=e.answers,a=function(A,e){return A.correct_answer===e.answer?Object(c.jsx)("img",{className:"correct",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA2FBMVEUAAAAUiRQOkhcNkhUNkhUNkxYNkxYNkxYNkxYMlBcKjxQOkxYMkxYOlRUAjhwOkxYNkxYNkhcAkiQNkxYNlBYLkBYLlRUNkxYOkxUMkRcMkxYAnyAOkxYNkxYNkxcNkxYPkhYMkxcOkhUNkxYVlRUNlBYMkxUMlBUamRoNkxYNkxYNkxUOkhYNkxYNkhYNkxYNkxYNkxYNkxcNkhYNkxYNkxYNkxYPkRQNlBYMkxUNkhUNkxYXixcPkxcNlBUAmQAMlBgNmRoNkxcAgCsPlhcNkxYNkxYAAACACDhvAAAARnRSTlMADVmbyur6yZpYGZf1JAmC9IgH0sUXMOniLOEIz8aH+SOSbPAMcpBWCtCZeLzH693Bve5z+O/+M5hVYPMLIYUFKxTABiLISb7gzwAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkDB4XCxWjd7ZMAAABJ0lEQVQ4y32T6XaCMBCFB1HEghWtFKXFdLHV0k2LbbVu3Zz3f6RGwJCEpPcPc+a7Wci5A8BkVMxqzbJqdbthQFlHjotMrtmU8HHLQ0FWu8Pz5gmW1PULfhqgQr0+W6/kiGG+x9k5ahRl92ihVoP0/zy9gVxQg4P/yKbv56rA5dV1+vWGUFHxG4DbrBqBqebju6yMoVrm95Q/5PUjPB3azxNu/fTQDYDk1YsBSVokPMcZM7zSDCQlTg3siOmYOt4kTo+oI+94lzi9pI2CQ+I4hwYKDonjQnzq6CMS+XIFyqdkivd5svR8tt4Hoq03bNJEbSc63s2j7/fUPGTB7ysd4WcxGF/fiv19frQ6AyJisvmRpvPX5tK9jNeK+R6O5ruAkGDnLFZF9w/HLMhTnY8JMAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMi0zMFQyMzoxMToyMSswMDowMNhvEJUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTItMzBUMjM6MTE6MjErMDA6MDCpMqgpAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:"correct"}):Object(c.jsx)("img",{className:"failed",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAO4SURBVFiFvZdLTFxlFMd/594LOMwAjS/AtEVNN5poiQYM6WYEFcpjIYsubOLKaNImfSVSNbEaF6alESxJXdi13ZjYBcXSSUA0gaYPom2qG1EibVJpFVs7U2Dm3u+4GB4zMJ17Qeh/de/Muef3/17n+z4hoG5t21YSKkq1qlAvsBXlSYQNACi3ERlX5TLC4MyM0/fY8PDdIHnFLyDR+GKl8exDorwJFAf0e0/hpPHsI2VD58ZWZUDr6kLxYvO+oAeAcEDwUqUQusIFUx/JmbHZwAbuROu22Lb7DchzqwRnSWFEkPbIwPlJXwPxV2uqMXIWeHwt4Bm6prZpLoldunpfA+mWe8PrAJ/XBEhtZk9Y8w8ajT5k297X6wgH2KzoKd2+pWiZgbg9/QFQvY5wAATqErOPfJzxnl5q6tq/svrZvlIlXfWe3TA4+psFYDz7kC+84glkY5VvZtlUBeWVfmGFNs5BAPl7+0ulRUm9Qb4iU15J4YmvwHFwj3Vizp7OGWY1tuLs7YCUS/LtnTB5I5+JxD2vuMIqmtWWvHBACgrBcUAsnL0dWE1ty+FNbWm4WOA4SEFBvpQA4ZCTaLZUqPeL1Ot/4H5+BNSkTezpwG5tX4S/1oKz5900XBXvi270+oRfWlAaHIGt/pFgYn24gLPvIIiFvWt/OkdyduE3VPGOd+H1nQqSEpDnJd5Qewt4NOAX6a5eaK2Zy5N+dnuOYvp7g6YCuGkBpSv5wvT3Zg3HYsu7VwoHKLP8YwJKfHf2nLKAf1f0QVNbxpibuZ4Q7F37cq4OH92xgPHA8KWz/Xj38tXR8npgusLvjqr8JKI1geD3me1Zq2P3AYCgK+GyhTDoFyWbqrK63e3pzAKYWB9uz9HF4di9P1DZRhmwpr3QaYF43rhkElIuGJMuxTlmu+nvxT3WmTaRctFUzhNYphLTpviMANxtqD0h8Fbe8PIKpKDQt8LJxs1oKgmTf+aNU/TLkoGL7wgsnIR+AXwL+Bpp1rZ5JhS7MG4BlA2dG0PoekBwFD4LxS6MQ8aJKPyP9yHwwwOAj0QKpz6Zf18wIKOjKZAdwLV15E8I0p55R8gqxZGB85Nqm+Z1MjGhRpuX3g2W7QUlsUtXjee9gPL9WpEVRkBqS767+PPS/3JuRqVDo3+Fi6YaUTkMJP8HO6nwaeThxMu5bkUQ4HI680rN0yljvSeibxDw1CwQN+hJx5bD87M9T2ww3YxGIyEn0YxKvQjVKE/B3PUcbiOMK/yIYTDizHwrsSuJIHn/A/NYeWJNjN7eAAAAAElFTkSuQmCC",alt:"wrong"})};return Object(c.jsx)("div",{className:"result",children:r.map((function(A){var e=t.find((function(e){return e.id===A.questionId}));return Object(c.jsxs)("div",{className:"result__item",children:[e.question," ",a(e,A)]},e.id)}))})}var m=t.p+"static/media/result_banner.212ce656.svg",N=t.p+"static/media/question.1757246b.svg";t(64);function x(){var A=Object(s.a)(),e=Object(n.a)(A,2),t=e[0],u=e[1],d=t.quiz,x=d.current_question,O=d.questions,h=d.current_answer,b=d.answers,M=d.show_results,B=d.error,g=O[x],k=function(){var A={questionId:g.id,answer:h};h?(b.push(A),u({type:r.e,answers:b}),u({type:r.f,current_answer:""}),x+1<O.length?u({type:r.g,current_question:x+1}):u({type:r.i,show_results:!0})):u({type:r.h,error:"Please select an option"})},G=function(){u({type:r.d})};return Object(c.jsx)(R.a,{children:Object(c.jsxs)("div",{className:"container container--quiz",children:[Object(c.jsx)("div",{id:"bg"}),M?Object(c.jsx)(i.a,{header:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{className:"result_image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAgCAMAAADOixOHAAABF1BMVEUAAABVVVVDQ2RDQ2RDQ2RERGRGRmZCQmNERGRAQGBCQmJDQ2NAQGBVVVVDQ2RAQGBERGVCQmRBQWZCQmRERGNDQ2RDQ2RDQ2U5OXFDQ2RCQmNDQ2RDQ2RDQ2RDQ2RDQ2RDQ2NCQmRERGRDQ2RDQ2RERGRCQmRCQmVCQmVERGVHR2ZERGRDQ2VDQ2VERGRDQ2VDQ2RDQ2RFRWJDQ2RDQ2RCQmRDQ2RDQ2RDQ2RCQmRERGZDQ2RDQ2RERGRAQGNDQ2RDQ2RDQ2VDQ2RDQ2NDQ2RDQ2NDQ2Q7O2JDQ2RERGJCQmNDQ2RDQ2RDQ2NDQ2VDQ2NCQmNBQWVDQ2NDQ2RDQ2RERGVDQ2NDQ2RERGNDQ2RFRWJDQ2QAAADYLzV1AAAAW3RSTlMAA3PW4rUog6YQRtoYBuEIbX83h4iZo9UJz1XZ3bu9/F+tZmvyXrxROkQZj51YUvHk5hqK/pb9rufXLZSkOCS/jK/orLp22A35Iprs+1BqlV0rkNH4VsOwyPQ0mNcfVgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMzBUMjM6Mjk6NDIrMDA6MDCl3SV6AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTMwVDIzOjI5OjQyKzAwOjAw1ICdxgAAAOdJREFUKJFjYIACRiZmFlY2BgzAzsHJwMXNgy7My8cPJAUE4QJCwiIgIMoHIsXEwRwRJgkGyWhsQIpBGkjKyCIBOXmgiAJYXFEJCSirAEVUGdRksAF1Bg1NbEALbA4mUCAgrq2ORVxMR1dPnxnhUgOouKGRsUm0KcKlrDBzzHCar2KORdxCxdLKGou4ja2dfbSDFBw4QsVNjIEu4Ea4x4mwv5x1sYg7urhqGGARd3NX9ogW8IQDL5g53jjNN3HDIu5jou/rh0XcPyAwKFpNFA6CoeIhoWHR0eEicBBB2F/Ei9tgE46MAgDkqrFxYs4AIQAAAABJRU5ErkJggg==",alt:"result"})," ",Object(c.jsx)("span",{children:"Result"})]})},body:function(){return Object(c.jsx)(j,{})},footer:function(){return Object(c.jsx)(a.a,{handleClick:G,classNameMod:"reset",children:Object(c.jsx)("span",{children:"Restart"})})},classNameMod:"result"}):Object(c.jsx)(i.a,{header:function(){return Object(c.jsx)(o,{})},body:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{}),B&&Object(c.jsx)(Q.a,{classNameMod:"warn",children:Object(c.jsx)("span",{children:B})})]})},footer:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(a.a,{handleClick:k,classNameMod:"submit-answer",children:Object(c.jsx)("span",{children:"Confirm and continue"})}),Object(c.jsx)(D,{})]})},classNameMod:"question"}),Object(c.jsx)("img",{className:"quiz-image",src:M?m:N,alt:"quiz"})]})})}}}]);
//# sourceMappingURL=4.75a1d332.chunk.js.map