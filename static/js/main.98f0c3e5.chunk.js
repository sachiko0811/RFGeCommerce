(this["webpackJsonpreact-redux-firebase-ecommerce"]=this["webpackJsonpreact-redux-firebase-ecommerce"]||[]).push([[0],{61:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(2),a=c.n(n),s=c(30),i=c.n(s),u=c(13),l=c(7),j=c(23),o=c(41),d=c.n(o),b=c(42),O=c(47),h=c(5),x={EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_USER_START:"SIGN_OUT_USER_START",SIGN_OUT_USER_SUCCESS:"SIGN_OUT_USER_SUCCESS",SIGN_UP_USER_START:"SIGN_UP_USER_START",RESET_PASSWORD_START:"RESET_PASSWORD_START",RESET_PASSWORD_SUCCESS:"RESET_PASSWORD_SUCCESS",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",USER_ERROR:"USER_ERROR",RESET_USER_STATE:"RESET_USER_STATE"},p={currentUser:null,resetPasswordSuccess:!1,userErr:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.SIGN_IN_SUCCESS:return Object(h.a)(Object(h.a)({},e),{},{currentUser:t.payload,userErr:[]});case x.RESET_PASSWORD_SUCCESS:return Object(h.a)(Object(h.a)({},e),{},{resetPasswordSuccess:t.payload});case x.USER_ERROR:return Object(h.a)(Object(h.a)({},e),{},{userErr:t.payload});case x.RESET_USER_STATE:case x.SIGN_OUT_USER_SUCCESS:return Object(h.a)(Object(h.a)({},e),p);default:return e}},S=Object(j.c)({user:f}),m=c(9),v=c.n(m),E=c(12),R=c(43),N=c(29),T=(c(87),c(59),"".concat("AIzaSyD-hONKJehOzOXebkDIpfLWeicsViozKUw"));console.log(T);var y={apiKey:T,authDomain:"ecommerce-website-4d943.firebaseapp.com",projectId:"ecommerce-website-4d943",storageBucket:"ecommerce-website-4d943.appspot.com",messagingSenderId:"282334211680",appId:"1:282334211680:web:bf17f076cd96a27b02dd05"};N.a.initializeApp(y);var g=N.a.auth(),C=N.a.firestore(),I=new N.a.auth.GoogleAuthProvider;I.setCustomParameters({prompt:"select_account"});var k=function(){var e=Object(R.a)(v.a.mark((function e(t){var c,r,n,a,s,i,u,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.userAuth,r=t.additionalData,c){e.next=3;break}return e.abrupt("return");case 3:return n=c.uid,a=C.doc("users/".concat(n)),e.next=7,a.get();case 7:if(e.sent.exists){e.next=19;break}return s=c.displayName,i=c.email,u=new Date,l=["user"],e.prev=12,e.next=15,a.set(Object(h.a)({displayName:s,email:i,createdDate:u,userRoles:l},r));case 15:e.next=19;break;case 17:e.prev=17,e.t0=e.catch(12);case 19:return e.abrupt("return",a);case 20:case"end":return e.stop()}}),e,null,[[12,17]])})));return function(t){return e.apply(this,arguments)}}(),U=function(e){return{type:x.SIGN_IN_SUCCESS,payload:e}},A=function(){return{type:x.SIGN_OUT_USER_START}},P=function(e){return{type:x.USER_ERROR,payload:e}},w=function(e){var t={url:"http://localhost:3000/RFGeCommerce/login"};return new Promise((function(c,r){g.sendPasswordResetEmail(e,t).then((function(){c()})).catch((function(){r(["Email not found. Please try again."])}))}))},Q=v.a.mark(V),H=v.a.mark(Z),W=v.a.mark(_),D=v.a.mark(Y),L=v.a.mark($),G=v.a.mark(ee),M=v.a.mark(te),F=v.a.mark(ce),q=v.a.mark(re),z=v.a.mark(ne),X=v.a.mark(ae),J=v.a.mark(se),K=v.a.mark(ie),B=v.a.mark(ue);function V(e){var t,c,r,n=arguments;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=n.length>1&&void 0!==n[1]?n[1]:{},a.prev=1,a.next=4,Object(E.b)(k,{userAuth:e,additionalData:t});case 4:return c=a.sent,a.next=7,c.get();case 7:return r=a.sent,a.next=10,Object(E.c)(U(Object(h.a)({id:r.id},r.data())));case 10:a.next=14;break;case 12:a.prev=12,a.t0=a.catch(1);case 14:case"end":return a.stop()}}),Q,null,[[1,12]])}function Z(e){var t,c,r,n,a;return v.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,c=t.email,r=t.password,s.prev=1,s.next=4,g.signInWithEmailAndPassword(c,r);case 4:return n=s.sent,a=n.user,s.next=8,V(a);case 8:s.next=12;break;case 10:s.prev=10,s.t0=s.catch(1);case 12:case"end":return s.stop()}}),H,null,[[1,10]])}function _(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)(x.EMAIL_SIGN_IN_START,Z);case 2:case"end":return e.stop()}}),W)}function Y(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var c=g.onAuthStateChanged((function(t){c(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,V(e);case 8:t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),D,null,[[0,10]])}function $(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)(x.CHECK_USER_SESSION,Y);case 2:case"end":return e.stop()}}),L)}function ee(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.signOut();case 3:return e.next=5,Object(E.c)({type:x.SIGN_OUT_USER_SUCCESS});case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),G,null,[[0,7]])}function te(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)(x.SIGN_OUT_USER_START,ee);case 2:case"end":return e.stop()}}),M)}function ce(e){var t,c,r,n,a,s,i,u,l;return v.a.wrap((function(j){for(;;)switch(j.prev=j.next){case 0:if(t=e.payload,c=t.displayName,r=t.email,n=t.password,a=t.confirmPassword,n===a){j.next=6;break}return s=["Password don't match"],j.next=5,Object(E.c)(P(s));case 5:return j.abrupt("return");case 6:return j.prev=6,j.next=9,g.createUserWithEmailAndPassword(r,n);case 9:return i=j.sent,u=i.user,l={displayName:c},j.next=14,V(u,l);case 14:j.next=19;break;case 16:j.prev=16,j.t0=j.catch(6),console.log(j.t0);case 19:case"end":return j.stop()}}),F,null,[[6,16]])}function re(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)(x.SIGN_UP_USER_START,ce);case 2:case"end":return e.stop()}}),q)}function ne(e){var t;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload.email,c.prev=1,c.next=4,Object(E.b)(w,t);case 4:return c.next=6,Object(E.c)({type:x.RESET_PASSWORD_SUCCESS,payload:!0});case 6:c.next=12;break;case 8:return c.prev=8,c.t0=c.catch(1),c.next=12,Object(E.c)(P(c.t0));case 12:case"end":return c.stop()}}),z,null,[[1,8]])}function ae(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)(x.RESET_PASSWORD_START,ne);case 2:case"end":return e.stop()}}),X)}function se(){var e,t;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,g.signInWithPopup(I);case 3:return e=c.sent,t=e.user,c.next=7,V(t);case 7:c.next=12;break;case 9:c.prev=9,c.t0=c.catch(0),console.log(c.t0);case 12:case"end":return c.stop()}}),J,null,[[0,9]])}function ie(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)(x.GOOGLE_SIGN_IN_START,se);case 2:case"end":return e.stop()}}),K)}function ue(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([Object(E.b)(_),Object(E.b)($),Object(E.b)(te),Object(E.b)(re),Object(E.b)(ae),Object(E.b)(ie)]);case 2:case"end":return e.stop()}}),B)}var le=v.a.mark(je);function je(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([Object(E.b)(ue)]);case 2:case"end":return e.stop()}}),le)}var oe=Object(O.a)(),de=[b.a,oe,d.a],be=Object(j.e)(S,j.a.apply(void 0,de));oe.run(je);var Oe=c(14),he=function(e){return!(!e||!Array.isArray(e.userRoles))&&!!e.userRoles.includes("admin")},xe=(c(61),function(e){return{currentUser:e.user.currentUser}}),pe=function(e){var t=Object(l.c)(xe).currentUser;return he(t)?Object(r.jsx)("div",{className:"adminToolbar",children:Object(r.jsx)("ul",{children:Object(r.jsx)("li",{children:Object(r.jsx)(u.b,{to:"/admin",children:"My Admin"})})})}):null},fe=function(e){return{currentUser:e.user.currentUser}},Se=function(e){var t=Object(l.c)(fe).currentUser,c=Object(Oe.f)();return Object(n.useEffect)((function(){t||c.push("/login")}),[t]),t},me=function(e){return{currentUser:e.user.currentUser}},ve=function(e){var t=Object(l.c)(me).currentUser,c=Object(Oe.f)();return Object(n.useEffect)((function(){he(t)||c.push("/login")}),[t]),t},Ee=function(e){return Se(e)&&e.children},Re=function(e){return ve(e)&&e.children},Ne=(c(63),function(e){return{currentUser:e.user.currentUser}}),Te=function(e){var t=Object(l.b)(),c=Object(l.c)(Ne).currentUser;return Object(r.jsx)("header",{className:"header",children:Object(r.jsxs)("div",{className:"wrap",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)(u.b,{to:"/",children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc8AAACQCAYAAABu1+C9AAAACXBIWXMAABcRAAAXEQHKJvM/AAAa1klEQVR4nO2d7XHdNhaGwZ39L6cCayuwtwIrFVipwNoKoq0gcgWrVBC5gigVrNSBVMFKFUSqgDuMDmXqEucFQHwQIN9nhmPPvbokCByeLxyAXd/3hhBCCCH+/I19RQghhIRB40kIIYQEQuNJCCGEBELjSQghhARC40kIIYQEQuNJCCGEBELjSQghhARC40kIIYQEQuNJCCGEBELjSQghhARC40kIIYQEQuNJCCGEBELjSQghhAQSZDy7rjvuuu6i67qbrut6x/Ew/O3sJIQQQkjjeL2SrOu6d8aYS2PMl9mXbn7t+/6cgkIIIWQrOI2nGM4bY8yH2Zf+/ND3/ROlhhBCyBbwSdteRBrOgY+zTwghhJBG8TGeZ7NPwmHUSQghZDNA49l13Ykx5mj2RRi3fd/fUWQIIYRshb877uPd7BN/no0x11JoRAghhOzGeLq4F+P4MKRmGWESQgjZAz7VtugPfuz7/mb2KSGEELJh4Jyn8Dj7hBBCCNkxPsbzYfYJIYQQQuMJofEkhBBCJvgUDDVhPLuuGzZiOJ198cJNibnZYe9fY8ywvOd48vHQf9e17rAkbT6dVFYP7b1LVfwl55/2y7FsmnG4BOrWGHPV9/3V7CTxbdBk407utToZlzY/1di2vdN13anI8zBGnyzdMaw0uOz7Psne3i3K7y4YCobQITsM9cpxgn5b8pBlMVo7h+MiV3vE8FxZrjkeg+E8t/024prHUun8JNcYnIN3tr/VDtBnN9pvPM97Kv3xYDm36ziznTOiLZeO643jM7T31HaOFWT57KB916Fjm0CebybXf6jpWV9pTI5FFz5Z5Ec7jm3nCrxuU/Ir/XR10E/Vyc6Bvn6QsQ3Tn7YPDy5yahms7AYpsCPeWdpmO6KF2XLtjwFG4sp2joUCanuI72x/bzvEc7a1cbHxlHMuMZjT48F27oXtObec33n91AZ8gTxFjW2CNtgcwaccz0/th+gWHwNmOy73JL9Adp9KOn8e7dTG8y6knbMPZn+AlWwtxhMZ+OTGy0NY0BHtHYLB9z4/iDoXGU9LtBRzfLRdI7A9x7FGfA2PWR5gW3uilXFAGzQHqMj1azlEr4Q+31HPUcvyqzhdtdkKZM/6EMdjKy/D9t14/nj2yULkbTPXlrk7Fylez4bu1zY3YiNm9ygbqXaSek403xo73/TeGPPfruuK7ZDVdd2Z4yUMP8uWmbl5r5wfyd2mkHcR/x65PWmMHDcnvw79ei46c21c/Yru4Q0+xrOFTd3XeKgvgJJZk2QOQiCxeyCPXM8+CUQeUl8nwsVgsK4LPfg+jhW3u8xM13XDOPyS4CqLit8all9UlHmUKHBYjDietgKvRTiNpyMKqMGTMKXbIRWkP8++8AMJWAqSCccKfEvgcRtRPKmM+cDn3OMmMoWizpEPEqHm5Dnz+atFFOx/Itv3KLuvId2JaE5+BZfju6rxTPSGsFdi07a1pHFKt8NnEG7lmHK/1BttgF8Dm/iHMeanvu+7yXGWqOzeZ3weJ2N062EwBqOVc+xCZDjJEgjALveolujMZ4wHWf9RXvLfWY7jyKVxLcqvK9AaOCrg+FkR5/SL7bulxG4MXwspvTQfkAA8y0T9X4IkD+RHqSLd7Hqsvu+HOY2biREY7/W32R8b89j3faq01Bukv1H0/SzLhmaKRKKOC/D7L0MKrO/76NSyhRDj+X5QQrZ7WKEtW+LcMRXzLAV52aK4huXXl7OVAgiks5dhqyKyVChpFWdR6wETVU/5LlNJ0l5RLLZzj0f2CreDNXizw/YbyzmSVttqh+XcWeXGo+rXWckr59BkPkvZvWM9te3ItnTFcq1qnveM9/wOjHlwJebe5NdDdqZH8SVPoIJ8cVWwb9pWC8fXKk6ZEuIlp/CokQfzraG3zGhj2jooov3qMw8lXv2Jkgo7qqRo50Ohytu9cObIYN3aor0M7EF+i859ynOCMgqLiJ3zrLHaFIEeDl+QwmIl5Pqg8fFWfqKktIf8i8yhrI3WPhKOqy9zzzOP7EF+UQDSzPW2sM6zmBDIfIRWEXlf8GXgfIeqBVEImoN0GzrnLB78t9kXL5RSpojPlRjxpvGITO4L7o29B/k9kv2BS5HlWtHGs4KFr0HKI7K9KO27JYPWqkJG47O0SOJcSX8x+twOrsikVEZpT/JbJPoUI605JDbQGLwhds7TNFiZF9NelFJZs4JtCWjzC+SF1wwaWyTDKvI2HC1dVkIB2BRf6TZsFnGmXUsYSj3bTcuvvP3Fl8+FAq/QqNO7Tb7GEynaPaF2bEOFQiNbLBhSnZvI8SmhfLQo4E7WB2ustnZuI7iU633B1wm2LL8G6UeFEqlbtU9jSTHnuXbaNrRzNCXlg+ZZIeVWmt3uDgN41L9yI3PZtnO8T1jxiuTSlTYsOX+0NVzjV4NTbJM9bwrJ7xKyTjlIJJwti5bCeGoGZW00g4aU1FJq2vyghYgyl8OlLQ5PMT7aOUoYrmuHU8TCoeW4jEfJ52mr8qvxIbPcZr23LVfbavMUORR3iylQ7WEqgVaxnIsUaTctAsmufCRtqMnzCFO3gYjidkUmNTjGTcuvg5zXr8J41rytnE3474HAbWHrsWhjvbWtAh3FBzmdm/eFoj5X6pbGMxznuJWqZdiB/GpkkVvHssIkpDCeqxkjMOh3G9/cWnMM9syaTlH2eSOZt9KmIowowb3uSbsU17jZ5glzsQX5RQ7AH7NPXsiVus3+TLZeMKR1ei5jrxnkWl7NFgqaRyP+pHhQNVmeolVNjjD6DMP13CI9siVSGRqkW9G0Q47CIZSyRU5R0pdh14w26DfA0MVs0adFfEhoakbroxZZcwxSXNs2/XAIjWdaXONW8vloXX5dPIDMCTJ0S9FsgwHzvyakOrd146l5jndobVZEekvzRFnpuD6aLJSgSAGUyLS23ZpZYduzraPqkAxsXX5R0VvSKQfHEpVHoMeDaD1ta+vwZ2Q4haVt1jzR944J/+bg/FkYBftLU0AjNJ7+aEtDRlCEsilyy6/M2SPZTZk1WRp1BuFlPB0VZ6WXHUyxRXxTA3c7+/aFRYLi2PgdDVitICcjqzOQYXG2TRZKUsR5khcZozkbGs822YL8wnOAzRpMYrlFugXZsiBaT9vaQnNk4EbgIDvQDHJJpZWqkGFLc565lY/roSsZqSMPnqnbRDiChtRsQX59zqG1I+WSGZfxTOLoNms8QeQyNQiakYkRFE1xFVNYW1ujuREWP5ALlAa364sE6I+9UmraSdOfJoXcyrhqRaGPojuTOLotR57aYD8o//f5rQ+a51SLx49SsSQfMTIVZDxFAWiVi8bhecegyf4WQf27RXIaz2mqFslQinlPJPtemTbf+d+kxnMomhkMSNd1F13X3chxlWkRrPUGD1ItmiGx/taHgnn7pWx5cwjE2gVbpQusUPTJDRPi0XRHLrYsv69BjBRzalNfKTZMQMYTGe4pXmORxHiKsRyU9p/GmN+NMb9IJdsneVfe/4a/mf0wDttgH3qLmiHRwnpftNRDLS9I9mXNKDW1sshduKZlMdZCk8ERrvlsiy3Ir00n20CyGxuAoArqpJmTEOOpeQtGjKVr8H9J7A3bjJS3gETOeSCvP7WTkBPNuShBU5FRbfPM4sFrW54ZhweusqO5wF3NeRaSX9+gBBmxxcbTMW327FgtEUzpOU90c6HYjPWbzslVLSeCqDkTrUWfGtz4oX7QjkO5X/dEyCLEiGlbg36KWDOPHKLkgUKTBUMggg3pINTRPmwl+tSg4q0cWfOpKSHDqtso9lo7kANbX+ZI3SKdHhJIlZvzDCBVJKgpdltqQivuicKxWP0LS+E3iZZtWBOkhCiDy9li1Xo2+QUBjVH6EtmCYOPp8QoydL1D0L28UtJ4/powjWq9OSWnbTOoJpFiQREm+o6UrS60ycVWQBmQz7NPSIu0IL+hz3Nqpw/+JscUXm7jOXg6X40x/+j7PuVrZ2zGs3hU0Pf9FYg+PzkmsBezkajWNoa5sHm+S0Dn0bIhWXEsnXIVUYSyp3WeNYHkLgR0nqLyKwVv2lraJWvmkU7MYhtCjKcWwRl508NgJH8yxvxojPln3/dd3/cnfd9fZKj0sile7RraA49KmkNATgGKCkh7oAjAtlVkKZAXz3lPMrKW/GpGW9PNxmEMbaC/R/e9mFTG80qM5PUQHivp05TYBhq1Lxsy96l5NsNidWRcCUkBctKQUiEkFUjONHuAjKe305d4vtOb5qptQcpS6yDN60HnCgXNb140+rqyVGkcVA3aGqosrYlju77Q3YY29Wo98oaq5FcCD40QuXX9nWYbNLzsQotLVTSlrkWemteTDJmM1hasHzlSu6k5kx2fhm0STw6OEMWo9XMoWv+3OOep3UsNoDWfIU4it/Wrjy3Lr5a1MwFyi/7u3vJ+5yT92aLxtD7cC+dVredaCDKQ5wWjz/ey49OwTeJ/D44/u67rx0O+W4vYLRIPQRHuHqIp5MVz3rN+Wpffpc42igp95RYZT9v5kzgRWzGeyHtBXkYyoRTj/XX2xQtHjtQuiWfXi9pF/rTsR8yuLVP4Krx8tC6/yHgiubEZtxFfuUXFn+j8UbRoPG0dpQ6Oo3gJDfgSLoEH+TO3S8tKCe8cyVINoOgTeedebOw9srU9i5uVXyQ3Husvodx61K1UYTzVDigFMD5L26adbxGSW0fpW0afExKnslG1XRIscye1gYwnU7dvqc0R2LP8osyhS26R8bTNd5o10rZI2Gyp1Bxo11nqXST39mTjBE0YSmwaP1Rd/ktSyLdoAX0hbMI7oo0nWYDjTStIyRASiy0j6AvS3y65Rd9rziTSSab09nylJrS1m0KG3QADksvbQxEmWpOXgqfBgMu622GTisFY/yCbV/wkRnU8tBSzSbiJBDfYLotWdetb+k+H5gWk0Em5vnbJLfoOnRfhVcz499kndWP1MlBOXXhQNlbIwpDH77ruVjFAn4fos+T8kUQkoyC9emNd1xmpzCUbYVg713Xds6IATjycGa7zJCnRApdXRF/OPp9glVsxqjY5/wswnzo71xJaKxiyeRlaitSLjGlUFH2i7/YEFXUetHRVzLyntgkD2TmOyNA3SEB63Bo0gc/h+ZR50GBSGU/UeUkQI2fzMmI7IovxFK9HG0AWb7zAFGEeNONpy4T4ssVXdJE0pHCCtSjRgLcDIf2BzpeEluY8tY5qcdeXJW8NaJXdKN1atmFE75rdkdyRQFaWX2jslCUpts9GNAdyJDqT0lLaNsZ4or/RzhuNVN5qRTl7UWKo71NiNRZCkTV9lS0F0JQHUjiGqfTV2LX8gvnJkTf6UjKRWh3Ls2N9v0nh1HsbT8fNlRhc7aH36QT0N7mVhabEqjeeBZbVpDw/mlvZ4+YUWtbDJXfZ1xsSKy3Lr6abjUP3HqJNc9muga6JbFUyUkWemgeQEmuE6DDqNaAZzyPHRHsNtGQ8yQTwkuz3C50ipNwJ0QjJPCFd/uEgrYyMp6Zzp0RnxJpI24JiIZtyqArHa3eQABASiyZ7S+SOxpPkBhlPcyC3SIZ9AqpyaVsXmaMoraNSPNDauVOipSP2YDzRGKVMmZe6Tg5Q22NYmroldclA7fKbpH2++9xKBKplO+9LraFPGXnmHGDNMLeye40mFNp9bQaHIKecX0PXSdLPuRxERx/FnFdL3VqdtgamEbYMkoGq5TexHkNVsCcH/9rQdO0h9USemdEGp5VlENqAat6TC60/QkFCSOa0WIlqS91q8+2stN02LYyvpivNxNlGegv9fkpVc57ohmLRFne3sv+k6lUqSszFZpRcwrVl6GEo0V/akqS1SZW6Rf1L4kH9uyf5Rf0wrvdUbY2jxiQp1UeeyuLYkSaMiCMtl/oeUlawpmqbLXU4kiqKRlmIVOlh1Fb40K8FSN2GGk/UvyQe1L+1yy/SE6EBjqsdZ6A/tDcKZSHUeNoewtygAf+967q7rusuhp1TQAk+GhB0/hJobV5KymVDqfoGOQ+pKHENpCRqxuaNH5b+G26XuCoty69mzIIRZw9Fwcjps8l5NkLfqoLeTpLrwUORp5GBex082Z3/Xjy5BzmQgRrmf96tuLsGatseSHL/Q3SP3swwZDAyrwmuOTIbUrc/zz59UUTTtO6e5jyrWnpD+X3DHZiqsy1ZHAnpHxRQedFCte0So/xBOv+LvHLry+wv4q9B0pDSeUCVeinkEzly1c4JgtQtup9DtrbOs8b7ofy+sMRJCFqikiJYqnrO07F/YUqQUJF4Sj2Y6IHYu4NkS2mhFNgbSr5/dsdQfl9Yoi+KF4/WHnkigRk2Hvgm/6IcuQ80nnlBSqGl/W2RPNZe+W2ruj1csrKn5wDJillpOgW1qUr5dRR0LgX1g4ZNvrMSOueJyLGhNBqYK3lrySsykO9ESI7l0HLnU5BQRWMpzCDfacJ4yhii+RbkIKzOkLrtuu7Rksk53eMyFNcc49aMZ0vyK7I6+xzw6PEWleTUvlQFGc9ZZw0T6sM6n77vL/q+P+v7fphkH0bhB2PMv2dn+A4SqhQg41yz0i2xBjMlyHuOeRG0cYyhWePhXcDS1C2ai2sZ2zzwyBrGk/L7nRCZs8l1dmo3nmo0GzLYw+Rw3/eXsy8mgGUuKUDnTi60Ce8FPnABlHIQkOce2y/IkWvFuNiU83TJijbeW13jieSltshzb/IbInOpjSdyql5JajxTGiBHLl3baN0FEpK1jOcWrueiiPKVohYk+Jpx8AH9Fiq9WpDdV2z1AWP0mTsDUxvIcY2N9ILZqPwuffZtjp6NxwxLeLz6I3XkmVJpI+OJhB6BOgUJVyzqvTTwPtJoCqeE0LVixlgdw4a2iTSKl+5K3e4x8sxVDOOiNflF5y3x7NvkuQg1p23RoEChB6CBzGk8tXOjSJgsAykCJFMqUpGKojIkV7Vh658TR9ZoqwVFrvta49VttvEZofzOKV5lO1Kz8URpk2YiT4fgcrPt9CBPFMkU4gx899xY9sDWP4N8ns8+3Tge47aG8bSNz8ie5NdHN96uWehUpfH0SJfkMJ5qcVIk6F7QgxLDbjcEkHkjNaJfmIpDSrSptLvsrGLrH3SP6LlpHVQ/8b506pby+4rPVMFqUaepeM4TCchzxNZKUAlkelks8vpyCe7e15WihwrJ1gyRCbTL1WpzLhHY5A7dI3xuGsc1fhezT/JD+X0JkGzFbSOPh+v8E+IV4ddqPJERWxyme2wxhq4bjMwjaRHtHxFOQKkCjuIVh4lACgF54TaQ82Mc16qVFtucC5sjMeXT8Mam2ad5QeOzC/kV3YiWF64+zVDrnCfyrmJz3MibSR15Iq81xmviXClAnCQtHffBURzziqx/RMonxgFajdA5ri1XhINN86dcZcpKWWlMfrMtixs2uzHG/Dr74qXdWY2+z3hXZzwdBTYmQdSFDE+yB0TuQ3uby2PJN57vFOScIIUy5dwhi8gzrh11Xm2HuMZxkIGbkga0IfnNuqa87/vhHv5pjPkqL7v+GnD/MTinvkKNZwkPFEWduduQ5OEQjw8JP/rOB+QAVMXQF13XoYd0SIv1k2PYc/S667qoB0TmQ7SI4ty137AoSpQaum08IvOVoWJGVmTl6kAebjLv/mXkeUQZKTMxoBcl9qqm/H5nyA7Ilqun8m8V2Z4a07Yu4xlbvICUxlHsgyG/vwFznc+xHl+NqcJBwYmimyq+3hjzp/IiZo2huOGzMea3QZEqf+OL9vsjlFKfOD/Ia1d/n5hPmYyH73NURNYmz81htmaYd7/LaUA95tdGjuT9wA9i5M+G6lc5BoN2N5H9uwSR6hbkt1XchVl933sf0uE9OM5Dzmc7wLmH48n2m8T3cGL73eT3d6J4rsWzO5kc56JsbOcdjzPbeRfcx43l3ONxYftN4Dn6F/GY/852SL/Mfp/ggOOBDkm9PIA2zMZCxhL9Zjhu0HUXthXJzZXtN5HXO7dcx3Z4yVKC9lxZrp21zw+u/84xBkuOqDa3IL8uHWL7TS2Hrb0hOjT0lWQuLxRFdU481jCtmmYYvMtJRDlGSCHcJiyvfqisGlaLtGM5WTruQ0QhY/b77MsXfpP08Hj+E48+fc4053IHrv0lwzUH5+8/s0/nlFqmotUHjPwVged6KbfIyhmQlSUMbf64dCF/Y/K7NZLPeeaea3MZzxJFNig9FFOyfp94x5LN74mbAinMslXsjXySVNwvns7IWSYFXnQtpWsx/oSa5tfRsxmNyMrXxKeNmgZqSH63RtpqW5lgdk2sx4Ae1OdExtMlOOh79B3iXtKPKeePUF+gfgwhZKy10vpYovtMKva+zb4I518Zq6TRebXCkVhcDthzZe95zD7/KssjUhrQvcjv1nA7arZcLjrAnOEd+l2CHHqSuRePeYR3tt/Jbz9a/t51XKNzRt7LpeXa3vMZoK/VORXtkH51zVuFHknn2yLaNyjAU9s5E7dPmzdOMk9uuZ5LnpPPtWqHhyw+aL/N1J5Th57wOZLoxJrlF9iDPkWNSuYxtrV5eny0/e7197YPFwziVSoDIRb//ECRXNr+NuIao6I/fDicSkrmC2wdPXvYcym9g/uYKp2bkHEACutu6cM2Gb9rcH6fh31xoRA6RCmGFIYkk+0F4/lUQIZOZaymcnslcl7kvvvvhlwblyeXIsvYrrOD/vE9HnK0uTb5dRRaFXO+Frbd1ubpAXVQJychAch2XbZS8EdRftdMj9TLZOeVU2We6FbG8YrzQ+WQpR2XB2Pyh1TxrzoOIjNjZf1HRW6MTNFciexkSTPXJr9S6Hl2UPT1Tcat2h24hqV1Sv+N/IjWwtJ4EkII2R2yjhxVef8DOR81v8+TEEIIyQXKDt4iw2kYeRJCCNkrw05QljXqzzJfDY0nI09CCCF75exgmd2tFApBw2kYeRJCCCHhMPIkhBBCAqHxJIQQQgKh8SSEEEICofEkhBBCAqHxJIQQQgKh8SSEEEICofEkhBBCAqHxJIQQQgKh8SSEEEICofEkhBBCAqHxJIQQQgKh8SSEEEICofEkhBBCAqHxJIQQQgKh8SSEEEICofEkhBBCAqHxJIQQQgKh8SSEEEICofEkhBBCAqHxJIQQQgKh8SSEEEICofEkhBBCAqHxJIQQQgKh8SSEEEICofEkhBBCAqHxJIQQQgKh8SSEEEJCMMb8H5HrbOndqXhtAAAAAElFTkSuQmCC",alt:"logo"})})}),Object(r.jsxs)("div",{className:"callToActions",children:[c&&Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(u.b,{to:"/dashboard",children:"My account"})}),Object(r.jsx)("li",{children:Object(r.jsx)("span",{onClick:function(){t(A())},children:"LOGOUT"})})]}),!c&&Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(u.b,{to:"/registration",children:"Register"})}),Object(r.jsx)("li",{children:Object(r.jsx)(u.b,{to:"/login",children:"Login"})})]})]})]})})};Te.defaultProps={currentUser:null};var ye=Te,ge=(c(64),c.p+"static/media/user.fa23bdf7.png"),Ce=function(e){var t=e.currentUser.displayName;return Object(r.jsx)("div",{className:"userProfile",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("div",{className:"img",children:Object(r.jsx)("img",{src:ge})})}),Object(r.jsx)("li",{children:Object(r.jsx)("span",{className:"displayName",children:t&&t})})]})})},Ie=(c(65),function(e){return{currentUser:e.user.currentUser}}),ke=function(e){var t=e.children,c={currentUser:Object(l.c)(Ie).currentUser};return Object(r.jsxs)("div",{className:"verticalNav",children:[Object(r.jsx)(Ce,Object(h.a)({},c)),Object(r.jsx)("div",{className:"menu",children:t})]})},Ue=(c(66),function(e){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("div",{className:"wrap",children:"\xa9\ufe0e\u3000Sachiko fashion 2020"})})}),Ae=function(e){var t=Object(l.b)();return Object(r.jsxs)("div",{className:"adminLayout",children:[Object(r.jsx)(ye,Object(h.a)({},e)),Object(r.jsxs)("div",{className:"controlPanel",children:[Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(ke,{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(u.b,{to:"/admin",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)("span",{className:"signOut",onClick:function(){t(A())},children:"Sign Out"})})]})})}),Object(r.jsx)("div",{className:"content",children:e.children})]}),Object(r.jsx)(Ue,{})]})},Pe=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(ye,Object(h.a)({},e)),Object(r.jsx)("div",{className:"main",children:e.children}),Object(r.jsx)(Ue,{})]})},we=function(e){return Object(r.jsxs)("div",{className:"fullHeight",children:[Object(r.jsx)(ye,Object(h.a)({},e)),e.children,Object(r.jsx)(Ue,{})]})},Qe=c.p+"static/media/ShopMen.1df6426f.jpg",He=c.p+"static/media/ShopWomen.40b3ad9e.jpg",We=(c(67),function(e){return Object(r.jsx)("div",{className:"directory",children:Object(r.jsxs)("div",{className:"wrap",children:[Object(r.jsx)("div",{className:"item",style:{backgroundImage:"url(".concat(He,")")},children:Object(r.jsx)("a",{children:"Shop Womens"})}),Object(r.jsx)("div",{className:"item",style:{backgroundImage:"url(".concat(Qe,")")},children:Object(r.jsx)("a",{children:"Shop Mens"})})]})})}),De=(c(68),function(e){return Object(r.jsx)("section",{className:"homepage",children:Object(r.jsx)(We,{})})}),Le=c(33),Ge={ADD_NEW_PRODUCT_START:"ADD_NEW_PRODUCT_START",FETCH_PRODUCTS_START:"FETCH_PRODUCTS_START",SET_PRODUCTS:"SET_PRODUCTS",DELETE_PRODUCT_START:"DELETE_PRODUCT_START",FETCH_PRODUCT_START:"FETCH_PRODUCT_START",SET_PRODUCT:"SET_PRODUCT"},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:Ge.FETCH_PRODUCTS_START,payload:e}},Fe=c(27),qe=(c(69),function(e){var t=e.children,c=Object(Fe.a)(e,["children"]);return Object(r.jsx)("button",Object(h.a)(Object(h.a)({className:"btn"},c),{},{children:t}))}),ze=function(e){var t=Object(l.b)(),c=Object(Oe.f)(),n=e.documentID,a=e.productThumbnail,s=e.productName,i=e.productPrice;if(!n||!a||!s||"undefined"===typeof i)return null;return Object(r.jsxs)("div",{className:"product",children:[Object(r.jsx)("div",{className:"thumb",children:Object(r.jsx)(u.b,{to:"/product/".concat(n),children:Object(r.jsx)("img",{src:a,alt:s})})}),Object(r.jsx)("div",{className:"details",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("span",{className:"name",children:Object(r.jsx)(u.b,{to:"/product/".concat(n),children:s})})}),Object(r.jsx)("li",{children:Object(r.jsxs)("span",{className:"price",children:["\xa3",i]})}),Object(r.jsx)("li",{children:Object(r.jsx)("div",{className:"addToCart",children:Object(r.jsx)(qe,Object(h.a)(Object(h.a)({},{type:"button"}),{},{onClick:function(){return function(e){e&&(t(),c.push("/cart"))}(e)},children:"Add to cart"}))})})]})})]})},Xe=(c(70),function(e){var t=e.options,c=e.defaultValue,n=e.handleChange,a=e.label,s=Object(Fe.a)(e,["options","defaultValue","handleChange","label"]);return!Array.isArray(t)||t.length<1?null:Object(r.jsxs)("div",{className:"formRow",children:[a&&Object(r.jsx)("label",{children:a}),Object(r.jsx)("select",Object(h.a)(Object(h.a)({className:"formSelect",value:c,onChange:n},s),{},{children:t.map((function(e,t){var c=e.value,n=e.name;return Object(r.jsx)("option",{value:c,children:n},t)}))}))]})}),Je=function(e){var t=e.onLoadMoreEvt,c=void 0===t?function(){}:t;return Object(r.jsx)(qe,{onClick:function(){return c()},children:"Load More"})},Ke=(c(71),function(e){return{products:e.productsData.products}}),Be=function(e){Object(Le.a)(e);var t=Object(l.b)(),c=Object(Oe.f)(),a=Object(Oe.g)().filterType,s=Object(l.c)(Ke).products,i=s.data,u=s.queryDoc,j=s.isLastPage;Object(n.useEffect)((function(){t(Me({filterType:a}))}),[a]);if(!Array.isArray(i))return null;if(i.length<1)return Object(r.jsx)("div",{className:"products",children:Object(r.jsx)("p",{children:"No search results."})});var o={defaultValue:a,options:[{name:"Show all",value:""},{name:"Mens",value:"mens"},{name:"Womens",value:"womens"}],handleChange:function(e){var t=e.target.value;c.push("/search/".concat(t))}},d={onLoadMoreEvt:function(){t(Me({filterType:a,startAfterDoc:u,persistProducts:i}))}};return Object(r.jsxs)("div",{className:"products",children:[Object(r.jsx)("h1",{children:"Browse Products"}),Object(r.jsx)(Xe,Object(h.a)({},o)),Object(r.jsx)("div",{className:"productResults",children:i.map((function(e,t){var c=e.productThumbnail,n=e.productName,a=e.productPrice;if(!c||!n||"undefined"===typeof a)return null;var s=Object(h.a)({},e);return Object(r.jsx)(ze,Object(h.a)({},s),t)}))}),!j&&Object(r.jsx)(Je,Object(h.a)({},d))]})},Ve=function(e){return Object(Le.a)(e),Object(r.jsx)("div",{className:"searchPage",children:Object(r.jsx)(Be,{})})},Ze=c(44),_e=c(45),Ye=c(48),$e=c(46),et=c(16),tt=(c(72),c(73),function(e){var t=e.headline,c=e.children;return console.log(c),Object(r.jsx)("div",{className:"authWrapper",children:Object(r.jsxs)("div",{className:"wrap",children:[t&&Object(r.jsx)("h2",{children:t}),Object(r.jsx)("div",{className:"children",children:c&&c})]})})}),ct=(c(74),function(e){var t=e.handleChange,c=e.label,n=Object(Fe.a)(e,["handleChange","label"]);return Object(r.jsxs)("div",{className:"formRow",children:[c&&Object(r.jsx)("label",{children:c}),Object(r.jsx)("input",Object(h.a)({className:"formInput",onChange:t},n))]})}),rt=function(e){var t=e.user;return{currentUser:t.currentUser,userErr:t.userErr}},nt=function(e){var t=Object(l.b)(),c=Object(Oe.f)(),a=Object(l.c)(rt),s=a.currentUser,i=a.userErr,u=Object(n.useState)(""),j=Object(et.a)(u,2),o=j[0],d=j[1],b=Object(n.useState)(""),O=Object(et.a)(b,2),p=O[0],f=O[1],S=Object(n.useState)(""),m=Object(et.a)(S,2),v=m[0],E=m[1],R=Object(n.useState)(""),N=Object(et.a)(R,2),T=N[0],y=N[1],g=Object(n.useState)([]),C=Object(et.a)(g,2),I=C[0],k=C[1];Object(n.useEffect)((function(){s&&(U(),c.push("/"))}),[s]),Object(n.useEffect)((function(){Array.isArray(i)&&i.length>0&&k(i)}),[i]);var U=function(){d(""),f(""),E(""),y(""),k([])};return Object(r.jsx)(tt,Object(h.a)(Object(h.a)({},{headline:"Registration"}),{},{children:Object(r.jsxs)("div",{className:"formWrap",children:[I.length>0&&Object(r.jsx)("ul",{children:I.map((function(e,t){return Object(r.jsx)("li",{children:e},t)}))}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({type:x.SIGN_UP_USER_START,payload:{displayName:o,email:p,password:v,confirmPassword:T}})},children:[Object(r.jsx)(ct,{type:"text",name:"displayName",value:o,placeholder:"Full Name",handleChange:function(e){return d(e.target.value)}}),Object(r.jsx)(ct,{type:"email",name:"email",value:p,placeholder:"Email",handleChange:function(e){return f(e.target.value)}}),Object(r.jsx)(ct,{type:"password",name:"password",value:v,placeholder:"Password",handleChange:function(e){return E(e.target.value)}}),Object(r.jsx)(ct,{type:"password",name:"confirmPassword",value:T,placeholder:"Confirm Password",handleChange:function(e){return y(e.target.value)}}),Object(r.jsx)(qe,{type:"submit",children:"Register"})]})]})}))},at=(c(75),function(e){Object(Ye.a)(c,e);var t=Object($e.a)(c);function c(){return Object(Ze.a)(this,c),t.apply(this,arguments)}return Object(_e.a)(c,[{key:"render",value:function(){return Object(r.jsx)(nt,{})}}]),c}(n.Component)),st=(c(76),c(77),function(e){return{currentUser:e.user.currentUser}}),it=function(e){var t=Object(l.b)(),c=Object(Oe.f)(),a=Object(l.c)(st).currentUser,s=Object(n.useState)(""),i=Object(et.a)(s,2),j=i[0],o=i[1],d=Object(n.useState)(""),b=Object(et.a)(d,2),O=b[0],p=b[1];Object(n.useEffect)((function(){a&&(f(),c.push("/"))}),[a]);var f=function(){o(""),p("")};return Object(r.jsx)(tt,Object(h.a)(Object(h.a)({},{headline:"LogIn"}),{},{children:Object(r.jsx)("div",{className:"formWrap",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({type:x.EMAIL_SIGN_IN_START,payload:{email:j,password:O}})},children:[Object(r.jsx)(ct,{type:"email",name:"email",value:j,placeholder:"Email",handleChange:function(e){return o(e.target.value)}}),Object(r.jsx)(ct,{type:"password",name:"password",value:O,placeholder:"Password",handleChange:function(e){return p(e.target.value)}}),Object(r.jsx)(qe,{type:"submit",children:"LogIn"}),Object(r.jsx)("div",{className:"socialSingnin",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)(qe,{onClick:function(){t({type:x.GOOGLE_SIGN_IN_START})},children:"Sign in with Google"})})}),Object(r.jsx)("div",{className:"links",children:Object(r.jsx)(u.b,{to:"/recovery",children:"Reset password"})})]})})}))},ut=function(e){return Object(r.jsx)(it,{})},lt=(c(78),function(e){var t=e.user;return{resetPasswordSuccess:t.resetPasswordSuccess,userErr:t.userErr}}),jt=function(e){var t=Object(l.b)(),c=Object(Oe.f)(),r=Object(l.c)(lt),a=r.resetPasswordSuccess,s=r.userErr,i=Object(n.useState)(""),u=Object(et.a)(i,2),j=(u[0],u[1],Object(n.useState)([])),o=Object(et.a)(j,2),d=(o[0],o[1]);Object(n.useEffect)((function(){a&&(t({type:x.RESET_USER_STATE}),c.push("/login"))}),[a]),Object(n.useEffect)((function(){Array.isArray(s)&&s.length>0&&d(s)}),[s])},ot=function(e){return Object(r.jsx)(jt,{})},dt=(c(79),function(e){return Object(r.jsx)("h1",{children:"Your logged in!"})}),bt=(c(80),function(e){var t=e.hideModal,c=e.toggleModal,n=e.children;return t?null:[Object(r.jsx)("div",{className:"modalOverlay",onClick:function(){return c()}}),Object(r.jsx)("div",{className:"modalWrap",children:Object(r.jsx)("div",{className:"modal",children:n})})]}),Ot=(c(81),function(e){return{products:e.productsDate.products}}),ht=function(e){var t=Object(l.c)(Ot).products,c=Object(l.b)(),a=Object(n.useState)(!0),s=Object(et.a)(a,2),i=s[0],u=s[1],j=Object(n.useState)("mens"),o=Object(et.a)(j,2),d=o[0],b=o[1],O=Object(n.useState)(""),x=Object(et.a)(O,2),p=x[0],f=x[1],S=Object(n.useState)(""),m=Object(et.a)(S,2),v=m[0],E=m[1],R=Object(n.useState)(0),N=Object(et.a)(R,2),T=N[0],y=N[1],g=Object(n.useState)(""),C=Object(et.a)(g,2),I=C[0],k=C[1],U=t.data,A=t.queryDoc,P=t.isLastPage;Object(n.useEffect)((function(){c(Me())}),[]);var w=function(){return u(!i)},Q={hideModal:i,toggleModal:w},H={onLoadMoreEvt:function(){c(Me({startAfterDoc:A,persistProducts:U}))}};return Object(r.jsxs)("div",{className:"admin",children:[Object(r.jsx)("div",{className:"callToActions",children:Object(r.jsx)("ul",{children:Object(r.jsx)("li",{children:Object(r.jsx)(qe,{onClick:function(){return w()},children:"Add new product"})})})}),Object(r.jsx)(bt,Object(h.a)(Object(h.a)({},Q),{},{children:Object(r.jsx)("div",{className:"addNewProductForm",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c({type:Ge.ADD_NEW_PRODUCT_START,payload:{productCategory:d,productName:p,productThumbnail:v,productPrice:T,productDesc:I}}),u(!0),b("mens"),f(""),E(""),y(0),k("")},children:[Object(r.jsx)("h2",{children:"Add new product"}),Object(r.jsx)(Xe,{label:"Category",options:[{value:"mens",name:"Mens"},{value:"womens",name:"Womens"}],handleChange:function(e){return b(e.target.value)}}),Object(r.jsx)(ct,{label:"Name",type:"text",value:p,handleChange:function(e){return f(e.target.value)}}),Object(r.jsx)(ct,{label:"Main image URL",type:"url",value:v,handleChange:function(e){return E(e.target.value)}}),Object(r.jsx)(ct,{label:"Price",type:"number",min:"0.00",max:"10000.00",step:"0.01",value:T,handleChange:function(e){return y(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)(qe,{type:"submit",children:"Add product"})]})})})),Object(r.jsx)("div",{className:"manageProducts",children:Object(r.jsx)("table",{border:"0",cellPadding:"0",cellSpacing:"0",children:Object(r.jsxs)("tbody",{children:[Object(r.jsx)("tr",{children:Object(r.jsx)("th",{children:Object(r.jsx)("h1",{children:"Manage Products"})})}),Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:Object(r.jsx)("table",{className:"results",border:"0",cellPadding:"10",cellSpacing:"0",children:Object(r.jsx)("tbody",{children:Array.isArray(U)&&U.length>0&&U.map((function(e,t){var n=e.productName,a=e.productThumbnail,s=e.productPrice,i=e.documentID;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{className:"thumb",src:a})}),Object(r.jsx)("td",{children:n}),Object(r.jsxs)("td",{children:["\xa3",s]}),Object(r.jsx)("td",{children:Object(r.jsx)(qe,{onClick:function(){return c({type:Ge.DELETE_PRODUCT_START,payload:i})},children:"Delete"})})]},t)}))})})})}),Object(r.jsx)("tr",{children:Object(r.jsx)("td",{})}),Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:Object(r.jsx)("table",{border:"0",cellPadding:"10",cellSpacing:"0",children:Object(r.jsx)("tbody",{children:Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:!P&&Object(r.jsx)(Je,Object(h.a)({},H))})})})})})})]})})})]})},xt=(c(82),function(e){var t=Object(l.b)();return Object(n.useEffect)((function(){t({type:x.CHECK_USER_SESSION})}),[]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(pe,{}),Object(r.jsxs)(Oe.c,{children:[Object(r.jsx)(Oe.a,{exact:!0,path:"/",render:function(){return Object(r.jsx)(we,{children:Object(r.jsx)(De,{})})}}),Object(r.jsx)(Oe.a,{path:"/search",render:function(){return Object(r.jsx)(Pe,{children:Object(r.jsx)(Ve,{})})}}),Object(r.jsx)(Oe.a,{path:"/registration",render:function(){return Object(r.jsx)(Pe,{children:Object(r.jsx)(at,{})})}}),Object(r.jsx)(Oe.a,{path:"/login",render:function(){return Object(r.jsx)(Pe,{children:Object(r.jsx)(ut,{})})}}),Object(r.jsx)(Oe.a,{path:"/recovery",render:function(){return Object(r.jsx)(Pe,{children:Object(r.jsx)(ot,{})})}}),Object(r.jsx)(Oe.a,{path:"/dashboard",render:function(){return Object(r.jsx)(Ee,{children:Object(r.jsx)(Pe,{children:Object(r.jsx)(dt,{})})})}}),Object(r.jsx)(Oe.a,{path:"/admin",render:function(){return Object(r.jsx)(Re,{children:Object(r.jsx)(Ae,{children:Object(r.jsx)(ht,{})})})}})]})]})});c(83).config(),i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l.a,{store:be,children:Object(r.jsx)(u.a,{basename:"/RFGeCommerce",children:Object(r.jsx)(xt,{})})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.98f0c3e5.chunk.js.map