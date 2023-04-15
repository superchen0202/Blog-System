"use strict";(self.webpackChunkBlog_System=self.webpackChunkBlog_System||[]).push([[8,9],{71:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var r=t(1),n=t(3),a=t(10),l=t(63),i=t(65),o=t(72);const c=n.memo((()=>{const e=(0,i.C)((e=>e.authReducer.userInfo)),s=(0,l.UO)().id,{data:t,isLoading:c,error:d}=(0,a.mr)(`id=${s}`,{refetchOnMountOrArgChange:!0}),[g,u]=(0,n.useState)({title:"",body:""}),[b,m]=(0,n.useState)({isTitleError:!1,isContentError:!1}),[x]=(0,a.Bq)(),h=(0,n.useRef)(),j=(0,n.useRef)(),[p,f]=(0,n.useState)(!1),v=(0,l.s0)();return(0,n.useEffect)((()=>{t&&void 0!==t[0]&&(e.id!==t[0].userId&&(alert("Woops! it seems something get wrong! X_X"),v(`/${e.username}/posts`)),""!==g.title&&""!==g.body||u(t[0])),p&&setTimeout((()=>{f(!1)}),3e3)}),[c,p]),(0,r.jsxs)(r.Fragment,{children:[p&&(0,r.jsx)(o.default,{onClickCloseBtn:e=>{e.target!==e.currentTarget&&f(!1)},promptText:"更新成功!"}),(0,r.jsxs)("form",Object.assign({onSubmit:e=>{e.preventDefault(),(""===g.title?(m(Object.assign(Object.assign({},b),{isTitleError:!0})),h.current.focus(),0):""!==g.body||(m(Object.assign(Object.assign({},b),{isContentError:!0})),j.current.focus(),0))&&void 0!==g&&void 0!==s&&x({ID:s,title:g.title,body:g.body}).unwrap().then((()=>{f(!0)}))},className:"ml-5 sm:w-96 prose lg:prose-xl"},{children:[(0,r.jsx)("h2",Object.assign({className:"text-3xl font-bold mt-5"},{children:"變更文章"})),(0,r.jsx)("label",Object.assign({className:"block mb-1"},{children:(0,r.jsx)("input",{type:"text",placeholder:"文章標題",className:"w-full rounded-md p-3 btn "+(b.isTitleError?"field-warning":"focus-input"),ref:h,value:g.title,onChange:e=>{u(Object.assign(Object.assign({},g),{title:e.currentTarget.value})),m(Object.assign(Object.assign({},b),{isTitleError:!1}))}})})),(0,r.jsx)("div",Object.assign({className:(b.isTitleError?"":"invisible")+" text-red-500 text-sm height-[36px] mb-2"},{children:"請輸入標題!"})),(0,r.jsx)("label",Object.assign({className:"block mt-1 mb-1"},{children:(0,r.jsx)("textarea",{cols:30,rows:10,placeholder:"文章內容",className:"w-full rounded-md p-3 btn "+(b.isContentError?"field-warning":"focus-input"),ref:j,value:g.body,onChange:e=>{u(Object.assign(Object.assign({},g),{body:e.currentTarget.value})),m(Object.assign(Object.assign({},b),{isContentError:!1}))}})})),(0,r.jsx)("div",Object.assign({className:(b.isContentError?"":"invisible")+" text-red-500 text-sm height-[36px] mb-2"},{children:"請輸入內容!"})),(0,r.jsx)("button",Object.assign({className:"post-btn"},{children:"更新"}))]}))]})}))},72:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var r=t(1);const n=e=>{const{onClickCloseBtn:s,promptText:t}=e;return(0,r.jsxs)("div",Object.assign({id:"alert-3",className:"absolute top-[58px] left-0 right-0 flex p-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",role:"alert"},{children:[(0,r.jsx)("svg",Object.assign({"aria-hidden":"true",className:"flex-shrink-0 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})),(0,r.jsx)("span",Object.assign({className:"sr-only"},{children:"Info"})),(0,r.jsx)("div",Object.assign({className:"ml-3 text-sm font-medium"},{children:t})),(0,r.jsxs)("button",Object.assign({type:"button",onClick:e=>{s(e)},className:"ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700","data-dismiss-target":"#alert-3","aria-label":"Close"},{children:[(0,r.jsx)("span",Object.assign({className:"sr-only"},{children:"Close"})),(0,r.jsx)("svg",Object.assign({"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}))]}))]}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWMsU0FBVyxDQUFFZixTQUFVLEVBQUMsU0FBSyxPQUFRTSxPQUFPQyxPQUFPLENBQUVRLFVBQVcsV0FBYSxDQUFFZixTQUFVLFlBQWEsU0FBSyxNQUFPTSxPQUFPQyxPQUFPLENBQUUsY0FBZSxPQUFRUSxVQUFXLFVBQVdVLEtBQU0sZUFBZ0JDLFFBQVMsWUFBYUMsTUFBTyw4QkFBZ0MsQ0FBRTNCLFVBQVUsU0FBSyxPQUFRLENBQUU0QixTQUFVLFVBQVdDLEVBQUcscU1BQXNNQyxTQUFVLHNCQUEyQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmxvZy1TeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9NeVBvc3RMaXN0L015UG9zdEVkaXRvci50c3giLCJ3ZWJwYWNrOi8vQmxvZy1TeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvU3VjY2Vzc0luZm9CYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTG9hZFBvc3RzUXVlcnksIHVzZVVwZGF0ZVBvc3RNdXRhdGlvbiB9IGZyb20gJ0Avc2VydmljZS9wb3RzU2VydmljZSc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0Avc2VydmljZS9ob29rcyc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBTdWNjZXNzSW5mb0JhciBmcm9tICdAL2NvbXBvbmVudHMvc2hhcmVkL1N1Y2Nlc3NJbmZvQmFyJztcclxuLy8gQ29udGFpbmVyXHJcbmNvbnN0IE15UG9zdEVkaXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJJbmZvID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aFJlZHVjZXIudXNlckluZm8pO1xyXG4gICAgY29uc3QgcG9zdElEID0gdXNlUGFyYW1zKCkuaWQ7XHJcbiAgICBjb25zdCB7IGRhdGE6IHNlbGVjdGVkUG9zdCwgaXNMb2FkaW5nLCBlcnJvciB9ID0gdXNlTG9hZFBvc3RzUXVlcnkoYGlkPSR7cG9zdElEfWAsIHsgcmVmZXRjaE9uTW91bnRPckFyZ0NoYW5nZTogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IFtlZGl0aW5nUG9zdCwgc2V0RWRpdGluZ1Bvc3RdID0gdXNlU3RhdGUoeyB0aXRsZTogXCJcIiwgYm9keTogXCJcIiB9KTtcclxuICAgIGNvbnN0IFt2YWxpZGF0ZVJlc3VsdCwgc2V0VmFsaWRhdGVSZXN1bHRdID0gdXNlU3RhdGUoeyBpc1RpdGxlRXJyb3I6IGZhbHNlLCBpc0NvbnRlbnRFcnJvcjogZmFsc2UgfSk7XHJcbiAgICBjb25zdCBbdXBkYXRlUG9zdF0gPSB1c2VVcGRhdGVQb3N0TXV0YXRpb24oKTtcclxuICAgIGNvbnN0IHJlZlRpdGxlID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCByZWZDb250ZW50ID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbaXNTaG93U3VjY2Vzc0luZm8sIHNldElzU2hvd1N1Y2Nlc3NJbmZvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IGVkaXRpbmdUaXRsZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEVkaXRpbmdQb3N0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZWRpdGluZ1Bvc3QpLCB7IHRpdGxlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pKTtcclxuICAgICAgICBzZXRWYWxpZGF0ZVJlc3VsdChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhbGlkYXRlUmVzdWx0KSwgeyBpc1RpdGxlRXJyb3I6IGZhbHNlIH0pKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBlZGl0aW5nQm9keSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEVkaXRpbmdQb3N0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZWRpdGluZ1Bvc3QpLCB7IGJvZHk6IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUgfSkpO1xyXG4gICAgICAgIHNldFZhbGlkYXRlUmVzdWx0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdmFsaWRhdGVSZXN1bHQpLCB7IGlzQ29udGVudEVycm9yOiBmYWxzZSB9KSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZm9ybVZhbGlkYXRvciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZWRpdGluZ1Bvc3QudGl0bGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc2V0VmFsaWRhdGVSZXN1bHQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB2YWxpZGF0ZVJlc3VsdCksIHsgaXNUaXRsZUVycm9yOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgcmVmVGl0bGUuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlZGl0aW5nUG9zdC5ib2R5ID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHNldFZhbGlkYXRlUmVzdWx0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdmFsaWRhdGVSZXN1bHQpLCB7IGlzQ29udGVudEVycm9yOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgcmVmQ29udGVudC5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChmb3JtVmFsaWRhdG9yKCkgJiYgZWRpdGluZ1Bvc3QgIT09IHVuZGVmaW5lZCAmJiBwb3N0SUQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB1cGRhdGVQb3N0KHsgSUQ6IHBvc3RJRCwgdGl0bGU6IGVkaXRpbmdQb3N0LnRpdGxlLCBib2R5OiBlZGl0aW5nUG9zdC5ib2R5IH0pXHJcbiAgICAgICAgICAgICAgICAudW53cmFwKClcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzU2hvd1N1Y2Nlc3NJbmZvKHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2xvc2VTdWNjZXNzSW5mbyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcclxuICAgICAgICAgICAgc2V0SXNTaG93U3VjY2Vzc0luZm8oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFBvc3QgJiYgc2VsZWN0ZWRQb3N0WzBdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHVzZXJJbmZvLmlkICE9PSBzZWxlY3RlZFBvc3RbMF0udXNlcklkKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnV29vcHMhIGl0IHNlZW1zIHNvbWV0aGluZyBnZXQgd3JvbmchIFhfWCcpO1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGUoYC8ke3VzZXJJbmZvLnVzZXJuYW1lfS9wb3N0c2ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKGVkaXRpbmdQb3N0LnRpdGxlID09PSBcIlwiIHx8IGVkaXRpbmdQb3N0LmJvZHkgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHNldEVkaXRpbmdQb3N0KHNlbGVjdGVkUG9zdFswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgaWYgKGlzU2hvd1N1Y2Nlc3NJbmZvKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTaG93U3VjY2Vzc0luZm8oZmFsc2UpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfSwgW2lzTG9hZGluZywgaXNTaG93U3VjY2Vzc0luZm9dKTtcclxuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbaXNTaG93U3VjY2Vzc0luZm8gJiYgX2pzeChTdWNjZXNzSW5mb0JhciwgeyBvbkNsaWNrQ2xvc2VCdG46IGNsb3NlU3VjY2Vzc0luZm8sIHByb21wdFRleHQ6IFwi5pu05paw5oiQ5YqfIVwiIH0pLCBfanN4cyhcImZvcm1cIiwgT2JqZWN0LmFzc2lnbih7IG9uU3VibWl0OiBmb3JtU3VibWl0SGFuZGxlciwgY2xhc3NOYW1lOiBcIm1sLTUgc206dy05NiBwcm9zZSBsZzpwcm9zZS14bFwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ0ZXh0LTN4bCBmb250LWJvbGQgbXQtNVwiIH0sIHsgY2hpbGRyZW46IFwiXFx1OEI4QVxcdTY2RjRcXHU2NTg3XFx1N0FFMFwiIH0pKSwgX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYmxvY2sgbWItMVwiIH0sIHsgY2hpbGRyZW46IF9qc3goXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHU2NTg3XFx1N0FFMFxcdTZBMTlcXHU5ODRDXCIsIGNsYXNzTmFtZTogYHctZnVsbCByb3VuZGVkLW1kIHAtMyBidG4gJHt2YWxpZGF0ZVJlc3VsdC5pc1RpdGxlRXJyb3IgPyBcImZpZWxkLXdhcm5pbmdcIiA6IFwiZm9jdXMtaW5wdXRcIn1gLCByZWY6IHJlZlRpdGxlLCB2YWx1ZTogZWRpdGluZ1Bvc3QudGl0bGUsIG9uQ2hhbmdlOiBlZGl0aW5nVGl0bGUgfSkgfSkpLCBfanN4KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGAke3ZhbGlkYXRlUmVzdWx0LmlzVGl0bGVFcnJvciA/IFwiXCIgOiBcImludmlzaWJsZVwifSB0ZXh0LXJlZC01MDAgdGV4dC1zbSBoZWlnaHQtWzM2cHhdIG1iLTJgIH0sIHsgY2hpbGRyZW46IFwi6KuL6Ly45YWl5qiZ6aGMIVwiIH0pKSwgX2pzeChcImxhYmVsXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwiYmxvY2sgbXQtMSBtYi0xXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcInRleHRhcmVhXCIsIHsgY29sczogMzAsIHJvd3M6IDEwLCBwbGFjZWhvbGRlcjogXCJcXHU2NTg3XFx1N0FFMFxcdTUxNjdcXHU1QkI5XCIsIGNsYXNzTmFtZTogYHctZnVsbCByb3VuZGVkLW1kIHAtMyBidG4gJHt2YWxpZGF0ZVJlc3VsdC5pc0NvbnRlbnRFcnJvciA/IFwiZmllbGQtd2FybmluZ1wiIDogXCJmb2N1cy1pbnB1dFwifWAsIHJlZjogcmVmQ29udGVudCwgdmFsdWU6IGVkaXRpbmdQb3N0LmJvZHksIG9uQ2hhbmdlOiBlZGl0aW5nQm9keSB9KSB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogYCR7dmFsaWRhdGVSZXN1bHQuaXNDb250ZW50RXJyb3IgPyBcIlwiIDogXCJpbnZpc2libGVcIn0gdGV4dC1yZWQtNTAwIHRleHQtc20gaGVpZ2h0LVszNnB4XSBtYi0yYCB9LCB7IGNoaWxkcmVuOiBcIuiri+i8uOWFpeWFp+WuuSFcIiB9KSksIF9qc3goXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogJ3Bvc3QtYnRuJyB9LCB7IGNoaWxkcmVuOiBcIlxcdTY2RjRcXHU2NUIwXCIgfSkpXSB9KSldIH0pKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhNeVBvc3RFZGl0b3IpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUWGxRYjNOMFJXUnBkRzl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dkxpNHZMaTR2YzNKakwyTnZiWEJ2Ym1WdWRITXZjR0ZuWlhNdlRYbFFiM04wVEdsemRDOU5lVkJ2YzNSRlpHbDBiM0l1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3hQUVVGUExFdEJRVXNzUlVGQlJTeEZRVUZGTEZGQlFWRXNSVUZCUlN4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzVDBGQlR5eERRVUZETzBGQlF6TkVMRTlCUVU4c1JVRkJSU3hwUWtGQmFVSXNSVUZCUlN4eFFrRkJjVUlzUlVGQlJTeE5RVUZOTEhWQ1FVRjFRaXhEUVVGRE8wRkJRMnBHTEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hyUWtGQmEwSXNRMEZCUXp0QlFVTTNReXhQUVVGUExFVkJRVVVzWTBGQll5eEZRVUZGTEUxQlFVMHNhVUpCUVdsQ0xFTkJRVU03UVVGRGFrUXNUMEZCVHl4RlFVRkZMRmRCUVZjc1JVRkJSU3hOUVVGTkxHdENRVUZyUWl4RFFVRkRPMEZCUXk5RExFOUJRVThzWTBGQll5eE5RVUZOTEc5RFFVRnZReXhEUVVGRE8wRkJSMmhGTEZsQlFWazdRVUZEV2l4TlFVRk5MRmxCUVZrc1IwRkJZU3hIUVVGSExFVkJRVVU3U1VGRmJFTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1kwRkJZeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU55UlN4TlFVRk5MRTFCUVUwc1IwRkJSeXhUUVVGVExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdTVUZET1VJc1RVRkJUU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFpRVUZaTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hIUVVGSExHbENRVUZwUWl4RFFVRkRMRTFCUVUwc1RVRkJUU3hGUVVGRkxFVkJRVVVzUlVGQlJTeDVRa0ZCZVVJc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzaElMRTFCUVUwc1EwRkJSU3hYUVVGWExFVkJRVVVzWTBGQll5eERRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRMRVZCUVVNc1MwRkJTeXhGUVVGRExFVkJRVVVzUlVGQlJTeEpRVUZKTEVWQlFVTXNSVUZCUlN4RlFVRkRMRU5CUVVNc1EwRkJRenRKUVVOMFJTeE5RVUZOTEVOQlFVVXNZMEZCWXl4RlFVRkZMR2xDUVVGcFFpeERRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRMRVZCUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzUlVGQlJTeGpRVUZqTEVWQlFVVXNTMEZCU3l4RlFVRkRMRU5CUVVNc1EwRkJRenRKUVVOeVJ5eE5RVUZOTEVOQlFVVXNWVUZCVlN4RFFVRkZMRWRCUVVjc2NVSkJRWEZDTEVWQlFVVXNRMEZCUXp0SlFVTXZReXhOUVVGTkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVWQlFUaERMRU5CUVVNN1NVRkRkRVVzVFVGQlRTeFZRVUZWTEVkQlFVY3NUVUZCVFN4RlFVRnBSQ3hEUVVGRE8wbEJRek5GTEUxQlFVMHNRMEZCUlN4cFFrRkJhVUlzUlVGQlJTeHZRa0ZCYjBJc1EwRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTndSU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eFhRVUZYTEVWQlFVVXNRMEZCUXp0SlFVVXZRaXhOUVVGTkxGbEJRVmtzUjBGQlJ5eERRVUZETEV0QlFUQkRMRVZCUVVVc1JVRkJSVHRSUVVOc1JTeGpRVUZqTEdsRFFVRkxMRmRCUVZjc1MwRkJSU3hMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRWxCUVVjc1EwRkJRVHRSUVVOdVJTeHBRa0ZCYVVJc2FVTkJRVXNzWTBGQll5eExRVUZGTEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVVc1EwRkJRenRKUVVNNVJDeERRVUZETEVOQlFVTTdTVUZGUml4TlFVRk5MRmRCUVZjc1IwRkJSeXhEUVVGRExFdEJRVFpETEVWQlFVVXNSVUZCUlR0UlFVTndSU3hqUVVGakxHbERRVUZMTEZkQlFWY3NTMEZCUlN4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZMTEVsQlFVVXNRMEZCUVR0UlFVTnFSU3hwUWtGQmFVSXNhVU5CUVVzc1kwRkJZeXhMUVVGRkxHTkJRV01zUlVGQlJTeExRVUZMTEVsQlFVVXNRMEZCUXp0SlFVTm9SU3hEUVVGRExFTkJRVU03U1VGRlJpeE5RVUZOTEdGQlFXRXNSMEZCUnl4SFFVRkhMRVZCUVVVN1VVRkZla0lzU1VGQlJ5eFhRVUZYTEVOQlFVTXNTMEZCU3l4TFFVRkxMRVZCUVVVc1JVRkJRenRaUVVNeFFpeHBRa0ZCYVVJc2FVTkJRVXNzWTBGQll5eExRVUZGTEZsQlFWa3NSVUZCUlN4SlFVRkpMRWxCUVVVc1EwRkJRenRaUVVNelJDeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xbEJRM3BDTEU5QlFVOHNTMEZCU3l4RFFVRkRPMU5CUTJRN1VVRkZSQ3hKUVVGSExGZEJRVmNzUTBGQlF5eEpRVUZKTEV0QlFVc3NSVUZCUlN4RlFVRkRPMWxCUTNwQ0xHbENRVUZwUWl4cFEwRkJTeXhqUVVGakxFdEJRVVVzWTBGQll5eEZRVUZGTEVsQlFVa3NTVUZCUlN4RFFVRkRPMWxCUXpkRUxGVkJRVlVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1dVRkRNMElzVDBGQlR5eExRVUZMTEVOQlFVTTdVMEZEWkR0UlFVVkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRMlFzUTBGQlF5eERRVUZETzBsQlJVWXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eERRVUZETEV0QlFYVkRMRVZCUVVVc1JVRkJSVHRSUVVWd1JTeExRVUZMTEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1VVRkZka0lzU1VGQlJ5eGhRVUZoTEVWQlFVVXNTVUZCU1N4WFFVRlhMRXRCUVVzc1UwRkJVeXhKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVWQlFVTTdXVUZEZEVVc1ZVRkJWU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUnl4TFFVRkxMRVZCUVVVc1YwRkJWeXhEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJReXhEUVVGRE8ybENRVU16UlN4TlFVRk5MRVZCUVVVN2FVSkJRMUlzU1VGQlNTeERRVUZETEVkQlFVVXNSVUZCUlR0blFrRkRVaXh2UWtGQmIwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUVR0VFFVTklPMGxCUTBnc1EwRkJReXhEUVVGRE8wbEJSVVlzVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFdEJRVEJETEVWQlFVVXNSVUZCUlR0UlFVTjBSU3hKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEV0QlFVc3NTMEZCU3l4RFFVRkRMR0ZCUVdFc1JVRkJSVHRaUVVONFF5eHZRa0ZCYjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU0zUWp0SlFVTklMRU5CUVVNc1EwRkJRenRKUVVWR0xGTkJRVk1zUTBGQlF5eEhRVUZITEVWQlFVVTdVVUZGWWl4SlFVRkhMRmxCUVZrc1NVRkJTU3haUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkRPMWxCUlM5RExFbEJRVWNzVVVGQlVTeERRVUZETEVWQlFVVXNTMEZCU3l4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZETzJkQ1FVTjRReXhMUVVGTExFTkJRVU1zTUVOQlFUQkRMRU5CUVVNc1EwRkJRenRuUWtGRGJFUXNVVUZCVVN4RFFVRkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzVVVGQlVTeERRVUZETEVOQlFVTTdZVUZEZWtNN1dVRkJRU3hEUVVGRE8xbEJSVVlzU1VGQlJ5eFhRVUZYTEVOQlFVTXNTMEZCU3l4TFFVRkxMRVZCUVVVc1NVRkJTU3hYUVVGWExFTkJRVU1zU1VGQlNTeExRVUZMTEVWQlFVVXNSVUZCUXp0blFrRkRja1FzWTBGQll5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMnBETzFsQlFVRXNRMEZCUXp0VFFVTklPMUZCUVVFc1EwRkJRenRSUVVWR0xFbEJRVWNzYVVKQlFXbENMRVZCUVVNN1dVRkRia0lzVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlR0blFrRkRaQ3h2UWtGQmIwSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVNNVFpeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRWanRSUVVGQkxFTkJRVU03U1VGRlNpeERRVUZETEVWQlFVVXNRMEZCUXl4VFFVRlRMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXl4RFFVRkJPMGxCUld4RExFOUJRVThzUTBGRFRDdzRRa0ZEU1N4cFFrRkJhVUlzU1VGQlNTeExRVUZETEdOQlFXTXNTVUZCUXl4bFFVRmxMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTlCUVU4c1IwRkJTU3hGUVVWcVJ5dzRRa0ZCVFN4UlFVRlJMRVZCUVVVc2FVSkJRV2xDTEVWQlFVVXNVMEZCVXl4RlFVRkRMR2REUVVGblF5eHBRa0ZITTBVc01rSkJRVWtzVTBGQlV5eEZRVUZETEhsQ1FVRjVRaXc0UTBGRmJFTXNSVUZIVEN3NFFrRkJUeXhUUVVGVExFVkJRVU1zV1VGQldTeG5Ra0ZETTBJc1owSkJRVThzU1VGQlNTeEZRVUZETEUxQlFVMHNSVUZCUXl4WFFVRlhMRVZCUVVNc01FSkJRVTBzUlVGRE9VSXNVMEZCVXl4RlFVRkZMRFpDUVVFMlFpeGpRVUZqTEVOQlFVTXNXVUZCV1N4RFFVRkJMRU5CUVVNc1EwRkJRU3hsUVVGbExFTkJRVUVzUTBGQlF5eERRVUZCTEdGQlFXRXNSVUZCUlN4RlFVTnVSeXhIUVVGSExFVkJRVVVzVVVGQlVTeEZRVU5pTEV0QlFVc3NSVUZCUlN4WFFVRlhMRU5CUVVNc1MwRkJTeXhGUVVONFFpeFJRVUZSTEVWQlFVY3NXVUZCV1N4SFFVTTFRaXhKUVVOSkxFVkJSMUlzTkVKQlFVc3NVMEZCVXl4RlFVRkZMRWRCUVVjc1kwRkJZeXhEUVVGRExGbEJRVmtzUTBGQlFTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkJMRU5CUVVNc1EwRkJRU3hYUVVGWExEQkRRVUV3UXl4blFrRkRjRWNzVVVGQlVTeEpRVU5PTEVWQlIwNHNPRUpCUVU4c1UwRkJVeXhGUVVGRExHbENRVUZwUWl4blFrRkRhRU1zYlVKQlFWVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVU5zUWl4WFFVRlhMRVZCUVVjc01FSkJRVTBzUlVGRGNFSXNVMEZCVXl4RlFVRkpMRFpDUVVFMlFpeGpRVUZqTEVOQlFVTXNZMEZCWXl4RFFVRkJMRU5CUVVNc1EwRkJRU3hsUVVGbExFTkJRVUVzUTBGQlF5eERRVUZCTEdGQlFXRXNSVUZCUlN4RlFVTjJSeXhIUVVGSExFVkJRVXNzVlVGQlZTeEZRVU5zUWl4TFFVRkxMRVZCUVVzc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGRE1VSXNVVUZCVVN4RlFVRkxMRmRCUVZjc1IwRkRhRU1zU1VGRFNTeEZRVWRTTERSQ1FVRkxMRk5CUVZNc1JVRkJSU3hIUVVGSExHTkJRV01zUTBGQlF5eGpRVUZqTEVOQlFVRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRU3hEUVVGRExFTkJRVUVzVjBGQlZ5d3dRMEZCTUVNc1owSkJRM1JITEZGQlFWRXNTVUZEVGl4RlFVZE9MQ3RDUVVGUkxGTkJRVk1zUlVGQlF5eFZRVUZWTEd0RFFVVnVRaXhMUVVWS0xFbEJRMDRzUTBGRFNpeERRVUZCTzBGQlEwZ3NRMEZCUXl4RFFVRkRPMEZCUlVZc1pVRkJaU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRJbjA9IiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuY29uc3QgU3VjY2Vzc0luZm9CYXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgb25DbGlja0Nsb3NlQnRuLCBwcm9tcHRUZXh0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGNsb3NlQnRuSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIG9uQ2xpY2tDbG9zZUJ0bihldmVudCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBPYmplY3QuYXNzaWduKHsgaWQ6IFwiYWxlcnQtM1wiLCBjbGFzc05hbWU6IFwiYWJzb2x1dGUgdG9wLVs1OHB4XSBsZWZ0LTAgcmlnaHQtMCBmbGV4IHAtNCB0ZXh0LWdyZWVuLTgwMCByb3VuZGVkLWxnIGJnLWdyZWVuLTUwIGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LWdyZWVuLTQwMFwiLCByb2xlOiBcImFsZXJ0XCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJzdmdcIiwgT2JqZWN0LmFzc2lnbih7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzTmFtZTogXCJmbGV4LXNocmluay0wIHctNSBoLTVcIiwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgdmlld0JveDogXCIwIDAgMjAgMjBcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFwicGF0aFwiLCB7IGZpbGxSdWxlOiBcImV2ZW5vZGRcIiwgZDogXCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS03LTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwek05IDlhMSAxIDAgMDAwIDJ2M2ExIDEgMCAwMDEgMWgxYTEgMSAwIDEwMC0ydi0zYTEgMSAwIDAwLTEtMUg5elwiLCBjbGlwUnVsZTogXCJldmVub2RkXCIgfSkgfSkpLCBfanN4KFwic3BhblwiLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcInNyLW9ubHlcIiB9LCB7IGNoaWxkcmVuOiBcIkluZm9cIiB9KSksIF9qc3goXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJtbC0zIHRleHQtc20gZm9udC1tZWRpdW1cIiB9LCB7IGNoaWxkcmVuOiBwcm9tcHRUZXh0IH0pKSwgX2pzeHMoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IGNsb3NlQnRuSGFuZGxlciwgY2xhc3NOYW1lOiBcIm1sLWF1dG8gLW14LTEuNSAtbXktMS41IGJnLWdyZWVuLTUwIHRleHQtZ3JlZW4tNTAwIHJvdW5kZWQtbGcgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JlZW4tNDAwIHAtMS41IGhvdmVyOmJnLWdyZWVuLTIwMCBpbmxpbmUtZmxleCBoLTggdy04IGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LWdyZWVuLTQwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCIsIFwiZGF0YS1kaXNtaXNzLXRhcmdldFwiOiBcIiNhbGVydC0zXCIsIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIgfSwgeyBjaGlsZHJlbjogW19qc3goXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwic3Itb25seVwiIH0sIHsgY2hpbGRyZW46IFwiQ2xvc2VcIiB9KSksIF9qc3goXCJzdmdcIiwgT2JqZWN0LmFzc2lnbih7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzTmFtZTogXCJ3LTUgaC01XCIsIGZpbGw6IFwiY3VycmVudENvbG9yXCIsIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcInBhdGhcIiwgeyBmaWxsUnVsZTogXCJldmVub2RkXCIsIGQ6IFwiTTQuMjkzIDQuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCA4LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDExLjQxNCAxMGw0LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCAxMS40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDguNTg2IDEwIDQuMjkzIDUuNzA3YTEgMSAwIDAxMC0xLjQxNHpcIiwgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiIH0pIH0pKV0gfSkpXSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdWNjZXNzSW5mb0JhcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVTNWalkyVnpjMGx1Wm05Q1lYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTh1TGk5emNtTXZZMjl0Y0c5dVpXNTBjeTl6YUdGeVpXUXZVM1ZqWTJWemMwbHVabTlDWVhJdWRITjRJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZQUVN4TlFVRk5MR05CUVdNc1IwRkJiVUlzUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlR0SlFVVTNReXhOUVVGTkxFVkJRVVVzWlVGQlpTeEZRVUZGTEZWQlFWVXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVVNVF5eE5RVUZOTEdWQlFXVXNSMEZCUnl4RFFVRkRMRXRCUVRCRExFVkJRVVVzUlVGQlJUdFJRVU51UlN4bFFVRmxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE0wSXNRMEZCUXl4RFFVRkRPMGxCUlVZc1QwRkJUeXhEUVVOSUxEWkNRVUZMTEVWQlFVVXNSVUZCUXl4VFFVRlRMRVZCUVVNc1UwRkJVeXhGUVVGRExIZElRVUYzU0N4RlFVRkRMRWxCUVVrc1JVRkJReXhQUVVGUExHbENRVVUzU2l3eVEwRkJhVUlzVFVGQlRTeEZRVUZETEZOQlFWTXNSVUZCUXl4MVFrRkJkVUlzUlVGQlF5eEpRVUZKTEVWQlFVTXNZMEZCWXl4RlFVRkRMRTlCUVU4c1JVRkJReXhYUVVGWExFVkJRemRHTEV0QlFVc3NSVUZCUXl3MFFrRkJORUlzWjBKQlEyeERMR1ZCUVUwc1VVRkJVU3hGUVVGRExGTkJRVk1zUlVGRGNFSXNRMEZCUXl4RlFVRkRMR3RKUVVGclNTeEZRVU53U1N4UlFVRlJMRVZCUVVNc1UwRkJVeXhIUVVGUkxFbEJRelZDTEVWQlJVNHNOa0pCUVUwc1UwRkJVeXhGUVVGRExGTkJRVk1zTUVKQlFWa3NSVUZEY2tNc05FSkJRVXNzVTBGQlV5eEZRVUZETERCQ1FVRXdRaXhuUWtGRGJrTXNWVUZCVlN4SlFVTldMRVZCUlU0c1owTkJRVkVzU1VGQlNTeEZRVUZETEZGQlFWRXNSVUZCUXl4UFFVRlBMRVZCUVVVc1pVRkJaU3hGUVVNeFF5eFRRVUZUTEVWQlFVTXNNRTFCUVRCTkxIbENRVU5vVFN4VlFVRlZMR2RDUVVGWkxFOUJRVThzYVVKQlEycEVMRFpDUVVGTkxGTkJRVk1zUlVGQlF5eFRRVUZUTERKQ1FVRmhMRVZCUTNSRExESkRRVUZwUWl4TlFVRk5MRVZCUVVNc1UwRkJVeXhGUVVGRExGTkJRVk1zUlVGQlF5eEpRVUZKTEVWQlFVTXNZMEZCWXl4RlFVRkRMRTlCUVU4c1JVRkJReXhYUVVGWExFVkJReTlGTEV0QlFVc3NSVUZCUXl3MFFrRkJORUlzWjBKQlEyeERMR1ZCUVUwc1VVRkJVU3hGUVVGRExGTkJRVk1zUlVGRGNFSXNRMEZCUXl4RlFVRkRMRzlOUVVGdlRTeEZRVU4wVFN4UlFVRlJMRVZCUVVNc1UwRkJVeXhIUVVGUkxFbEJRelZDTEV0QlEwUXNTMEZEVUN4RFFVTlVMRU5CUVVNN1FVRkRUaXhEUVVGRExFTkJRVUU3UVVGRlJDeGxRVUZsTEdOQlFXTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJ1c2VySW5mbyIsInN0YXRlIiwiYXV0aFJlZHVjZXIiLCJwb3N0SUQiLCJpZCIsImRhdGEiLCJzZWxlY3RlZFBvc3QiLCJpc0xvYWRpbmciLCJlcnJvciIsInJlZmV0Y2hPbk1vdW50T3JBcmdDaGFuZ2UiLCJlZGl0aW5nUG9zdCIsInNldEVkaXRpbmdQb3N0IiwidXNlU3RhdGUiLCJ0aXRsZSIsImJvZHkiLCJ2YWxpZGF0ZVJlc3VsdCIsInNldFZhbGlkYXRlUmVzdWx0IiwiaXNUaXRsZUVycm9yIiwiaXNDb250ZW50RXJyb3IiLCJ1cGRhdGVQb3N0IiwicmVmVGl0bGUiLCJ1c2VSZWYiLCJyZWZDb250ZW50IiwiaXNTaG93U3VjY2Vzc0luZm8iLCJzZXRJc1Nob3dTdWNjZXNzSW5mbyIsIm5hdmlnYXRlIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwidXNlcklkIiwiYWxlcnQiLCJ1c2VybmFtZSIsInNldFRpbWVvdXQiLCJjaGlsZHJlbiIsIm9uQ2xpY2tDbG9zZUJ0biIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInByb21wdFRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsImZvY3VzIiwiSUQiLCJ1bndyYXAiLCJ0aGVuIiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVmIiwidmFsdWUiLCJvbkNoYW5nZSIsImNvbHMiLCJyb3dzIiwicHJvcHMiLCJyb2xlIiwiZmlsbCIsInZpZXdCb3giLCJ4bWxucyIsImZpbGxSdWxlIiwiZCIsImNsaXBSdWxlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=